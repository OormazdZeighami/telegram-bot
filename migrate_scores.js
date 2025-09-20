const fs = require("fs");
const path = require("path");

// فایل نتایج کوییز
const RESULTS_FILE = path.join(__dirname, "quiz_results.json");

// تابع برای خواندن اطلاعات از فایل JSON
function loadQuizResults() {
  try {
    if (fs.existsSync(RESULTS_FILE)) {
      const data = fs.readFileSync(RESULTS_FILE, "utf8");
      return JSON.parse(data);
    }
    return {};
  } catch (error) {
    console.error("Error loading quiz results:", error);
    return {};
  }
}

// تابع برای ذخیره اطلاعات در فایل JSON
function saveQuizResults(results) {
  try {
    fs.writeFileSync(RESULTS_FILE, JSON.stringify(results, null, 2), "utf8");
    console.log("✅ نتایج با موفقیت ذخیره شدند.");
  } catch (error) {
    console.error("Error saving quiz results:", error);
  }
}

// تابع اصلی برای به‌روزرسانی امتیازها
function migrateScores() {
  console.log("🔄 شروع به‌روزرسانی امتیازهای کوییز...");
  
  const quizSessions = loadQuizResults();
  
  if (Object.keys(quizSessions).length === 0) {
    console.log("ℹ️ هیچ داده‌ای برای به‌روزرسانی یافت نشد.");
    return;
  }
  
  let updatedCount = 0;
  
  // بررسی و به‌روزرسانی هر session
  for (const [userId, session] of Object.entries(quizSessions)) {
    if (session.status === "finished" && session.answers) {
      // محاسبه امتیاز صحیح بر اساس پاسخ‌ها
      const correctCount = session.answers.filter((ans) => ans.isCorrect).length;
      const totalQuestions = session.answers.length;
      const incorrectCount = totalQuestions - correctCount;
      
      // بررسی اینکه آیا نیاز به به‌روزرسانی دارد
      if (session.score !== correctCount || session.incorrectCount !== incorrectCount) {
        console.log(`📊 به‌روزرسانی امتیاز برای کاربر ${session.name || userId}:`);
        console.log(`   قبل: ${session.score || 0} صحیح / ${session.incorrectCount || 0} اشتباه`);
        
        // به‌روزرسانی امتیازها
        session.score = correctCount;
        session.incorrectCount = incorrectCount;
        
        console.log(`   بعد: ${session.score} صحیح / ${session.incorrectCount} اشتباه`);
        updatedCount++;
      }
    }
  }
  
  if (updatedCount > 0) {
    // ذخیره نتایج به‌روزرسانی شده
    saveQuizResults(quizSessions);
    console.log(`✅ ${updatedCount} رکورد با موفقیت به‌روزرسانی شد.`);
  } else {
    console.log("ℹ️ همه امتیازها قبلاً درست بودند.");
  }
  
  console.log("🎉 به‌روزرسانی کامل شد!");
}

// اجرای اسکریپت
if (require.main === module) {
  migrateScores();
}

module.exports = { migrateScores };
