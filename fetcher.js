const axios = require("./utils/http");
const fs = require("fs");
const fsp = fs.promises;
const he = require("he");

// Settings
const TOTAL_QUESTIONS_TO_FETCH = 1000;
const QUESTIONS_PER_REQUEST = 50; // API limit
const DELAY_BETWEEN_REQUESTS = 5000; // 5 seconds delay to prevent rate limiting

const CATEGORIES = {
  "اطلاعات عمومی": 9,
  فیلم: 11,
  موسیقی: 12,
  ورزش: 21,
  تاریخ: 23,
  "علم و طبیعت": 17,
  جغرافیا: 22,
};

// Main function to run the script
async function fetchAllQuestions() {
  console.log("Question fetcher script started...");

  let allQuestionsByCategory = {};
  for (const categoryName in CATEGORIES) {
    allQuestionsByCategory[categoryName] = [];
  }

  try {
    // 1. Get a session token from the API to avoid duplicate questions
    console.log("Requesting session token from OpenTDB...");
    const tokenResponse = await axios.get(
      "https://opentdb.com/api_token.php?command=request"
    );
    const token = tokenResponse.data.token;
    console.log(`Token received: ${token}`);

    const totalRequests = TOTAL_QUESTIONS_TO_FETCH / QUESTIONS_PER_REQUEST;
    console.log(
      `\nStarting to fetch ${TOTAL_QUESTIONS_TO_FETCH} questions in ${totalRequests} batches...`
    );

    for (let i = 0; i < totalRequests; i++) {
      process.stdout.write(`- Fetching batch ${i + 1} of ${totalRequests}... `);

      const response = await axios.get(
        `https://opentdb.com/api.php?amount=${QUESTIONS_PER_REQUEST}&token=${token}`
      );

      if (response.data.response_code !== 0) {
        console.log(
          "Unexpected response code, questions for this session might be exhausted."
        );
        break;
      }

      // 2. Process and categorize the questions
      response.data.results.forEach((q) => {
        const categoryName =
          Object.keys(CATEGORIES).find(
            (key) => CATEGORIES[key] === q.category_id
          ) || "اطلاعات عمومی";

        const formattedQuestion = {
          question: he.decode(q.question),
          options: [
            ...q.incorrect_answers.map((a) => he.decode(a)),
            he.decode(q.correct_answer),
          ],
          correctAnswer: he.decode(q.correct_answer),
        };

        if (!allQuestionsByCategory[categoryName]) {
          allQuestionsByCategory[categoryName] = [];
        }
        allQuestionsByCategory[categoryName].push(formattedQuestion);
      });

      console.log("Done.");

      // 3. Wait between requests to avoid getting blocked
      await new Promise((resolve) =>
        setTimeout(resolve, DELAY_BETWEEN_REQUESTS)
      );
    }

    // 4. Save the final result to the file (async)
    const fileContent = `const questions = ${JSON.stringify(
      allQuestionsByCategory,
      null,
      2
    )};\n\nmodule.exports = questions;`;
    await fsp.writeFile("questions.js", fileContent, "utf8");

    let totalSaved = Object.values(allQuestionsByCategory).reduce(
      (sum, cat) => sum + cat.length,
      0
    );
    console.log(
      `\n✅ Operation successful! ${totalSaved} questions were saved to questions.js.`
    );
    console.log(
      "--> Next step: Open questions.js and translate the content to Persian."
    );
  } catch (error) {
    console.error(
      "\n❌ An error occurred during script execution:",
      error.message
    );
  }
}

// Run the script when executed directly
if (require.main === module) {
  (async () => {
    await fetchAllQuestions();
  })();
}
