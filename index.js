// const TelegramBot = require("node-telegram-bot-api");

// const token = "8024875280:AAGv3q8X8uO3BkYmNURLZnHTFoaJhOoTfQY"; // توکن واقعی خودت رو اینجا بگذار

// const bot = new TelegramBot(token, {
//   polling: true, // این خط برای فعال کردن حالت polling هست که ربات بتونه آپدیت‌ها رو دریافت کنه
// });

// bot.onText(/\/start/, (msg) => {
//   bot.sendMessage(msg.chat.id, "✅ خوش اومدی! بات بدون پروکسی وصل شد.");
// });

// // شما می‌تونی دستورات و منطق دیگه باتت رو اینجا اضافه کنی.




// ===============================================================================

// اب هوای شهر

// // کتابخانه‌های مورد نیاز رو فراخوانی می‌کنیم
// const TelegramBot = require("node-telegram-bot-api");
// const axios = require("axios");

// // ❗️ توکن ربات خودت رو اینجا قرار بده
// const token = "8024875280:AAGv3q8X8uO3BkYmNURLZnHTFoaJhOoTfQY";

// // ❗️ کلید API رایگان خودت رو از سایت OpenWeatherMap بگیر و اینجا قرار بده
// const weatherApiKey = "067af187004c63a200585053062965e4"; // <--- مهم! این قسمت رو باید پر کنی

// // ربات رو با حالت polling فعال می‌کنیم
// const bot = new TelegramBot(token, { polling: true });

// // این پیام برای اطمینان از آنلاین بودن ربات هست
// bot.onText(/\/start/, (msg) => {
//   bot.sendMessage(msg.chat.id, "✅ خوش اومدی! من یک ربات نمایش آب و هوا هستم. برای استفاده، اسم شهر مورد نظرت رو بعد از دستور /weather بنویس. \n\nمثال: /weather Tehran");
// });

// // این بخش اصلی منطق آب و هواست
// bot.onText(/\/weather (.+)/, (msg, match) => {
//   const chatId = msg.chat.id;
//   const city = match[1]; // این متغیر، شهری هست که کاربر وارد کرده

//   // آدرس API که می‌خوایم ازش اطلاعات بگیریم
//   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApiKey}&units=metric&lang=fa`;

//   // با استفاده از axios یک درخواست GET به آدرس بالا می‌فرستیم
//   axios.get(url)
//     .then(response => {
//       // اگر درخواست موفقیت‌آمیز بود
//       const weather = response.data;
//      console.log(weather)
//       const message = `
// ☀️ **وضعیت آب و هوای ${weather.name}**

// 🔹 **توضیحات:** ${weather.weather[0].description}
// 🌡️ **دما:** ${Math.round(weather.main.temp)} درجه سانتی‌گراد
// 💧 **رطوبت:** ${weather.main.humidity}%
// 💨 **سرعت باد:** ${weather.wind.speed} متر بر ثانیه
//       `;
//       bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
//     })
//     .catch(error => {
//       // اگر شهر پیدا نشد یا خطایی رخ داد
//       console.error(error); // این خط برای دیباگ کردن در کنسول تو خوبه
//       bot.sendMessage(chatId, "😕 متاسفانه نتونستم این شهر رو پیدا کنم. لطفاً اسم شهر رو به انگلیسی و درست وارد کن.");
//     });
// });

// console.log("ربات آب و هوا با موفقیت روشن شد!");



// ====================================================================================
// سنگ کاغذ قیچی

// const TelegramBot = require("node-telegram-bot-api");

// // ❗️ توکن ربات خودت رو اینجا قرار بده
// const token = "8024875280:AAGv3q8X8uO3BkYmNURLZnHTFoaJhOoTfQY";

// const bot = new TelegramBot(token, { polling: true });

// // گزینه‌های بازی
// const options = {
//   rock: "💎 سنگ",
//   paper: "📄 کاغذ",
//   scissors: "✂️ قیچی",
// };

// // --- شروع منطق ربات ---

// // 1. وقتی کاربر دستور /game رو می‌فرسته
// bot.onText(/\/game/, (msg) => {
//   const chatId = msg.chat.id;

//   // یک پیام با دکمه‌های شیشه‌ای (inline_keyboard) ارسال می‌کنیم
//   bot.sendMessage(chatId, "یکی رو انتخاب کن تا بازی کنیم!", {
//     reply_markup: {
//       inline_keyboard: [
//         [
//           { text: options.rock, callback_data: "rock" },
//           { text: options.paper, callback_data: "paper" },
//           { text: options.scissors, callback_data: "scissors" },
//         ],
//       ],
//     },
//   });
// });

// // 2. وقتی کاربر روی یکی از دکمه‌ها کلیک می‌کنه
// bot.on("callback_query", (callbackQuery) => {
//   const msg = callbackQuery.message;
//   const chatId = msg.chat.id;
//   const userChoice = callbackQuery.data; // انتخاب کاربر ('rock', 'paper', 'scissors')

//   // 3. ربات به صورت تصادفی یکی از گزینه‌ها رو انتخاب می‌کنه
//   const choices = ["rock", "paper", "scissors"];
//   const botChoice = choices[Math.floor(Math.random() * choices.length)];

//   // 4. منطق بازی برای تعیین برنده
//   let resultMessage;

//   if (userChoice === botChoice) {
//     resultMessage = "مساوی شدیم! 😐";
//   } else if (
//     (userChoice === "rock" && botChoice === "scissors") ||
//     (userChoice === "paper" && botChoice === "rock") ||
//     (userChoice === "scissors" && botChoice === "paper")
//   ) {
//     resultMessage = "تو بردی! 🎉";
//   } else {
//     resultMessage = "من بردم! 🥳";
//   }

//   // 5. پیام نتیجه رو به کاربر نشون می‌دیم
//   const fullMessage = `
// شما ${options[userChoice]} را انتخاب کردی.
// من ${options[botChoice]} را انتخاب کردم.

// **${resultMessage}**

// برای بازی دوباره، دستور /game رو بفرست.
//   `;

//   // پیام قبلی ("یکی رو انتخاب کن...") رو ویرایش می‌کنیم و نتیجه رو به جاش می‌نویسیم
//   bot.editMessageText(fullMessage, {
//     chat_id: chatId,
//     message_id: msg.message_id,
//     reply_markup: {}, // دکمه‌ها رو حذف می‌کنیم
//     parse_mode: "Markdown",
//   });

//   // به تلگرام خبر می‌دیم که به کلیک کاربر پاسخ داده شده
//   bot.answerCallbackQuery(callbackQuery.id);
// });

// bot.onText(/\/start/, (msg) => {
//   bot.sendMessage(
//     msg.chat.id,
//     "✅ خوش اومدی! برای شروع بازی دستور /game رو بفرست."
//   );
// });

// console.log("ربات 'سنگ، کاغذ، قیچی' با موفقیت روشن شد!");


// ===============================================================================

//  تبدیل ارز

// const TelegramBot = require("node-telegram-bot-api");
// const axios = require("axios");

// // ❗️ توکن ربات خودت رو اینجا قرار بده
// const token = "8024875280:AAGv3q8X8uO3BkYmNURLZnHTFoaJhOoTfQY";

// // ❗️ کلید API رایگانی که از سایت ExchangeRate-API.com گرفتی رو اینجا قرار بده
// const exchangeApiKey = "127373a40d7805b5ef575b9d"; // <--- مهم! این قسمت رو باید پر کنی

// const bot = new TelegramBot(token, { polling: true });

// // --- شروع منطق ربات ---

// bot.onText(/\/start/, (msg) => {
//   bot.sendMessage(
//     msg.chat.id,
//     `
// ✅ خوش اومدی، دانیال! من یک ربات تبدیل ارز هستم.

// برای استفاده، لطفاً طبق الگوی زیر پیامت رو بفرست:

// /convert [مقدار] [کد ارز مبدأ] to [کد ارز مقصد]

// **مثال:**
// /convert 100 USD to EUR

// کد ارزهای رایج:
// USD: دلار آمریکا
// EUR: یورو
// IRR: ریال ایران
// TRY: لیر ترکیه
// AED: درهم امارات
//   `
//   );
// });

// // این بخش اصلی منطق تبدیل ارز است
// // /convert 100 USD to EUR
// bot.onText(
//   /\/convert\s+([\d\.]+)\s+([A-Z]{3})\s+to\s+([A-Z]{3})/i,
//   (msg, match) => {
//     const chatId = msg.chat.id;

//     const amount = parseFloat(match[1]); // مقدار پول (مثلاً 100)
//     const fromCurrency = match[2].toUpperCase(); // ارز مبدأ (مثلاً USD)
//     const toCurrency = match[3].toUpperCase(); // ارز مقصد (مثلاً EUR)

//     // آدرس API برای دریافت نتیجه تبدیل
//     const url = `https://v6.exchangerate-api.com/v6/${exchangeApiKey}/pair/${fromCurrency}/${toCurrency}/${amount}`;

//     bot.sendMessage(chatId, "⏳ لطفاً صبر کن، در حال محاسبه نرخ ارز...");

//     axios
//       .get(url)
//       .then((response) => {
//         // اگر درخواست موفقیت‌آمیز بود
//         const data = response.data;

//         if (data.result === "success") {
//           const convertedAmount = data.conversion_result;

//           // اعداد رو برای خوانایی بهتر فرمت می‌کنیم (مثلا 1,000,000)
//           const formattedAmount = amount.toLocaleString("en-US");
//           const formattedConvertedAmount = convertedAmount.toLocaleString(
//             "en-US",
//             { maximumFractionDigits: 2 }
//           );

//           const message = `
// ✅ **نتیجه تبدیل:**

// **${formattedAmount} ${fromCurrency}** برابر است با **${formattedConvertedAmount} ${toCurrency}**
//         `;

//           bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
//         } else {
//           // اگر API خطا برگرداند (مثلاً کد ارز اشتباه بود)
//           bot.sendMessage(
//             chatId,
//             "😕 مشکلی پیش اومد. لطفاً مطمئن شو کد ارزها رو درست وارد کردی. (مثلاً: USD, EUR, IRR)"
//           );
//         }
//       })
//       .catch((error) => {
//         // اگر در ارتباط با API خطایی رخ داد
//         console.error(error); // برای دیباگ کردن در کنسول
//         bot.sendMessage(
//           chatId,
//           "❌ متاسفانه در حال حاضر امکان برقراری ارتباط با سرور نرخ ارز وجود نداره. لطفاً بعداً دوباره تلاش کن."
//         );
//       });
//   }
// );

// // راهنمایی برای حالتی که کاربر فرمت رو اشتباه وارد می‌کنه
// bot.onText(/\/convert(?!.|\s)/, (msg) => {
//   bot.sendMessage(
//     msg.chat.id,
//     "لطفاً از فرمت درست استفاده کن.\nمثال: `/convert 100 USD to EUR`",
//     { parse_mode: "Markdown" }
//   );
// });

// console.log("ربات 'تبدیل ارز' با موفقیت روشن شد!");




// ================================================================




// const TelegramBot = require("node-telegram-bot-api");
// const axios = require("axios");

// // ❗️ توکن ربات خودت
// const token = "8024875280:AAGv3q8X8uO3BkYmNURLZnHTFoaJhOoTfQY";

// // ❗️ کلید API (v3) که از سایت themoviedb.org گرفتی
// const tmdbApiKey = "73dbe770429c14b332057598d52f6fdf";

// const bot = new TelegramBot(token, { polling: true });

// // --- بخش راهنمایی و پیام‌های تعاملی ---

// // ۱. پیام خوشامدگویی بهبود یافته
// bot.onText(/\/start/, (msg) => {
//   const firstName = msg.from.first_name; // اسم کوچک کاربر رو می‌گیریم
//   bot.sendMessage(
//     msg.chat.id,
//     `سلام ${firstName}، خوش اومدی! 👋\n\nمن می‌تونم اطلاعات فیلم و سریال‌ها رو برات پیدا کنم. برای دیدن راهنمای کامل، دستور /help رو بفرست.`
//   );
// });

// // ۲. اضافه کردن یک دستور راهنمای جداگانه
// bot.onText(/\/help/, (msg) => {
//   bot.sendMessage(
//     msg.chat.id,
//     `
// راهنمای استفاده از ربات 🤖

// 🎬 **برای پیدا کردن فیلم:**
// کافیه دستور \`/movie\` رو همراه با اسم فیلم به انگلیسی بفرستی.
// مثال: \`/movie Inception\`

// 📺 **برای پیدا کردن سریال:**
// دستور \`/series\` رو همراه با اسم سریال به انگلیسی بفرست.
// مثال: \`/series The Boys\`

// یادت باشه اسم فیلم و سریال رو دقیق و به انگلیسی وارد کنی تا بهترین نتیجه رو بگیری.
//   `,
//     { parse_mode: "Markdown" }
//   );
// });

// // ۳. راهنمایی هوشمند برای زمانی که کاربر دستور رو ناقص وارد می‌کنه
// bot.onText(/\/movie$/, (msg) => {
//   bot.sendMessage(
//     msg.chat.id,
//     "لطفاً اسم فیلم رو هم بعد از دستور وارد کن 😉\nمثال: `/movie The Matrix`",
//     { parse_mode: "Markdown" }
//   );
// });

// bot.onText(/\/series$/, (msg) => {
//   bot.sendMessage(
//     msg.chat.id,
//     "لطفاً اسم سریال رو هم بعد از دستور وارد کن 😉\nمثال: `/series Friends`",
//     { parse_mode: "Markdown" }
//   );
// });

// // --- بخش اصلی منطق جستجو (بدون تغییر) ---

// const sendMediaInfo = (chatId, query, type) => {
//   const searchUrl = `https://api.themoviedb.org/3/search/${type}?api_key=${tmdbApiKey}&query=${encodeURIComponent(
//     query
//   )}&language=en-US`;
//   bot.sendMessage(chatId, `⏳ در حال جستجو در TMDB برای "${query}"...`);
//   axios
//     .get(searchUrl)
//     .then((searchResponse) => {
//       if (
//         !searchResponse.data.results ||
//         searchResponse.data.results.length === 0
//       ) {
//         bot.sendMessage(
//           chatId,
//           `😕 متاسفانه نتیجه‌ای برای "${query}" پیدا نشد.`
//         );
//         return;
//       }
//       const mediaId = searchResponse.data.results[0].id;
//       const detailsUrl = `https://api.themoviedb.org/3/${type}/${mediaId}?api_key=${tmdbApiKey}&language=en-US`;
//       return axios.get(detailsUrl);
//     })
//     .then((detailsResponse) => {
//       if (!detailsResponse) return;
//       const media = detailsResponse.data;
//       const title = media.title || media.name;
//       const releaseYear = (
//         media.release_date ||
//         media.first_air_date ||
//         ""
//       ).substring(0, 4);
//       const posterPath = media.poster_path;
//       const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
//       const caption = `
// 🎬 **${title}** (${releaseYear})

// ⭐ **امتیاز TMDB:** ${media.vote_average.toFixed(1)} / 10
// 💬 **خلاصه داستان:**
// ${media.overview || "خلاصه‌ای یافت نشد."}
//       `;
//       if (posterPath) {
//         bot.sendPhoto(chatId, posterUrl, {
//           caption: caption,
//           parse_mode: "Markdown",
//         });
//       } else {
//         bot.sendMessage(chatId, caption, { parse_mode: "Markdown" });
//       }
//     })
//     .catch((error) => {
//       console.error(error);
//       bot.sendMessage(chatId, "❌ خطا در برقراری ارتباط با سرور TMDB.");
//     });
// };

// bot.onText(/\/movie (.+)/, (msg, match) => {
//   sendMediaInfo(msg.chat.id, match[1], "movie");
// });

// bot.onText(/\/series (.+)/, (msg, match) => {
//   sendMediaInfo(msg.chat.id, match[1], "tv");
// });

// console.log("ربات فیلم و سریال (با راهنمای هوشمند) با موفقیت روشن شد!");

















const TelegramBot = require("node-telegram-bot-api");
const axios = require("axios");
const he = require("he");

// 🔑 توکن ربات خود را اینجا قرار دهید
const token = "8024875280:AAGv3q8X8uO3BkYmNURLZnHTFoaJhOoTfQY";
const bot = new TelegramBot(token, { polling: true });

let games = {};

const CATEGORIES = {
  "🌐 اطلاعات عمومی": 9,
  "🎬 فیلم": 11,
  "🎵 موسیقی": 12,
  "⚽️ ورزش": 21,
  "🏛️ تاریخ": 23,
};
const ROUNDS = [5, 10, 15];
const TIMERS = [15, 20, 30];

// =================================================================================================
// 🎨 تابع اصلی UI: این تابع قلب تپنده ظاهر ربات شماست و پیام بازی را می‌سازد 🎨
// =================================================================================================
function updateGameMessage(chatId) {
  const game = games[chatId];
  if (!game || !game.gameMessageId) return;

  let text = "";
  let keyboard = [];

  const createProgressBar = (player) => {
    let bar = "";
    for (let i = 1; i <= game.settings.rounds; i++) {
      const answer = game.answers[i] ? game.answers[i][player.id] : undefined;
      if (
        i > game.currentRound ||
        (game.state === "in_progress" && i === game.currentRound && !answer)
      ) {
        bar += "⚪️";
      } else if (answer === undefined) {
        bar += "❔";
      } else {
        bar += answer.isCorrect ? "✅" : "❌";
      }
    }
    return bar;
  };

  const header =
    "👑 *بازی کوئیز گروهی* 👑\n------------------------------------\n";

  switch (game.state) {
    case "configuring_category":
      text = `${header}⚙️ *مرحله ۱ از ۳: تنظیمات*\nلطفاً موضوع بازی را انتخاب کنید:`;
      let categoryKeyboard = Object.entries(CATEGORIES).map(([name, id]) => ({
        text: name,
        callback_data: `cfg_category_${id}`,
      }));
      keyboard = [categoryKeyboard.slice(0, 3), categoryKeyboard.slice(3)];
      break;

    case "configuring_rounds":
      text = `${header}⚙️ *مرحله ۲ از ۳: تنظیمات*\nتعداد سوالات را انتخاب کنید:`;
      keyboard = [
        ROUNDS.map((r) => ({
          text: `🔢 ${r} سوال`,
          callback_data: `cfg_rounds_${r}`,
        })),
      ];
      break;

    case "configuring_timer":
      text = `${header}⚙️ *مرحله ۳ از ۳: تنظیمات*\nزمان هر سوال را انتخاب کنید:`;
      keyboard = [
        TIMERS.map((t) => ({
          text: `⏱️ ${t} ثانیه`,
          callback_data: `cfg_timer_${t}`,
        })),
      ];
      break;

    case "lobby":
      const categoryName = Object.keys(CATEGORIES).find(
        (key) => CATEGORIES[key] == game.settings.category
      );
      let playerList = Object.values(game.players)
        .map((p) => `▪️ ${p.name}`)
        .join("\n");
      if (!playerList) playerList = "_هنوز کسی ملحق نشده..._";
      // FIX: Replaced problematic characters with emojis that don't conflict with Markdown
      text = `${header}📣 *لابی بازی آماده است!*\n\n📜 *موضوع:* ${categoryName}\n🔢 *تعداد سوالات:* ${game.settings.rounds}\n⏱️ *زمان هر سوال:* ${game.settings.timer} ثانیه\n\n👥 *بازیکنان حاضر:*\n${playerList}`;
      keyboard = [
        [{ text: "✅ من هم بازی می‌کنم", callback_data: "join" }],
        [{ text: "🚀 شروع بازی (فقط سازنده)", callback_data: "start" }],
      ];
      break;

    case "in_progress":
      const currentQuestion = game.questions[game.currentRound - 1];
      let playerProgress = Object.values(game.players)
        .map((p) => {
          const progressBar = createProgressBar(p);
          return `*${p.name}*\n${progressBar}   (${p.score} امتیاز)`;
        })
        .join("\n\n");
      text = `${header}❓ *سوال ${game.currentRound} از ${game.settings.rounds}*\n\n_${currentQuestion.question}_\n\n------------------------------------\n${playerProgress}`;
      keyboard = [
        currentQuestion.options.map((option) => ({
          text: he.decode(option),
          callback_data: `answer_${option}`,
        })),
      ];
      break;

    case "round_summary":
      const prevQuestion = game.questions[game.currentRound - 1];
      let summaryProgress = Object.values(game.players)
        .map((p) => {
          const progressBar = createProgressBar(p);
          return `*${p.name}*\n${progressBar}   (${p.score} امتیاز)`;
        })
        .join("\n\n");
      text = `${header}✔️ *نتایج دور ${game.currentRound}*\n\nپاسخ صحیح: *${prevQuestion.correct_answer}*\n\n------------------------------------\n${summaryProgress}`;
      break;

    case "finished":
      let finalScores = `${header}🎉🏆 *بازی تمام شد! نتایج نهایی* 🏆🎉\n\n`;
      const sortedPlayers = Object.values(game.players).sort(
        (a, b) => b.score - a.score
      );
      const highScore = sortedPlayers.length > 0 ? sortedPlayers[0].score : 0;
      sortedPlayers.forEach((player) => {
        const medal = player.score === highScore && highScore > 0 ? "🥇" : "▫️";
        const progressBar = createProgressBar(player);
        finalScores += `*${medal} ${player.name}: ${player.score} امتیاز*\n${progressBar}\n\n`;
      });
      text = finalScores;
      break;
  }

  bot
    .editMessageText(text, {
      chat_id: chatId,
      message_id: game.gameMessageId,
      parse_mode: "Markdown", // I've used Markdown here, making sure it's valid.
      reply_markup: { inline_keyboard: keyboard },
    })
    .catch((err) => {
      console.error(
        `Error updating message in state ${game.state}:`,
        err.response ? err.response.body : err.message
      );
    });
}

// --- Event Handlers ---
bot.onText(/\/newgame/, async (msg) => {
  const chatId = msg.chat.id;
  if (msg.chat.type === "private")
    return bot.sendMessage(chatId, "این بازی فقط در گروه‌ها قابل اجراست!");
  if (games[chatId] && games[chatId].state !== "finished")
    return bot.sendMessage(
      chatId,
      "یک بازی فعال است. برای لغو از /cancelgame استفاده کنید."
    );

  const gameMessage = await bot.sendMessage(chatId, "در حال ساخت بازی جدید...");
  games[chatId] = {
    state: "configuring_category",
    creatorId: msg.from.id,
    creatorName: msg.from.first_name,
    gameMessageId: gameMessage.message_id,
    players: {},
    settings: {},
    answers: {},
  };
  updateGameMessage(chatId);
});

bot.on("callback_query", async (callbackQuery) => {
  const { message, from, data } = callbackQuery;
  const chatId = message.chat.id;
  const userId = from.id;
  let game = games[chatId];

  if (!game || message.message_id !== game.gameMessageId)
    return bot.answerCallbackQuery(callbackQuery.id);

  const action = data.split("_")[0];
  const value = data.substring(action.length + 1);

  if (action === "cfg" && userId !== game.creatorId)
    return bot.answerCallbackQuery(callbackQuery.id, {
      text: "فقط سازنده می‌تواند تنظیمات را تغییر دهد.",
    });

  // ✅ **منطق اصلاح شده و تمیزتر برای تنظیمات**
  if (action === "cfg") {
    const [type, val] = value.split("_");
    if (type === "category") {
      game.settings.category = val;
      game.state = "configuring_rounds";
    } else if (type === "rounds") {
      game.settings.rounds = parseInt(val, 10);
      game.state = "configuring_timer";
    } else if (type === "timer") {
      game.settings.timer = parseInt(val, 10);
      game.state = "lobby";
    }
    updateGameMessage(chatId);
    return; // از ادامه اجرای سوییچ جلوگیری کن
  }

  switch (action) {
    case "join":
      if (game.state !== "lobby") return;
      if (!game.players[userId]) {
        game.players[userId] = { id: userId, name: from.first_name, score: 0 };
        bot.answerCallbackQuery(callbackQuery.id, {
          text: "شما به بازی ملحق شدید!",
        });
        updateGameMessage(chatId);
      } else {
        bot.answerCallbackQuery(callbackQuery.id, {
          text: "شما از قبل در بازی هستید.",
        });
      }
      break;

    case "start":
      if (userId !== game.creatorId || game.state !== "lobby") return;
      if (!game.players[userId]) {
        game.players[userId] = { id: userId, name: from.first_name, score: 0 };
      }
      if (Object.keys(game.players).length === 0)
        return bot.answerCallbackQuery(callbackQuery.id, {
          text: "حداقل یک بازیکن نیاز است!",
        });
      await fetchQuestionsAndStart(chatId);
      break;

    case "answer":
      if (
        game.state !== "in_progress" ||
        !game.players[userId] ||
        (game.answers[game.currentRound] &&
          game.answers[game.currentRound][userId])
      )
        return bot.answerCallbackQuery(callbackQuery.id, {
          text: "شما قبلاً پاسخ داده‌اید.",
        });

      const currentQuestion = game.questions[game.currentRound - 1];
      const isCorrect = value === currentQuestion.correct_answer;
      if (isCorrect) game.players[userId].score++;

      game.answers[game.currentRound][userId] = {
        answer: value,
        isCorrect: isCorrect,
      };
      bot.answerCallbackQuery(callbackQuery.id);
      updateGameMessage(chatId);

      if (
        Object.keys(game.answers[game.currentRound]).length ===
        Object.keys(game.players).length
      ) {
        clearTimeout(game.timerId);
        nextRound(chatId);
      }
      break;
  }
});

async function fetchQuestionsAndStart(chatId) {
  const game = games[chatId];
  try {
    const res = await axios.get(
      `https://opentdb.com/api.php?amount=${game.settings.rounds}&category=${game.settings.category}&type=multiple`
    );
    if (res.data.response_code !== 0) throw new Error("سوال کافی یافت نشد.");
    game.questions = res.data.results.map((q) => ({
      question: he.decode(q.question),
      correct_answer: he.decode(q.correct_answer),
      options: [
        ...q.incorrect_answers.map((a) => he.decode(a)),
        he.decode(q.correct_answer),
      ].sort(() => Math.random() - 0.5),
    }));
    game.currentRound = 0;
    for (let i = 1; i <= game.settings.rounds; i++) {
      game.answers[i] = {};
    }
    nextRound(chatId);
  } catch (e) {
    bot.sendMessage(chatId, `خطا: ${e.message}. بازی لغو شد.`);
    delete games[chatId];
  }
}

function nextRound(chatId) {
  const game = games[chatId];
  if (!game) return;

  if (game.currentRound > 0) {
    game.state = "round_summary";
    updateGameMessage(chatId);
  }

  if (game.currentRound >= game.settings.rounds) {
    setTimeout(() => {
      if (!games[chatId]) return;
      game.state = "finished";
      updateGameMessage(chatId);
    }, 4000);
    return;
  }

  const delay = game.currentRound > 0 ? 4000 : 1000;
  setTimeout(() => {
    if (!games[chatId]) return;
    game.currentRound++;
    game.state = "in_progress";
    updateGameMessage(chatId);

    game.timerId = setTimeout(() => {
      if (games[chatId] && games[chatId].state === "in_progress") {
        nextRound(chatId);
      }
    }, game.settings.timer * 1000);
  }, delay);
}

// --- دستورات کمکی ---
bot.onText(/\/start/, (msg) =>
  bot.sendMessage(
    msg.chat.id,
    "برای شروع بازی در گروه از /newgame استفاده کنید."
  )
);
bot.onText(/\/cancelgame/, (msg) => {
  const game = games[msg.chat.id];
  if (game && msg.from.id === game.creatorId) {
    if (game.timerId) clearTimeout(game.timerId);
    delete games[msg.chat.id];
    bot.sendMessage(msg.chat.id, "✅ بازی فعال لغو شد.");
  }
});

console.log("ربات کوئیز با UI نهایی و باگ فیکس شده با موفقیت روشن شد!");







// const TelegramBot = require("node-telegram-bot-api");
// const axios = require("axios");
// const he = require("he");
// // کتابخانه برای ترجمه
// const { translate } = require("@vitalets/google-translate-api");

// // 🔑 توکن ربات خود را اینجا قرار دهید
// const token = "8024875280:AAGv3q8X8uO3BkYmNURLZnHTFoaJhOoTfQY";
// const bot = new TelegramBot(token, { polling: true });

// // متغیر برای نگهداری وضعیت بازی‌ها در گروه‌های مختلف
// let games = {};

// // تنظیمات پیش‌فرض بازی
// const CATEGORIES = {
//   "🌐 اطلاعات عمومی": 9,
//   "🎬 فیلم": 11,
//   "🎵 موسیقی": 12,
//   "⚽️ ورزش": 21,
//   "🏛️ تاریخ": 23,
// };
// const ROUNDS = [5, 10, 15];
// const TIMERS = [15, 20, 30]; // زمان هر سوال به ثانیه

// // =================================================================================================
// // 🎨 تابع اصلی UI: این تابع قلب تپنده ظاهر ربات شماست و پیام بازی را می‌سازد 🎨
// // =================================================================================================
// function updateGameMessage(chatId) {
//   const game = games[chatId];
//   if (!game || !game.gameMessageId) return;

//   let text = "";
//   let keyboard = [];

//   const createProgressBar = (player) => {
//     let bar = "";
//     for (let i = 1; i <= game.settings.rounds; i++) {
//       const answer = game.answers[i] ? game.answers[i][player.id] : undefined;
//       if (
//         i > game.currentRound ||
//         (game.state === "in_progress" && i === game.currentRound && !answer)
//       ) {
//         bar += "⚪️";
//       } else if (answer === undefined) {
//         bar += "❔";
//       } else {
//         bar += answer.isCorrect ? "✅" : "❌";
//       }
//     }
//     return bar;
//   };

//   const header =
//     "👑 **بازی کوئیز گروهی** 👑\n------------------------------------\n";

//   switch (game.state) {
//     case "configuring_category":
//       text = `${header}⚙️ *مرحله ۱ از ۳: تنظیمات*\nلطفاً موضوع بازی را انتخاب کنید:`;
//       let categoryKeyboard = Object.entries(CATEGORIES).map(([name, id]) => ({
//         text: name,
//         callback_data: `cfg_category_${id}`,
//       }));
//       keyboard = [categoryKeyboard.slice(0, 3), categoryKeyboard.slice(3)];
//       break;
//     case "configuring_rounds":
//       text = `${header}⚙️ *مرحله ۲ از ۳: تنظیمات*\nتعداد سوالات را انتخاب کنید:`;
//       keyboard = [
//         ROUNDS.map((r) => ({
//           text: `🔢 ${r} سوال`,
//           callback_data: `cfg_rounds_${r}`,
//         })),
//       ];
//       break;
//     case "configuring_timer":
//       text = `${header}⚙️ *مرحله ۳ از ۳: تنظیمات*\nزمان هر سوال را انتخاب کنید:`;
//       keyboard = [
//         TIMERS.map((t) => ({
//           text: `⏱️ ${t} ثانیه`,
//           callback_data: `cfg_timer_${t}`,
//         })),
//       ];
//       break;
//     case "lobby":
//       const categoryName = Object.keys(CATEGORIES).find(
//         (key) => CATEGORIES[key] == game.settings.category
//       );
//       let playerList = Object.values(game.players)
//         .map((p) => `▪️ ${p.name}`)
//         .join("\n");
//       if (!playerList) playerList = "_هنوز کسی ملحق نشده..._";
//       text = `${header}📣 *لابی بازی آماده است!*\n\n📜 *موضوع:* ${categoryName}\n🔢 *تعداد سوالات:* ${game.settings.rounds}\n⏱️ *زمان هر سوال:* ${game.settings.timer} ثانیه\n\n👥 *بازیکنان حاضر:*\n${playerList}`;
//       keyboard = [
//         [{ text: "✅ من هم بازی می‌کنم", callback_data: "join" }],
//         [{ text: "🚀 شروع بازی (فقط سازنده)", callback_data: "start" }],
//       ];
//       break;
//     case "in_progress":
//       const currentQuestion = game.questions[game.currentRound - 1];
//       let playerProgress = Object.values(game.players)
//         .map((p) => {
//           const progressBar = createProgressBar(p);
//           return `*${p.name}*\n${progressBar}   (${p.score} امتیاز)`;
//         })
//         .join("\n\n");
//       text = `${header}❓ *سوال ${game.currentRound} از ${game.settings.rounds}*\n\n_${currentQuestion.question}_\n\n------------------------------------\n${playerProgress}`;
//       keyboard = [
//         currentQuestion.options.map((option) => ({
//           text: he.decode(option),
//           callback_data: `answer_${option}`,
//         })),
//       ];
//       break;
//     case "round_summary":
//       const prevQuestion = game.questions[game.currentRound - 1];
//       let summaryProgress = Object.values(game.players)
//         .map((p) => {
//           const progressBar = createProgressBar(p);
//           return `*${p.name}*\n${progressBar}   (${p.score} امتیاز)`;
//         })
//         .join("\n\n");
//       text = `${header}✔️ *نتایج دور ${game.currentRound}*\n\nپاسخ صحیح: *${prevQuestion.correct_answer}*\n\n------------------------------------\n${summaryProgress}`;
//       break;
//     case "finished":
//       let finalScores = `${header}🎉🏆 *بازی تمام شد! نتایج نهایی* 🏆🎉\n\n`;
//       const sortedPlayers = Object.values(game.players).sort(
//         (a, b) => b.score - a.score
//       );
//       const highScore = sortedPlayers.length > 0 ? sortedPlayers[0].score : 0;
//       sortedPlayers.forEach((player) => {
//         const medal = player.score === highScore && highScore > 0 ? "🥇" : "▫️";
//         const progressBar = createProgressBar(player);
//         finalScores += `*${medal} ${player.name}: ${player.score} امتیاز*\n${progressBar}\n\n`;
//       });
//       text = finalScores;
//       break;
//   }
//   bot
//     .editMessageText(text, {
//       chat_id: chatId,
//       message_id: game.gameMessageId,
//       parse_mode: "Markdown",
//       reply_markup: { inline_keyboard: keyboard },
//     })
//     .catch((err) => {});
// }

// // --- Event Handlers ---
// bot.onText(/\/newgame/, async (msg) => {
//   const chatId = msg.chat.id;
//   if (msg.chat.type === "private")
//     return bot.sendMessage(chatId, "این بازی فقط در گروه‌ها قابل اجراست!");
//   if (games[chatId] && games[chatId].state !== "finished")
//     return bot.sendMessage(
//       chatId,
//       "یک بازی فعال است. برای لغو از /cancelgame استفاده کنید."
//     );

//   const gameMessage = await bot.sendMessage(chatId, "در حال ساخت بازی جدید...");
//   games[chatId] = {
//     state: "configuring_category",
//     creatorId: msg.from.id,
//     creatorName: msg.from.first_name,
//     gameMessageId: gameMessage.message_id,
//     players: {},
//     settings: {},
//     answers: {},
//   };
//   updateGameMessage(chatId);
// });

// bot.on("callback_query", async (callbackQuery) => {
//   const { message, from, data } = callbackQuery;
//   const chatId = message.chat.id;
//   const userId = from.id;
//   let game = games[chatId];
//   if (!game || message.message_id !== game.gameMessageId)
//     return bot.answerCallbackQuery(callbackQuery.id);
//   const action = data.split("_")[0];
//   const value = data.substring(action.length + 1);
//   if (action === "cfg" && userId !== game.creatorId)
//     return bot.answerCallbackQuery(callbackQuery.id, {
//       text: "فقط سازنده می‌تواند تنظیمات را تغییر دهد.",
//     });

//   if (action === "cfg") {
//     const [type, val] = value.split("_");
//     if (type === "category") {
//       game.settings.category = val;
//       game.state = "configuring_rounds";
//     }
//     if (type === "rounds") {
//       game.settings.rounds = parseInt(val, 10);
//       game.state = "configuring_timer";
//     }
//     if (type === "timer") {
//       game.settings.timer = parseInt(val, 10);
//       game.state = "lobby";
//     }
//     updateGameMessage(chatId);
//     return;
//   }

//   switch (action) {
//     case "join":
//       if (game.state !== "lobby") return;
//       if (!game.players[userId]) {
//         game.players[userId] = { id: userId, name: from.first_name, score: 0 };
//         bot.answerCallbackQuery(callbackQuery.id, {
//           text: "شما به بازی ملحق شدید!",
//         });
//         updateGameMessage(chatId);
//       } else {
//         bot.answerCallbackQuery(callbackQuery.id, {
//           text: "شما از قبل در بازی هستید.",
//         });
//       }
//       break;
//     case "start":
//       if (userId !== game.creatorId || game.state !== "lobby") return;
//       if (!game.players[userId]) {
//         game.players[userId] = { id: userId, name: from.first_name, score: 0 };
//       }
//       if (Object.keys(game.players).length === 0)
//         return bot.answerCallbackQuery(callbackQuery.id, {
//           text: "حداقل یک بازیکن نیاز است!",
//         });
//       await fetchQuestionsAndStart(chatId);
//       break;
//     case "answer":
//       if (
//         game.state !== "in_progress" ||
//         !game.players[userId] ||
//         (game.answers[game.currentRound] &&
//           game.answers[game.currentRound][userId])
//       )
//         return bot.answerCallbackQuery(callbackQuery.id, {
//           text: "شما قبلاً پاسخ داده‌اید.",
//         });
//       const currentQuestion = game.questions[game.currentRound - 1];
//       const isCorrect = value === currentQuestion.correct_answer;
//       if (isCorrect) game.players[userId].score++;
//       game.answers[game.currentRound][userId] = {
//         answer: value,
//         isCorrect: isCorrect,
//       };
//       bot.answerCallbackQuery(callbackQuery.id, { text: "پاسخ شما ثبت شد!" });
//       // به جای آپدیت کامل پیام، فقط در حالت پایدار آپدیت می‌کنیم
//       // updateGameMessage(chatId);
//       if (
//         Object.keys(game.answers[game.currentRound]).length ===
//         Object.keys(game.players).length
//       ) {
//         clearTimeout(game.timerId);
//         nextRound(chatId);
//       }
//       break;
//   }
// });

// // تابع جدید و بهینه شده برای ترجمه سوالات
// async function fetchQuestionsAndStart(chatId) {
//   const game = games[chatId];
//   const { rounds, category } = game.settings;

//   try {
//     const response = await axios.get(
//       `https://opentdb.com/api.php?amount=${rounds}&category=${category}&type=multiple`
//     );
//     if (response.data.response_code !== 0)
//       throw new Error("سوال کافی یافت نشد.");

//     const englishQuestions = response.data.results;

//     bot.editMessageText(
//       `✅ سوالات دریافت شد. در حال ترجمه ${rounds} سوال به فارسی... (این فرآیند به دلیل محدودیت‌ها ممکن است تا یک دقیقه طول بکشد)`,
//       {
//         chat_id: chatId,
//         message_id: game.gameMessageId,
//         reply_markup: { inline_keyboard: [] },
//       }
//     );

//     game.questions = [];
//     for (const q of englishQuestions) {
//       const translatedParts = {};

//       // ترجمه تک به تک و با تاخیر
//       const questionText = he.decode(q.question);
//       translatedParts.question = (
//         await translate(questionText, { to: "fa" })
//       ).text;
//       await new Promise((resolve) => setTimeout(resolve, 250)); // تاخیر ۲۵۰ میلی‌ثانیه

//       const correctAnswerText = he.decode(q.correct_answer);
//       translatedParts.correct_answer = (
//         await translate(correctAnswerText, { to: "fa" })
//       ).text;
//       await new Promise((resolve) => setTimeout(resolve, 250));

//       translatedParts.incorrect_answers = [];
//       for (const incorrect of q.incorrect_answers) {
//         const incorrectText = he.decode(incorrect);
//         translatedParts.incorrect_answers.push(
//           (await translate(incorrectText, { to: "fa" })).text
//         );
//         await new Promise((resolve) => setTimeout(resolve, 250));
//       }

//       game.questions.push({
//         question: translatedParts.question,
//         correct_answer: translatedParts.correct_answer,
//         options: [
//           ...translatedParts.incorrect_answers,
//           translatedParts.correct_answer,
//         ].sort(() => Math.random() - 0.5),
//       });
//     }

//     game.currentRound = 0;
//     for (let i = 1; i <= game.settings.rounds; i++) {
//       game.answers[i] = {};
//     }

//     nextRound(chatId);
//   } catch (e) {
//     bot.sendMessage(
//       chatId,
//       `خطا در دریافت یا ترجمه سوالات: ${e.message}. بازی لغو شد.`
//     );
//     console.error(e);
//     delete games[chatId];
//   }
// }

// function nextRound(chatId) {
//   const game = games[chatId];
//   if (!game) return;
//   if (game.currentRound > 0) {
//     game.state = "round_summary";
//     updateGameMessage(chatId);
//   }
//   if (game.currentRound >= game.settings.rounds) {
//     setTimeout(() => {
//       if (!games[chatId]) return;
//       game.state = "finished";
//       updateGameMessage(chatId);
//     }, 5000);
//     return;
//   }
//   const delay = game.currentRound > 0 ? 5000 : 1000;
//   setTimeout(() => {
//     if (!games[chatId]) return;
//     game.currentRound++;
//     game.state = "in_progress";
//     updateGameMessage(chatId);
//     game.timerId = setTimeout(() => {
//       if (games[chatId] && games[chatId].state === "in_progress") {
//         nextRound(chatId);
//       }
//     }, game.settings.timer * 1000);
//   }, delay);
// }

// // --- دستورات کمکی ---
// bot.onText(/\/start/, (msg) =>
//   bot.sendMessage(
//     msg.chat.id,
//     "برای شروع بازی در گروه از /newgame استفاده کنید."
//   )
// );
// bot.onText(/\/cancelgame/, (msg) => {
//   const game = games[msg.chat.id];
//   if (game && msg.from.id === game.creatorId) {
//     if (game.timerId) clearTimeout(game.timerId);
//     delete games[msg.chat.id];
//     bot.sendMessage(msg.chat.id, "✅ بازی فعال لغو شد.");
//   }
// });

// console.log("ربات کوئیز نهایی (با ترجمه بهینه) با موفقیت روشن شد!");