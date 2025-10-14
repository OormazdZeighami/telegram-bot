// const TelegramBot = require("node-telegram-bot-api");

// const token = "7132943895:AAHmR4_KbRp76jagCgJ2YqbzYEV_Ny-rkWM"; // توکن واقعی خودت رو اینجا بگذار

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
// const token = "7132943895:AAHmR4_KbRp76jagCgJ2YqbzYEV_Ny-rkWM";

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
// const token = "7132943895:AAHmR4_KbRp76jagCgJ2YqbzYEV_Ny-rkWM";

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
// const token = "7132943895:AAHmR4_KbRp76jagCgJ2YqbzYEV_Ny-rkWM";

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
// const token = "7132943895:AAHmR4_KbRp76jagCgJ2YqbzYEV_Ny-rkWM";

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

















// const TelegramBot = require("node-telegram-bot-api");
// const axios = require("axios");
// const allQuestionsByCategory = require('./questions.json');
// const he = require("he");

// // 🔑 توکن ربات خود را اینجا قرار دهید
// const token = process.env.BOT_TOKEN;



// const bot = new TelegramBot(token, { polling: true });

// let games = {};

// const CATEGORIES = {
//   "🌐 اطلاعات عمومی": 9,
//   "🎬 فیلم": 11,
//   "🎵 موسیقی": 12,
//   "⚽️ ورزش": 21,
//   "🏛️ تاریخ": 23,
// };
// const ROUNDS = [5, 10, 15];
// const TIMERS = [15, 20, 30];

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
//     "👑 *بازی کوئیز گروهی* 👑\n------------------------------------\n";

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
//       // FIX: Replaced problematic characters with emojis that don't conflict with Markdown
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
//       parse_mode: "Markdown", // I've used Markdown here, making sure it's valid.
//       reply_markup: { inline_keyboard: keyboard },
//     })
//     .catch((err) => {
//       console.error(
//         `Error updating message in state ${game.state}:`,
//         err.response ? err.response.body : err.message
//       );
//     });
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
//   await updateGameMessage(chatId);
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

//   // ✅ **منطق اصلاح شده و تمیزتر برای تنظیمات**
//   if (action === "cfg") {
//     const [type, val] = value.split("_");
//     if (type === "category") {
//       game.settings.category = val;
//       game.state = "configuring_rounds";
//     } else if (type === "rounds") {
//       game.settings.rounds = parseInt(val, 10);
//       game.state = "configuring_timer";
//     } else if (type === "timer") {
//       game.settings.timer = parseInt(val, 10);
//       game.state = "lobby";
//     }
//     await updateGameMessage(chatId);
//     return; // از ادامه اجرای سوییچ جلوگیری کن
//   }

//   switch (action) {
//     case "join":
//       if (game.state !== "lobby") return;
//       if (!game.players[userId]) {
//         game.players[userId] = { id: userId, name: from.first_name, score: 0 };
//         bot.answerCallbackQuery(callbackQuery.id, {
//           text: "شما به بازی ملحق شدید!",
//         });
//         await updateGameMessage(chatId);
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
//       bot.answerCallbackQuery(callbackQuery.id);
//       await updateGameMessage(chatId);

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

// async function fetchQuestionsAndStart(chatId) {
//   const game = games[chatId];
//   try {
//     const res = await axios.get(
//       `https://opentdb.com/api.php?amount=${game.settings.rounds}&category=${game.settings.category}&type=multiple`
//     );
//     if (res.data.response_code !== 0) throw new Error("سوال کافی یافت نشد.");
//     game.questions = res.data.results.map((q) => ({
//       question: he.decode(q.question),
//       correct_answer: he.decode(q.correct_answer),
//       options: [
//         ...q.incorrect_answers.map((a) => he.decode(a)),
//         he.decode(q.correct_answer),
//       ].sort(() => Math.random() - 0.5),
//     }));
//     game.currentRound = 0;
//     for (let i = 1; i <= game.settings.rounds; i++) {
//       game.answers[i] = {};
//     }
//     nextRound(chatId);
//   } catch (e) {
//     bot.sendMessage(chatId, `خطا: ${e.message}. بازی لغو شد.`);
//     delete games[chatId];
//   }
// }

// function nextRound(chatId) {
//   const game = games[chatId];
//   if (!game) return;

//   if (game.currentRound > 0) {
//     game.state = "round_summary";
//     await updateGameMessage(chatId);
//   }

//   if (game.currentRound >= game.settings.rounds) {
//     setTimeout(() => {
//       if (!games[chatId]) return;
//       game.state = "finished";
//       await updateGameMessage(chatId);
//     }, 4000);
//     return;
//   }

//   const delay = game.currentRound > 0 ? 4000 : 1000;
//   setTimeout(() => {
//     if (!games[chatId]) return;
//     game.currentRound++;
//     game.state = "in_progress";
//     await updateGameMessage(chatId);

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

// console.log("ربات کوئیز با UI نهایی و باگ فیکس شده با موفقیت روشن شد!");


// const TelegramBot = require("node-telegram-bot-api");
// const he = require("he");

// // 🔑 توکن ربات شما
// const token = process.env.BOT_TOKEN;
// const bot = new TelegramBot(token, { polling: true });

// let games = {};

// const allData = require("./questions.json");
// let questionDecks = {};
// let allCategories = {};
// let englishSubCategories = {};

// // آبجکت برای نگهداری آیکون‌های هر دسته
// const categoryIcons = {
//   general_knowledge: "🌍",
//   history: "📜",
//   geography: "🗺️",
//   sports: "⚽️",
//   english_language: "🇬🇧",
//   food_nutrition: "🍔",
//   technology: "💻",
//   religious_info: "🙏",
//   math_fun: "🎲",
// };

// // آبجکت برای آیکون‌های زیرشاخه‌های زبان
// const englishSubCategoryIcons = {
//   vocabulary: "📖",
//   grammar: "✒️",
//   idioms: "🤔",
//   conversation: "💬",
//   spelling: "✍️",
// };

// function initializeDecks() {
//   console.log("Initializing and shuffling the question decks...");

//   for (const mainCategoryKey in allData) {
//     if (mainCategoryKey === "english_language") {
//       allCategories[mainCategoryKey] = "زبان انگلیسی";

//       for (const subCategoryKey in allData.english_language) {
//         if (
//           allData.english_language[subCategoryKey] &&
//           allData.english_language[subCategoryKey].length > 0
//         ) {
//           const displayName =
//             allData.english_language[subCategoryKey][0].sub_category;
//           const uniqueKey = `${mainCategoryKey}_${subCategoryKey}`;

//           englishSubCategories[uniqueKey] = displayName;

//           questionDecks[uniqueKey] = {
//             deck: JSON.parse(
//               JSON.stringify(allData.english_language[subCategoryKey])
//             ).sort(() => 0.5 - Math.random()),
//             discardPile: [],
//           };
//         }
//       }
//     } else {
//       if (allData[mainCategoryKey] && allData[mainCategoryKey].length > 0) {
//         const displayName = allData[mainCategoryKey][0].category;
//         allCategories[mainCategoryKey] = displayName;
//         questionDecks[mainCategoryKey] = {
//           deck: JSON.parse(JSON.stringify(allData[mainCategoryKey])).sort(
//             () => 0.5 - Math.random()
//           ),
//           discardPile: [],
//         };
//       }
//     }
//   }
//   console.log("Decks initialized successfully.");
// }

// initializeDecks();

// const ROUNDS = [5, 10, 15];
// const TIMERS = [15, 20, 30];

// async function createNewGame(chatId, from, options = {}) {
//   if (games[chatId] && games[chatId].state !== "finished") {
//     bot.sendMessage(
//       chatId,
//       "یک بازی فعال است. برای لغو از /cancelgame استفاده کنید.",
//       options
//     );
//     return;
//   }

//   const gameMessage = await bot.sendMessage(
//     chatId,
//     "در حال ساخت بازی جدید...",
//     options
//   );
//   games[chatId] = {
//     state: "configuring_category",
//     creatorId: from.id,
//     creatorName: from.first_name,
//     gameMessageId: gameMessage.message_id,
//     threadId: options.message_thread_id,
//     players: {},
//     settings: {},
//     answers: {},
//     lastMessageText: "",
//     lastKeyboard: [],
//   };
//   await updateGameMessage(chatId);
// }

// function updateGameMessage(chatId) {
//   const game = games[chatId];
//   if (!game || !game.gameMessageId) return;

//   let text = "";
//   let keyboard = [];

//   const createProgressBar = (player) => {
//     let bar = "";
//     const totalRounds = game.settings.rounds;
//     for (let i = 1; i <= totalRounds; i++) {
//       const answer = game.answers[i] ? game.answers[i][player.id] : undefined;

//       if (game.state === "in_progress" && i === game.currentRound && !answer) {
//         bar += "⏳";
//       } else if (
//         i > game.currentRound ||
//         (game.state === "round_summary" && i === game.currentRound && !answer)
//       ) {
//         bar += "⬜️";
//       } else if (answer === undefined) {
//         bar += "⬛️";
//       } else {
//         bar += answer.isCorrect ? "✅" : "❌";
//       }
//     }
//     return bar;
//   };

//   const header = "👑 *بازی آنلاین کوئیز* 👑\n\n";

//   switch (game.state) {
//     case "configuring_category":
//       text = `${header}*انتخاب دسته‌بندی* 🕹️\n\nیک موضوع را برای شروع انتخاب کنید:`;
//       const categoryButtons = Object.entries(allCategories).map(
//         ([uniqueKey, displayName]) => {
//           const icon = categoryIcons[uniqueKey] || "📚";
//           return {
//             text: `${icon} ${displayName}`,
//             callback_data: `cfg_category_${uniqueKey}`,
//           };
//         }
//       );
//       keyboard = [];
//       for (let i = 0; i < categoryButtons.length; i += 2) {
//         if (categoryButtons[i + 1]) {
//           keyboard.push([categoryButtons[i], categoryButtons[i + 1]]);
//         } else {
//           keyboard.push([categoryButtons[i]]);
//         }
//       }
//       break;

//     case "configuring_subcategory":
//       text = `${header}*انتخاب زیرشاخه زبان* 🇬🇧\n\nلطفاً یکی از زیرشاخه‌های زبان انگلیسی را انتخاب کنید:`;
//       const subCategoryButtons = Object.entries(englishSubCategories).map(
//         ([uniqueKey, displayName]) => {
//           const subKey = uniqueKey.split("_")[2];
//           const icon = englishSubCategoryIcons[subKey] || "📝";
//           return {
//             text: `${icon} ${displayName}`,
//             callback_data: `cfg_category_${uniqueKey}`,
//           };
//         }
//       );
//       keyboard = [];
//       for (let i = 0; i < subCategoryButtons.length; i += 2) {
//         if (subCategoryButtons[i + 1]) {
//           keyboard.push([subCategoryButtons[i], subCategoryButtons[i + 1]]);
//         } else {
//           keyboard.push([subCategoryButtons[i]]);
//         }
//       }
//       keyboard.push([
//         { text: "⬅️ بازگشت به منوی اصلی", callback_data: "cfg_back_main" },
//       ]);
//       break;

//     case "configuring_rounds":
//       const categoryName = game.settings.category.startsWith(
//         "english_language_"
//       )
//         ? `زبان انگلیسی (${englishSubCategories[game.settings.category]})`
//         : allCategories[game.settings.category];
//       text = `${header}*تنظیم تعداد سوالات* 🔢\n\nبرای موضوع «${categoryName}» چند سوال بازی کنیم؟`;
//       keyboard = [
//         ROUNDS.map((r) => ({
//           text: `${r} سوال`,
//           callback_data: `cfg_rounds_${r}`,
//         })),
//       ];
//       break;

//     case "configuring_timer":
//       text = `${header}*تنظیم زمان* ⏱️\n\nبرای پاسخ به هر سوال چند ثانیه زمان می‌خواهید؟`;
//       keyboard = [
//         TIMERS.map((t) => ({
//           text: `${t} ثانیه`,
//           callback_data: `cfg_timer_${t}`,
//         })),
//       ];
//       break;

//     case "lobby":
//       const lobbyCategoryName = game.settings.category.startsWith(
//         "english_language_"
//       )
//         ? `زبان انگلیسی (${englishSubCategories[game.settings.category]})`
//         : allCategories[game.settings.category];
//       let playerList = Object.values(game.players)
//         .map((p) => `👤 ${p.name}`)
//         .join("\n");
//       if (!playerList) playerList = "_هنوز کسی وارد بازی نشده..._";
//       text = `${header}*لابی بازی* 📣\n\n*موضوع:* ${lobbyCategoryName}\n*تعداد سوالات:* ${game.settings.rounds}\n*زمان هر سوال:* ${game.settings.timer} ثانیه\n\n*بازیکنان حاضر:*\n${playerList}`;
//       keyboard = [
//         [{ text: "✅ من هم بازی می‌کنم", callback_data: "join" }],
//         [{ text: "🚀 شروع بازی", callback_data: "start" }],
//       ];
//       break;

//     case "in_progress":
//       const currentQuestion = game.questions[game.currentRound - 1];
//       let playerProgress = Object.values(game.players)
//         .map((p) => {
//           const progressBar = createProgressBar(p);
//           return `*${p.name}* (${p.score} امتیاز)\n${progressBar}`;
//         })
//         .join("\n\n");
//       text = `${header}*سوال ${game.currentRound} از ${
//         game.settings.rounds
//       }* ❓\n\n*${he.decode(
//         currentQuestion.question
//       )}*\n\n------------------------------------\n${playerProgress}`;
//       keyboard = currentQuestion.options.map((option, index) => [
//         { text: he.decode(option), callback_data: `answer_${index}` },
//       ]);
//       break;

//     case "round_summary":
//       const prevRoundNumber = game.currentRound;
//       const prevQuestion = game.questions[prevRoundNumber - 1];
//       let summaryProgress = Object.values(game.players)
//         .map((p) => {
//           const progressBar = createProgressBar(p);
//           return `*${p.name}* (${p.score} امتیاز)\n${progressBar}`;
//         })
//         .join("\n\n");
//       text = `${header}*پایان دور ${prevRoundNumber}* 🏁\n\nپاسخ صحیح: *${he.decode(
//         prevQuestion.correct_answer
//       )}*\n\n------------------------------------\n${summaryProgress}`;
//       break;

//     case "finished":
//       let finalScores = `${header}*بازی تمام شد!* 🏆\n\n*نتایج نهایی:*\n\n`;
//       const sortedPlayers = Object.values(game.players).sort(
//         (a, b) => b.score - a.score
//       );
//       const highScore = sortedPlayers.length > 0 ? sortedPlayers[0].score : 0;
//       sortedPlayers.forEach((player, index) => {
//         let medal = "";
//         if (index === 0 && highScore > 0) medal = "🥇";
//         else if (index === 1 && highScore > 0) medal = "🥈";
//         else if (index === 2 && highScore > 0) medal = "🥉";
//         else medal = "▫️";

//         finalScores += `${medal} *${player.name}: ${player.score} امتیاز*\n\n`;
//       });
//       text = finalScores;
//       keyboard = [[{ text: "🎮 بازی جدید", callback_data: "new_game_button" }]];
//       break;
//   }

//   if (
//     text &&
//     (text !== game.lastMessageText ||
//       JSON.stringify(keyboard) !== JSON.stringify(game.lastKeyboard))
//   ) {
//     bot
//       .editMessageText(text, {
//         chat_id: chatId,
//         message_id: game.gameMessageId,
//         parse_mode: "Markdown",
//         reply_markup: { inline_keyboard: keyboard },
//       })
//       .catch((err) => {
//         if (!err.message.includes("message is not modified")) {
//           console.error("Telegram API Error:", err.message);
//         }
//       });
//     game.lastMessageText = text;
//     game.lastKeyboard = keyboard;
//   }
// }

// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   const options = {};

//   if (msg.is_topic_message) {
//     options.message_thread_id = msg.message_thread_id;
//   }

//   bot.sendMessage(
//     chatId,
//     "سلام! برای شروع یک بازی جدید در گروه، از دستور /newgame استفاده کنید.",
//     options
//   );
// });

// bot.onText(/\/newgame/, async (msg) => {
//   const options = {};
//   if (msg.is_topic_message) {
//     options.message_thread_id = msg.message_thread_id;
//   }
//   if (msg.chat.type === "private") {
//     return bot.sendMessage(
//       msg.chat.id,
//       "این بازی فقط در گروه‌ها قابل اجراست!",
//       options
//     );
//   }
//   createNewGame(msg.chat.id, msg.from, options);
// });

// bot.on("callback_query", async (callbackQuery) => {
//   const { message, from, data } = callbackQuery;
//   const chatId = message.chat.id;
//   const userId = from.id;

//   bot.answerCallbackQuery(callbackQuery.id);

//   let game = games[chatId];

//   if (data === "new_game_button") {
//     const options = {};
//     if (game && game.threadId) {
//       options.message_thread_id = game.threadId;
//     }
//     createNewGame(chatId, from, options);
//     return;
//   }

//   if (!game || message.message_id !== game.gameMessageId) {
//     return;
//   }

//   let action, value;
//   const firstUnderscoreIndex = data.indexOf("_");

//   if (firstUnderscoreIndex !== -1) {
//     action = data.substring(0, firstUnderscoreIndex);
//     value = data.substring(firstUnderscoreIndex + 1);
//   } else {
//     action = data;
//     value = "";
//   }

//   if (action === "cfg" && userId !== game.creatorId) {
//     return;
//   }

//   if (action === "cfg") {
//     const type = value.split("_")[0];
//     const val = value.substring(type.length + 1);

//     if (type === "category") {
//       if (val === "english_language") {
//         game.state = "configuring_subcategory";
//       } else {
//         game.settings.category = val;
//         game.state = "configuring_rounds";
//       }
//     } else if (type === "rounds") {
//       game.settings.rounds = parseInt(val, 10);
//       game.state = "configuring_timer";
//     } else if (type === "timer") {
//       game.settings.timer = parseInt(val, 10);
//       game.state = "lobby";
//     } else if (type === "back" && val === "main") {
//       game.state = "configuring_category";
//     }
//     await updateGameMessage(chatId);
//     return;
//   }

//   switch (action) {
//     case "join":
//       if (game.state !== "lobby") return;
//       if (!game.players[userId]) {
//         game.players[userId] = { id: userId, name: from.first_name, score: 0 };
//         await updateGameMessage(chatId);
//       }
//       break;

//     case "start":
//       if (userId !== game.creatorId) return;
//       if (game.state !== "lobby") return;

//       if (Object.keys(game.players).length === 0) {
//         game.players[userId] = { id: userId, name: from.first_name, score: 0 };
//       }

//       fetchQuestionsAndStart(chatId);
//       break;

//     case "answer":
//       if (
//         game.state !== "in_progress" ||
//         !game.players[userId] ||
//         (game.answers[game.currentRound] &&
//           game.answers[game.currentRound][userId])
//       )
//         return;

//       const currentQuestion = game.questions[game.currentRound - 1];

//       const chosenOptionIndex = parseInt(value, 10);
//       const chosenOptionText = currentQuestion.options[chosenOptionIndex];
//       const isCorrect = chosenOptionText === currentQuestion.correct_answer;

//       if (isCorrect) game.players[userId].score++;

//       game.answers[game.currentRound][userId] = {
//         answer: chosenOptionText,
//         isCorrect: isCorrect,
//       };

//       await updateGameMessage(chatId);

//       if (
//         Object.keys(game.answers[game.currentRound]).length ===
//         Object.keys(game.players).length
//       ) {
//         clearTimeout(game.timerId);
//         endRound(chatId);
//       }
//       break;
//   }
// });

// function fetchQuestionsAndStart(chatId) {
//   const game = games[chatId];
//   const { rounds, category } = game.settings;

//   let deckInfo = questionDecks[category];

//   if (deckInfo.deck.length < rounds) {
//     console.log(`Reshuffling all questions for category: ${category}`);
//     deckInfo.deck = [...deckInfo.deck, ...deckInfo.discardPile].sort(
//       () => 0.5 - Math.random()
//     );
//     deckInfo.discardPile = [];
//   }

//   const questionsToPlay = Math.min(rounds, deckInfo.deck.length);
//   if (questionsToPlay === 0) {
//     const options = game.threadId ? { message_thread_id: game.threadId } : {};
//     const categoryDisplayName = game.settings.category.startsWith(
//       "english_language_"
//     )
//       ? `زبان انگلیسی (${englishSubCategories[game.settings.category]})`
//       : allCategories[game.settings.category];
//     bot.sendMessage(
//       chatId,
//       `سوالی در دسته‌بندی «${categoryDisplayName}» باقی نمانده است! بازی لغو شد.`,
//       options
//     );
//     delete games[chatId];
//     return;
//   }

//   const selectedQuestions = deckInfo.deck.splice(0, questionsToPlay);
//   deckInfo.discardPile.push(...selectedQuestions);

//   game.questions = selectedQuestions.map((q) => ({
//     question: q.question,
//     correct_answer: q.correct_answer,
//     options: [...q.options].sort(() => Math.random() - 0.5),
//   }));

//   game.settings.rounds = questionsToPlay;
//   game.currentRound = 0;
//   for (let i = 1; i <= questionsToPlay; i++) {
//     game.answers[i] = {};
//   }
//   startNextRound(chatId);
// }

// function endRound(chatId) {
//   const game = games[chatId];
//   if (!game) return;

//   game.state = "round_summary";
//   await updateGameMessage(chatId);

//   if (game.currentRound >= game.settings.rounds) {
//     setTimeout(() => {
//       if (!games[chatId]) return;
//       game.state = "finished";
//       await updateGameMessage(chatId);
//     }, 5000);
//   } else {
//     setTimeout(() => {
//       if (!games[chatId]) return;
//       startNextRound(chatId);
//     }, 5000);
//   }
// }

// function startNextRound(chatId) {
//   const game = games[chatId];
//   if (!game) return;

//   game.currentRound++;
//   game.state = "in_progress";
//   await updateGameMessage(chatId);

//   game.timerId = setTimeout(() => {
//     if (games[chatId] && games[chatId].state === "in_progress") {
//       endRound(chatId);
//     }
//   }, game.settings.timer * 1000);
// }

// bot.onText(/\/cancelgame/, async (msg) => {
//   const chatId = msg.chat.id;
//   const game = games[chatId];
//   const options = {};
//   if (msg.is_topic_message) {
//     options.message_thread_id = msg.message_thread_id;
//   }

//   if (!game)
//     return bot.sendMessage(
//       chatId,
//       "هیچ بازی فعالی برای لغو وجود ندارد.",
//       options
//     );

//   try {
//     const admins = await bot.getChatAdministrators(chatId);
//     const isAdmin = admins.some((admin) => admin.user.id === msg.from.id);

//     if (msg.from.id === game.creatorId || isAdmin) {
//       if (game.timerId) clearTimeout(game.timerId);
//       bot.deleteMessage(chatId, game.gameMessageId).catch(() => {});
//       delete games[chatId];
//       bot.sendMessage(
//         chatId,
//         "✅ بازی فعال توسط سازنده یا ادمین لغو شد.",
//         options
//       );
//     } else {
//       bot.sendMessage(
//         chatId,
//         "❌ فقط سازنده بازی یا ادمین‌های گروه می‌توانند بازی را لغو کنند.",
//         options
//       );
//     }
//   } catch (error) {
//     if (msg.from.id === game.creatorId) {
//       if (game.timerId) clearTimeout(game.timerId);
//       bot.deleteMessage(chatId, game.gameMessageId).catch(() => {});
//       delete games[chatId];
//       bot.sendMessage(chatId, "✅ بازی فعال توسط سازنده لغو شد.", options);
//     } else {
//       bot.sendMessage(
//         chatId,
//         "❌ فقط سازنده بازی می‌تواند آن را لغو کند.",
//         options
//       );
//     }
//   }
// });

// console.log("ربات کوییز با موفقیت روشن شد!");












// const TelegramBot = require("node-telegram-bot-api");
// const he = require("he");
// const { translate } = require("@vitalets/google-translate-api");
// const axios = require("axios");

// // 🔑 توکن ربات شما
// // const token = process.env.BOT_TOKEN;
// const token = "7132943895:AAHmR4_KbRp76jagCgJ2YqbzYEV_Ny-rkWM";
// const bot = new TelegramBot(token, { polling: true });

// let games = {};

// const allData = require("./questions.json");
// let questionDecks = {};
// let allCategories = {};
// let englishSubCategories = {};

// const categoryIcons = {
//   general_knowledge: "🌍",
//   history: "📜",
//   geography: "🗺️",
//   sports: "⚽️",
//   english_language: "🇬🇧",
//   food_nutrition: "🍔",
//   technology: "💻",
//   religious_info: "🙏",
//   math_fun: "🎲",
// };

// const englishSubCategoryIcons = {
//   vocabulary: "📖",
//   grammar: "✒️",
//   idioms: "🤔",
//   conversation: "💬",
//   spelling: "✍️",
// };

// function initializeDecks() {
//   console.log("Initializing and shuffling the question decks...");

//   for (const mainCategoryKey in allData) {
//     if (mainCategoryKey === "english_language") {
//       allCategories[mainCategoryKey] = "زبان انگلیسی";

//       for (const subCategoryKey in allData.english_language) {
//         if (
//           allData.english_language[subCategoryKey] &&
//           allData.english_language[subCategoryKey].length > 0
//         ) {
//           const displayName =
//             allData.english_language[subCategoryKey][0].sub_category;
//           const uniqueKey = `${mainCategoryKey}_${subCategoryKey}`;

//           englishSubCategories[uniqueKey] = displayName;

//           questionDecks[uniqueKey] = {
//             deck: JSON.parse(
//               JSON.stringify(allData.english_language[subCategoryKey])
//             ).sort(() => 0.5 - Math.random()),
//             discardPile: [],
//           };
//         }
//       }
//     } else {
//       if (allData[mainCategoryKey] && allData[mainCategoryKey].length > 0) {
//         const displayName = allData[mainCategoryKey][0].category;
//         allCategories[mainCategoryKey] = displayName;
//         questionDecks[mainCategoryKey] = {
//           deck: JSON.parse(JSON.stringify(allData[mainCategoryKey])).sort(
//             () => 0.5 - Math.random()
//           ),
//           discardPile: [],
//         };
//       }
//     }
//   }
//   console.log("Decks initialized successfully.");
// }

// initializeDecks();

// const ROUNDS = [5, 10, 15];
// const TIMERS = [15, 20, 30];

// async function createNewGame(chatId, from, options = {}) {
//   if (games[chatId] && games[chatId].state !== "finished") {
//     bot.sendMessage(
//       chatId,
//       "یک بازی فعال است. برای لغو از /cancelgame استفاده کنید.",
//       options
//     );
//     return;
//   }

//   const gameMessage = await bot.sendMessage(
//     chatId,
//     "در حال ساخت بازی جدید...",
//     options
//   );
//   games[chatId] = {
//     state: "configuring_category",
//     creatorId: from.id,
//     creatorName: from.first_name,
//     gameMessageId: gameMessage.message_id,
//     threadId: options.message_thread_id,
//     players: {},
//     settings: {},
//     answers: {},
//     lastMessageText: "",
//     lastKeyboard: [],
//   };
//   await updateGameMessage(chatId);
// }

// function updateGameMessage(chatId) {
//   const game = games[chatId];
//   if (!game || !game.gameMessageId) return;

//   let text = "";
//   let keyboard = [];

//   const createProgressBar = (player) => {
//     let bar = "";
//     const totalRounds = game.settings.rounds;
//     for (let i = 1; i <= totalRounds; i++) {
//       const answer = game.answers[i] ? game.answers[i][player.id] : undefined;

//       if (game.state === "in_progress" && i === game.currentRound && !answer) {
//         bar += "⏳";
//       } else if (
//         i > game.currentRound ||
//         (game.state === "round_summary" && i === game.currentRound && !answer)
//       ) {
//         bar += "⬜️";
//       } else if (answer === undefined) {
//         bar += "⬛️";
//       } else {
//         bar += answer.isCorrect ? "✅" : "❌";
//       }
//     }
//     return bar;
//   };

//   const header = "👑 *بازی آنلاین کوئیز* 👑\n\n";

//   switch (game.state) {
//     case "configuring_category":
//       text = `${header}*انتخاب دسته‌بندی* 🕹️\n\nیک موضوع را برای شروع انتخاب کنید:`;
//       const categoryButtons = Object.entries(allCategories).map(
//         ([uniqueKey, displayName]) => {
//           const icon = categoryIcons[uniqueKey] || "📚";
//           return {
//             text: `${icon} ${displayName}`,
//             callback_data: `cfg_category_${uniqueKey}`,
//           };
//         }
//       );
//       keyboard = [];
//       for (let i = 0; i < categoryButtons.length; i += 2) {
//         if (categoryButtons[i + 1]) {
//           keyboard.push([categoryButtons[i], categoryButtons[i + 1]]);
//         } else {
//           keyboard.push([categoryButtons[i]]);
//         }
//       }
//       break;

//     case "configuring_subcategory":
//       text = `${header}*انتخاب زیرشاخه زبان* 🇬🇧\n\nلطفاً یکی از زیرشاخه‌های زبان انگلیسی را انتخاب کنید:`;
//       const subCategoryButtons = Object.entries(englishSubCategories).map(
//         ([uniqueKey, displayName]) => {
//           const subKey = uniqueKey.split("_")[2];
//           const icon = englishSubCategoryIcons[subKey] || "📝";
//           return {
//             text: `${icon} ${displayName}`,
//             callback_data: `cfg_category_${uniqueKey}`,
//           };
//         }
//       );
//       keyboard = [];
//       for (let i = 0; i < subCategoryButtons.length; i += 2) {
//         if (subCategoryButtons[i + 1]) {
//           keyboard.push([subCategoryButtons[i], subCategoryButtons[i + 1]]);
//         } else {
//           keyboard.push([subCategoryButtons[i]]);
//         }
//       }
//       keyboard.push([
//         { text: "⬅️ بازگشت به منوی اصلی", callback_data: "cfg_back_main" },
//       ]);
//       break;

//     case "configuring_rounds":
//       const categoryName = game.settings.category.startsWith(
//         "english_language_"
//       )
//         ? `زبان انگلیسی (${englishSubCategories[game.settings.category]})`
//         : allCategories[game.settings.category];
//       text = `${header}*تنظیم تعداد سوالات* 🔢\n\nبرای موضوع «${categoryName}» چند سوال بازی کنیم؟`;
//       keyboard = [
//         ROUNDS.map((r) => ({
//           text: `${r} سوال`,
//           callback_data: `cfg_rounds_${r}`,
//         })),
//       ];
//       break;

//     case "configuring_timer":
//       text = `${header}*تنظیم زمان* ⏱️\n\nبرای پاسخ به هر سوال چند ثانیه زمان می‌خواهید؟`;
//       keyboard = [
//         TIMERS.map((t) => ({
//           text: `${t} ثانیه`,
//           callback_data: `cfg_timer_${t}`,
//         })),
//       ];
//       break;

//     case "lobby":
//       const lobbyCategoryName = game.settings.category.startsWith(
//         "english_language_"
//       )
//         ? `زبان انگلیسی (${englishSubCategories[game.settings.category]})`
//         : allCategories[game.settings.category];
//       let playerList = Object.values(game.players)
//         .map((p) => `👤 ${p.name}`)
//         .join("\n");
//       if (!playerList) playerList = "_هنوز کسی وارد بازی نشده..._";
//       text = `${header}*لابی بازی* 📣\n\n*موضوع:* ${lobbyCategoryName}\n*تعداد سوالات:* ${game.settings.rounds}\n*زمان هر سوال:* ${game.settings.timer} ثانیه\n\n*بازیکنان حاضر:*\n${playerList}`;
//       keyboard = [
//         [{ text: "✅ من هم بازی می‌کنم", callback_data: "join" }],
//         [{ text: "🚀 شروع بازی", callback_data: "start" }],
//       ];
//       break;

//     case "in_progress":
//       const currentQuestion = game.questions[game.currentRound - 1];
//       let playerProgress = Object.values(game.players)
//         .map((p) => {
//           const progressBar = createProgressBar(p);
//           return `*${p.name}* (${p.score} امتیاز)\n${progressBar}`;
//         })
//         .join("\n\n");
//       text = `${header}*سوال ${game.currentRound} از ${
//         game.settings.rounds
//       }* ❓\n\n*${he.decode(
//         currentQuestion.question
//       )}*\n\n------------------------------------\n${playerProgress}`;
//       keyboard = currentQuestion.options.map((option, index) => [
//         { text: he.decode(option), callback_data: `answer_${index}` },
//       ]);
//       break;

//     case "round_summary":
//       const prevRoundNumber = game.currentRound;
//       const prevQuestion = game.questions[prevRoundNumber - 1];
//       let summaryProgress = Object.values(game.players)
//         .map((p) => {
//           const progressBar = createProgressBar(p);
//           return `*${p.name}* (${p.score} امتیاز)\n${progressBar}`;
//         })
//         .join("\n\n");
//       text = `${header}*پایان دور ${prevRoundNumber}* 🏁\n\nپاسخ صحیح: *${he.decode(
//         prevQuestion.correct_answer
//       )}*\n\n------------------------------------\n${summaryProgress}`;
//       break;

//     case "finished":
//       let finalScores = `${header}*بازی تمام شد!* 🏆\n\n*نتایج نهایی:*\n\n`;
//       const sortedPlayers = Object.values(game.players).sort(
//         (a, b) => b.score - a.score
//       );
//       const highScore = sortedPlayers.length > 0 ? sortedPlayers[0].score : 0;
//       sortedPlayers.forEach((player, index) => {
//         let medal = "";
//         if (index === 0 && highScore > 0) medal = "🥇";
//         else if (index === 1 && highScore > 0) medal = "🥈";
//         else if (index === 2 && highScore > 0) medal = "🥉";
//         else medal = "▫️";

//         finalScores += `${medal} *${player.name}: ${player.score} امتیاز*\n\n`;
//       });
//       text = finalScores;
//       keyboard = [[{ text: "🎮 بازی جدید", callback_data: "new_game_button" }]];
//       break;
//   }

//   if (
//     text &&
//     (text !== game.lastMessageText ||
//       JSON.stringify(keyboard) !== JSON.stringify(game.lastKeyboard))
//   ) {
//     bot
//       .editMessageText(text, {
//         chat_id: chatId,
//         message_id: game.gameMessageId,
//         parse_mode: "Markdown",
//         reply_markup: { inline_keyboard: keyboard },
//       })
//       .catch((err) => {
//         if (!err.message.includes("message is not modified")) {
//           console.error("Telegram API Error:", err.message);
//         }
//       });
//     game.lastMessageText = text;
//     game.lastKeyboard = keyboard;
//   }
// }

// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   const options = {};

//   if (msg.is_topic_message) {
//     options.message_thread_id = msg.message_thread_id;
//   }

//   bot.sendMessage(
//     chatId,
//     "سلام! برای شروع یک بازی جدید در گروه، از دستور /newgame استفاده کنید. برای ترجمه کلمات انگلیسی از /translate word استفاده کنید.",
//     options
//   );
// });

// bot.onText(/\/newgame/, async (msg) => {
//   const options = {};
//   if (msg.is_topic_message) {
//     options.message_thread_id = msg.message_thread_id;
//   }
//   if (msg.chat.type === "private") {
//     return bot.sendMessage(
//       msg.chat.id,
//       "این بازی فقط در گروه‌ها قابل اجراست!",
//       options
//     );
//   }
//   createNewGame(msg.chat.id, msg.from, options);
// });

// bot.on("callback_query", async (callbackQuery) => {
//   const { message, from, data } = callbackQuery;
//   const chatId = message.chat.id;
//   const userId = from.id;

//   bot.answerCallbackQuery(callbackQuery.id);

//   let game = games[chatId];

//   if (data === "new_game_button") {
//     const options = {};
//     if (game && game.threadId) {
//       options.message_thread_id = game.threadId;
//     }
//     createNewGame(chatId, from, options);
//     return;
//   }

//   if (!game || message.message_id !== game.gameMessageId) {
//     return;
//   }

//   let action, value;
//   const firstUnderscoreIndex = data.indexOf("_");

//   if (firstUnderscoreIndex !== -1) {
//     action = data.substring(0, firstUnderscoreIndex);
//     value = data.substring(firstUnderscoreIndex + 1);
//   } else {
//     action = data;
//     value = "";
//   }

//   if (action === "cfg" && userId !== game.creatorId) {
//     return;
//   }

//   if (action === "cfg") {
//     const type = value.split("_")[0];
//     const val = value.substring(type.length + 1);

//     if (type === "category") {
//       if (val === "english_language") {
//         game.state = "configuring_subcategory";
//       } else {
//         game.settings.category = val;
//         game.state = "configuring_rounds";
//       }
//     } else if (type === "rounds") {
//       game.settings.rounds = parseInt(val, 10);
//       game.state = "configuring_timer";
//     } else if (type === "timer") {
//       game.settings.timer = parseInt(val, 10);
//       game.state = "lobby";
//     } else if (type === "back" && val === "main") {
//       game.state = "configuring_category";
//     }
//     await updateGameMessage(chatId);
//     return;
//   }

//   switch (action) {
//     case "join":
//       if (game.state !== "lobby") return;
//       if (!game.players[userId]) {
//         game.players[userId] = { id: userId, name: from.first_name, score: 0 };
//         await updateGameMessage(chatId);
//       }
//       break;

//     case "start":
//       if (userId !== game.creatorId) return;
//       if (game.state !== "lobby") return;

//       if (Object.keys(game.players).length === 0) {
//         game.players[userId] = { id: userId, name: from.first_name, score: 0 };
//       }

//       fetchQuestionsAndStart(chatId);
//       break;

//     case "answer":
//       if (
//         game.state !== "in_progress" ||
//         !game.players[userId] ||
//         (game.answers[game.currentRound] &&
//           game.answers[game.currentRound][userId])
//       )
//         return;

//       const currentQuestion = game.questions[game.currentRound - 1];

//       const chosenOptionIndex = parseInt(value, 10);
//       const chosenOptionText = currentQuestion.options[chosenOptionIndex];
//       const isCorrect = chosenOptionText === currentQuestion.correct_answer;

//       if (isCorrect) game.players[userId].score++;

//       game.answers[game.currentRound][userId] = {
//         answer: chosenOptionText,
//         isCorrect: isCorrect,
//       };

//       await updateGameMessage(chatId);

//       if (
//         Object.keys(game.answers[game.currentRound]).length ===
//         Object.keys(game.players).length
//       ) {
//         clearTimeout(game.timerId);
//         endRound(chatId);
//       }
//       break;
//   }
// });

// function fetchQuestionsAndStart(chatId) {
//   const game = games[chatId];
//   const { rounds, category } = game.settings;

//   let deckInfo = questionDecks[category];

//   if (deckInfo.deck.length < rounds) {
//     console.log(`Reshuffling all questions for category: ${category}`);
//     deckInfo.deck = [...deckInfo.deck, ...deckInfo.discardPile].sort(
//       () => 0.5 - Math.random()
//     );
//     deckInfo.discardPile = [];
//   }

//   const questionsToPlay = Math.min(rounds, deckInfo.deck.length);
//   if (questionsToPlay === 0) {
//     const options = game.threadId ? { message_thread_id: game.threadId } : {};
//     const categoryDisplayName = game.settings.category.startsWith(
//       "english_language_"
//     )
//       ? `زبان انگلیسی (${englishSubCategories[game.settings.category]})`
//       : allCategories[game.settings.category];
//     bot.sendMessage(
//       chatId,
//       `سوالی در دسته‌بندی «${categoryDisplayName}» باقی نمانده است! بازی لغو شد.`,
//       options
//     );
//     delete games[chatId];
//     return;
//   }

//   const selectedQuestions = deckInfo.deck.splice(0, questionsToPlay);
//   deckInfo.discardPile.push(...selectedQuestions);

//   game.questions = selectedQuestions.map((q) => ({
//     question: q.question,
//     correct_answer: q.correct_answer,
//     options: [...q.options].sort(() => Math.random() - 0.5),
//   }));

//   game.settings.rounds = questionsToPlay;
//   game.currentRound = 0;
//   for (let i = 1; i <= questionsToPlay; i++) {
//     game.answers[i] = {};
//   }
//   startNextRound(chatId);
// }

// function endRound(chatId) {
//   const game = games[chatId];
//   if (!game) return;

//   game.state = "round_summary";
//   await updateGameMessage(chatId);

//   if (game.currentRound >= game.settings.rounds) {
//     setTimeout(() => {
//       if (!games[chatId]) return;
//       game.state = "finished";
//       await updateGameMessage(chatId);
//     }, 5000);
//   } else {
//     setTimeout(() => {
//       if (!games[chatId]) return;
//       startNextRound(chatId);
//     }, 5000);
//   }
// }

// function startNextRound(chatId) {
//   const game = games[chatId];
//   if (!game) return;

//   game.currentRound++;
//   game.state = "in_progress";
//   await updateGameMessage(chatId);

//   game.timerId = setTimeout(() => {
//     if (games[chatId] && games[chatId].state === "in_progress") {
//       endRound(chatId);
//     }
//   }, game.settings.timer * 1000);
// }

// bot.onText(/\/cancelgame/, async (msg) => {
//   const chatId = msg.chat.id;
//   const game = games[chatId];
//   const options = {};
//   if (msg.is_topic_message) {
//     options.message_thread_id = msg.message_thread_id;
//   }

//   if (!game)
//     return bot.sendMessage(
//       chatId,
//       "هیچ بازی فعالی برای لغو وجود ندارد.",
//       options
//     );

//   try {
//     const admins = await bot.getChatAdministrators(chatId);
//     const isAdmin = admins.some((admin) => admin.user.id === msg.from.id);

//     if (msg.from.id === game.creatorId || isAdmin) {
//       if (game.timerId) clearTimeout(game.timerId);
//       bot.deleteMessage(chatId, game.gameMessageId).catch(() => {});
//       delete games[chatId];
//       bot.sendMessage(
//         chatId,
//         "✅ بازی فعال توسط سازنده یا ادمین لغو شد.",
//         options
//       );
//     } else {
//       bot.sendMessage(
//         chatId,
//         "❌ فقط سازنده بازی یا ادمین‌های گروه می‌توانند بازی را لغو کنند.",
//         options
//       );
//     }
//   } catch (error) {
//     if (msg.from.id === game.creatorId) {
//       if (game.timerId) clearTimeout(game.timerId);
//       bot.deleteMessage(chatId, game.gameMessageId).catch(() => {});
//       delete games[chatId];
//       bot.sendMessage(chatId, "✅ بازی فعال توسط سازنده لغو شد.", options);
//     } else {
//       bot.sendMessage(
//         chatId,
//         "❌ فقط سازنده بازی می‌تواند آن را لغو کند.",
//         options
//       );
//     }
//   }
// });

// // ✅ کد جدید برای دستور /translate
// bot.onText(/\/translate (.+)/, async (msg, match) => {
//   const chatId = msg.chat.id;
//   const wordToTranslate = match[1];

//   const options = {};
//   if (msg.is_topic_message) {
//     options.message_thread_id = msg.message_thread_id;
//   }

//   try {
//     // 1. ترجمه کلمه
//     const translationResult = await translate(wordToTranslate, { to: "fa" });
//     const translatedText = translationResult.text;

//     const messageText = `📖 ترجمه *${he.decode(
//       wordToTranslate
//     )}*:\n\n🇮🇷 *${he.decode(translatedText)}*`;
//     bot.sendMessage(chatId, messageText, {
//       ...options,
//       parse_mode: "Markdown",
//     });

//     // 2. دریافت تلفظ
//     const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURIComponent(
//       wordToTranslate
//     )}&tl=en`;

//     const response = await axios({
//       method: "get",
//       url: ttsUrl,
//       responseType: "stream",
//     });

//     // 3. ارسال صوت
//     const caption = `🔊 تلفظ *${he.decode(wordToTranslate)}*`;
//     bot.sendAudio(chatId, response.data, {
//       ...options,
//       caption: caption,
//       parse_mode: "Markdown",
//     });
//   } catch (error) {
//     console.error("Translate command error:", error.message);
//     bot.sendMessage(
//       chatId,
//       "متاسفانه در ترجمه یا دریافت تلفظ مشکلی پیش آمد. لطفاً کلمه انگلیسی را به درستی وارد کنید.",
//       options
//     );
//   }
// });

// console.log("ربات کوییز با موفقیت روشن شد!");
















// Load .env in development (if present)
require('dotenv').config();

const TelegramBot = require("node-telegram-bot-api");
const he = require("he");
const { translate } = require("@vitalets/google-translate-api");
const cheerio = require("cheerio");
// Use centralized HTTP client with timeout + retry
const axios = require("./utils/http");
const fs = require("fs");
const path = require("path");

// Load English idioms dictionary
const englishIdioms = JSON.parse(fs.readFileSync(path.join(__dirname, "english_idioms.json"), "utf8"));

// Global safety handlers and axios defaults to make operations non-blocking and resilient
// 🔑 توکن ربات شما
// NOTE: prefer setting BOT_TOKEN in environment. No hard-coded fallback to encourage secure handling.
const token = process.env.BOT_TOKEN;
if (!token) {
  console.error('ERROR: BOT_TOKEN is not set. Please create a .env file or set BOT_TOKEN in the environment. See .env.example.');
  // Fail fast so we don't start the bot in an invalid state
  process.exit(1);
}
// Support either polling (default) or webhook (faster, recommended in production)
const WEBHOOK_URL = process.env.WEBHOOK_URL || null;
const PORT = process.env.PORT || process.env.PORT || 3000;

let bot;
if (WEBHOOK_URL) {
  // webhook mode using express
  const express = require('express');
  const bodyParser = require('body-parser');
  const app = express();
  app.use(bodyParser.json());

  bot = new TelegramBot(token);
  // set webhook to the provided URL
  (async () => {
    try {
      await bot.setWebHook(WEBHOOK_URL);
      console.log('Webhook set to', WEBHOOK_URL);
    } catch (e) {
      console.error('Failed to set webhook:', e && e.message ? e.message : e);
    }
  })();

  app.post('/telegram-webhook', (req, res) => {
    bot.processUpdate(req.body);
    res.sendStatus(200);
  });

  app.listen(PORT, () => console.log(`Express webhook server running on port ${PORT}`));
} else {
  // polling mode with conflict handling
  bot = new TelegramBot(token, {
    polling: {
      interval: 3000, // Increase interval to reduce conflicts
      autoStart: false, // Don't auto-start, we'll start manually
      params: {
        timeout: 30,
        allowed_updates: ['message', 'callback_query'], // Only listen to specific updates
      },
    },
  });
  
  // Start polling with improved conflict handling
  let pollingRetries = 0;
  const maxRetries = 3; // Reduce max retries
  let isPollingActive = false;
  
  async function startPollingWithRetry() {
    if (isPollingActive) {
      console.log('⚠️ Polling already active, skipping start attempt');
      return;
    }
    
    try {
      isPollingActive = true;
      await bot.startPolling();
      console.log('✅ Bot polling started successfully');
      pollingRetries = 0; // Reset retry counter on success
      isPollingActive = false;
    } catch (error) {
      isPollingActive = false;
      pollingRetries++;
      
      if (error.message && error.message.includes('409 Conflict')) {
        console.log(`⚠️ Conflict detected (attempt ${pollingRetries}/${maxRetries}). Waiting longer before retry...`);
        
        if (pollingRetries < maxRetries) {
          const waitTime = Math.min(15000 * pollingRetries, 45000); // Longer wait for conflicts
          console.log(`⏳ Retrying polling in ${waitTime/1000} seconds...`);
          setTimeout(startPollingWithRetry, waitTime);
        } else {
          console.error('❌ Max conflict retries reached. Please ensure only one bot instance is running.');
          console.log('💡 Tip: Run "taskkill /f /im node.exe" to stop all instances, then restart.');
        }
      } else {
        console.error(`❌ Polling start failed (attempt ${pollingRetries}/${maxRetries}):`, error.message);
        
        if (pollingRetries < maxRetries) {
          const waitTime = Math.min(5000 * pollingRetries, 15000);
          console.log(`⏳ Retrying polling in ${waitTime/1000} seconds...`);
          setTimeout(startPollingWithRetry, waitTime);
        } else {
          console.error('❌ Max polling retries reached. Bot may not receive updates.');
        }
      }
    }
  }
  
  // Start polling after a longer delay to avoid conflicts
  setTimeout(startPollingWithRetry, 5000);
}

// quick connectivity check: log bot info and add a ping handler
bot.getMe()
  .then(async (me) => {
    botUsername = me.username;
    console.log(`Bot connected as @${me.username} (id: ${me.id})`);
    
    // Clear any existing webhook to ensure polling works
    try {
      // Note: getWebhookInfo might not be available in all versions
      console.log('ℹ️ Skipping webhook check - using polling mode');
    } catch (error) {
      console.log('ℹ️ No webhook to clear or error:', error.message);
    }
  })
  .catch((err) => console.error('Failed to get bot info:', err && err.message ? err.message : err));

// --- Improved Rate limiter (per-user) ---
// Default cooldown in seconds; can be tuned with RATE_LIMIT_SECONDS env var
const RATE_LIMIT_SECONDS = parseInt(process.env.RATE_LIMIT_SECONDS || '2', 10); // افزایش به 2 ثانیه برای کاهش تداخل
const userRateMap = new Map(); // userId -> timestamp of last action
const globalRateMap = new Map(); // command -> timestamp of last global execution

// Bot username for command handling
let botUsername = '';

// Helper function to create command regex that handles bot username
function createCommandRegex(command) {
  // This regex will match both "/command" and "/command@botusername"
  return new RegExp(`^\\/${command}(@\\w+)?\\s*$`);
}

// Helper function to create command regex with parameters
function createCommandRegexWithParams(command) {
  // This regex will match both "/command param" and "/command@botusername param"
  return new RegExp(`^\\/${command}(@\\w+)?\\s+(.+)$`);
}

function isRateLimited(userId) {
  if (!userId) return false;
  const now = Date.now();
  const last = userRateMap.get(userId) || 0;
  
  // Check user rate limit
  if (now - last < RATE_LIMIT_SECONDS * 1000) return true;
  
  // Check global rate limit (prevent multiple bots from overwhelming the API)
  const globalLast = globalRateMap.get('global') || 0;
  if (now - globalLast < 500) return true; // 500ms global cooldown
  
  userRateMap.set(userId, now);
  globalRateMap.set('global', now);
  return false;
}

async function handleRateLimited(userId, chatId, reason = 'شما خیلی سریع درخواست می‌دهید، لطفاً چند ثانیه صبر کنید.') {
  try {
    await safeApiCall(() => bot.sendMessage(chatId, reason));
  } catch (e) {
    // ignore send errors
  }
}

bot.onText(/^\/ping\b/, (msg) => {
  console.log('🎯 /ping command received from:', msg.from.id, 'in chat:', msg.chat.id);
  try {
    safeSendMessage(msg.chat.id, '🏓 pong - ربات فعال است!');
  } catch (e) {
    console.error('Error replying to /ping:', e);
  }
});

// Test command to check if bot is receiving messages
bot.onText(/^\/test$/, (msg) => {
  console.log('🎯 /test command received from:', msg.from.id, 'in chat:', msg.chat.id);
  try {
    const response = `✅ ربات فعال است!\n👤 کاربر: ${msg.from.first_name}\n💬 چت: ${msg.chat.id}\n⏰ زمان: ${new Date().toLocaleString('fa-IR')}`;
    safeSendMessage(msg.chat.id, response);
  } catch (e) {
    console.error('Error in /test command:', e);
  }
});

// Log all incoming messages for debugging
bot.on('message', (msg) => {
  console.log('📨 Message received:', {
    from: msg.from?.first_name || 'Unknown',
    userId: msg.from?.id,
    chatId: msg.chat?.id,
    text: msg.text?.substring(0, 50) || 'No text',
    type: msg.chat?.type
  });
});

// 📚 داده‌های بازی و آزمون
const RESULTS_FILE = path.join(__dirname, "quiz_results.json");
let games = {};

// Load questions from questions.json
let allQuestionsData = {};
try {
  allQuestionsData = JSON.parse(fs.readFileSync(path.join(__dirname, "questions.json"), "utf8"));
  console.log(`✅ Loaded questions.json with categories:`, Object.keys(allQuestionsData));
  
  // Count total questions and show distribution
  let totalQuestions = 0;
  for (const category in allQuestionsData) {
    const count = allQuestionsData[category].length;
    totalQuestions += count;
    console.log(`  📚 ${category}: ${count} questions`);
  }
  console.log(`✅ Total questions loaded: ${totalQuestions}`);
} catch (error) {
  console.error('❌ Error loading questions.json:', error.message);
  allQuestionsData = {};
}

// Load English words database
let englishWords = {};
try {
  englishWords = JSON.parse(fs.readFileSync(path.join(__dirname, "english_words.json"), "utf8"));
  console.log(`✅ Loaded English words database with ${Object.keys(englishWords).length} words`);
} catch (error) {
  console.error('❌ Error loading english_words.json:', error.message);
  englishWords = {};
}

// Load songs database (for backup/fallback)
let songs = {};
try {
  songs = JSON.parse(fs.readFileSync(path.join(__dirname, "songs.json"), "utf8"));
  console.log(`✅ Loaded songs database with ${Object.keys(songs).length} songs (backup)`);
} catch (error) {
  console.error('❌ Error loading songs.json:', error.message);
  songs = {};
}

// Online song search functions
async function searchSongOnline(songName) {
  try {
    console.log(`🔍 Searching for song: "${songName}"`);
    
    // Search for song on Genius.com
    const searchUrl = `https://genius.com/search?q=${encodeURIComponent(songName)}`;
    console.log(`🌐 Search URL: ${searchUrl}`);
    
    const response = await axios.get(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': 'keep-alive',
        'Upgrade-Insecure-Requests': '1'
      },
      timeout: 10000
    });
    
    console.log(`✅ Got response from Genius.com, status: ${response.status}`);
    
    const $ = cheerio.load(response.data);
    const songLinks = [];
    
    // Try multiple selectors for song links
    const selectors = [
      'a[href*="/songs/"]',
      '.mini_card[data-song-id] a',
      '.search_result a[href*="/songs/"]',
      'a[href*="/artists/"][href*="/songs/"]'
    ];
    
    for (const selector of selectors) {
      $(selector).each((i, element) => {
        const href = $(element).attr('href');
        const title = $(element).text().trim();
        if (href && title && href.includes('/songs/') && !songLinks.some(link => link.url === href)) {
          songLinks.push({
            title: title,
            url: href.startsWith('http') ? href : `https://genius.com${href}`
          });
        }
      });
      
      if (songLinks.length > 0) break;
    }
    
    console.log(`📋 Found ${songLinks.length} song links`);
    
    if (songLinks.length === 0) {
      console.log('❌ No song links found');
      return null;
    }
    
    // Get lyrics from first result
    const firstSong = songLinks[0];
    console.log(`🎵 Getting lyrics from: ${firstSong.title} - ${firstSong.url}`);
    
    return await getLyricsFromGenius(firstSong.url);
    
  } catch (error) {
    console.error('❌ Error searching song online:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data?.substring(0, 200));
    }
    return null;
  }
}

async function getLyricsFromGenius(url) {
  try {
    console.log(`🎵 Getting lyrics from: ${url}`);
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive'
      },
      timeout: 15000
    });
    
    console.log(`✅ Got lyrics page, status: ${response.status}`);
    
    const $ = cheerio.load(response.data);
    
    // Extract song title and artist with multiple selectors
    let title = '';
    let artist = '';
    
    // Try different selectors for title
    const titleSelectors = [
      'h1[data-testid="song-title"]',
      '.SongHeaderdesktop__Title-sc-1bg4ru6-1',
      'h1.song_title',
      '.header_with_cover_art-primary_info-title',
      'h1'
    ];
    
    for (const selector of titleSelectors) {
      title = $(selector).first().text().trim();
      if (title) break;
    }
    
    // Try different selectors for artist
    const artistSelectors = [
      'a[href*="/artists/"]',
      '.SongHeaderdesktop__Artist-sc-1bg4ru6-2',
      '.header_with_cover_art-primary_info-primary_artist',
      '.song_header-primary_info-primary_artist'
    ];
    
    for (const selector of artistSelectors) {
      artist = $(selector).first().text().trim();
      if (artist) break;
    }
    
    console.log(`🎤 Song: ${title} - Artist: ${artist}`);
    
    // Extract lyrics with multiple selectors
    let lyricsContainer = null;
    const lyricsSelectors = [
      '[data-lyrics-container="true"]',
      '.lyrics',
      '.song_body-lyrics',
      '.lyrics_container',
      '.lyrics-content'
    ];
    
    for (const selector of lyricsSelectors) {
      lyricsContainer = $(selector);
      if (lyricsContainer.length > 0) {
        console.log(`✅ Found lyrics container with selector: ${selector}`);
        break;
      }
    }
    
    if (!lyricsContainer || lyricsContainer.length === 0) {
      console.log('❌ No lyrics container found');
      return null;
    }
    
    // Clean up the lyrics
    lyricsContainer.find('br').replaceWith('\n');
    lyricsContainer.find('p').each((i, el) => {
      $(el).after('\n');
    });
    
    const lyricsText = lyricsContainer.text().trim();
    console.log(`📝 Raw lyrics length: ${lyricsText.length}`);
    
    if (!lyricsText) {
      console.log('❌ No lyrics text found');
      return null;
    }
    
    // Split lyrics into lines and clean them
    const lyrics = lyricsText
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && !line.match(/^\[.*\]$/) && line.length > 2); // Remove empty lines and [Verse] markers
    
    console.log(`📋 Processed ${lyrics.length} lyrics lines`);
    
    if (lyrics.length === 0) {
      console.log('❌ No valid lyrics found');
      return null;
    }
    
    return {
      title: title || 'Unknown Song',
      artist: artist || 'Unknown Artist',
      lyrics: lyrics,
      url: url
    };
    
  } catch (error) {
    console.error('❌ Error getting lyrics from Genius:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
    }
    return null;
  }
}

// Alternative song search using multiple sources with better headers
async function searchSongAlternative(songName) {
  try {
    console.log(`🔍 Alternative search for: "${songName}"`);
    
    // Try Lyrics.ovh API (free and reliable)
    try {
      console.log(`🎵 Trying Lyrics.ovh API...`);
      const lyricsUrl = `https://api.lyrics.ovh/v1/${encodeURIComponent(songName)}`;
      
      const response = await axios.get(lyricsUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'application/json',
          'Referer': 'https://lyrics.ovh/'
        },
        timeout: 15000
      });
      
      if (response.data && response.data.lyrics) {
        console.log(`✅ Found lyrics from Lyrics.ovh API`);
        return {
          title: songName,
          artist: 'Unknown Artist',
          lyrics: response.data.lyrics.split('\n').filter(line => line.trim()),
          url: `https://lyrics.ovh/lyric/${encodeURIComponent(songName)}`,
          source: 'lyrics.ovh'
        };
      }
    } catch (error) {
      console.log('❌ Lyrics.ovh API failed:', error.message);
    }
    
    // Try another free API
    try {
      console.log(`🎵 Trying another free API...`);
      const apiUrl = `https://some-random-api.ml/lyrics?title=${encodeURIComponent(songName)}`;
      
      const response = await axios.get(apiUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'application/json'
        },
        timeout: 15000
      });
      
      if (response.data && response.data.lyrics) {
        console.log(`✅ Found lyrics from Some Random API`);
        return {
          title: response.data.title || songName,
          artist: response.data.author || 'Unknown Artist',
          lyrics: response.data.lyrics.split('\n').filter(line => line.trim()),
          url: apiUrl,
          source: 'some-random-api'
        };
      }
    } catch (error) {
      console.log('❌ Some Random API failed:', error.message);
    }
    
    // Try Lyrist API (alternative)
    try {
      console.log(`🎵 Trying Lyrist API...`);
      const lyristUrl = `https://lyrist.vercel.app/api/${encodeURIComponent(songName)}`;
      
      const response = await axios.get(lyristUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          'Accept': 'application/json'
        },
        timeout: 15000
      });
      
      if (response.data && response.data.lyrics) {
        console.log(`✅ Found lyrics from Lyrist API`);
        return {
          title: response.data.title || songName,
          artist: response.data.artist || 'Unknown Artist',
          lyrics: response.data.lyrics.split('\n').filter(line => line.trim()),
          url: `https://lyrist.vercel.app/`,
          source: 'lyrist'
        };
      }
    } catch (error) {
      console.log('❌ Lyrist API failed:', error.message);
    }
    
    // Try direct web search with different approach
    try {
      console.log(`🎵 Trying direct web search...`);
      const searchQuery = `${songName} lyrics site:lyrics.com OR site:azlyrics.com OR site:metrolyrics.com`;
      const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
      
      const response = await axios.get(searchUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'Accept-Language': 'en-US,en;q=0.5',
          'Accept-Encoding': 'gzip, deflate, br',
          'Connection': 'keep-alive',
          'Upgrade-Insecure-Requests': '1',
          'Sec-Fetch-Dest': 'document',
          'Sec-Fetch-Mode': 'navigate',
          'Sec-Fetch-Site': 'none'
        },
        timeout: 15000
      });
      
      const $ = cheerio.load(response.data);
      const links = [];
      
      $('a[href*="lyrics"]').each((i, element) => {
        const href = $(element).attr('href');
        if (href && href.includes('lyrics') && !href.includes('google')) {
          links.push(href.replace('/url?q=', '').split('&')[0]);
        }
      });
      
      if (links.length > 0) {
        console.log(`✅ Found ${links.length} lyrics links from Google search`);
        // Try to get lyrics from first link
        for (const link of links.slice(0, 3)) {
          try {
            const lyrics = await getLyricsFromGenericSite(link);
            if (lyrics) return lyrics;
          } catch (error) {
            console.log(`❌ Failed to get lyrics from ${link}:`, error.message);
          }
        }
      }
    } catch (error) {
      console.log('❌ Direct web search failed:', error.message);
    }
    
    return null;
  } catch (error) {
    console.error('❌ Alternative search failed:', error.message);
    return null;
  }
}

async function getLyricsFromGenericSite(url) {
  try {
    console.log(`🎵 Getting lyrics from: ${url}`);
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.5',
        'Connection': 'keep-alive'
      },
      timeout: 15000
    });
    
    const $ = cheerio.load(response.data);
    
    // Try multiple selectors for lyrics
    const lyricsSelectors = [
      '.lyrics',
      '.lyrics-content',
      '.lyrics-container',
      '.song-lyrics',
      '[class*="lyric"]',
      '[id*="lyric"]',
      '.verse',
      '.song-text'
    ];
    
    let lyricsText = '';
    for (const selector of lyricsSelectors) {
      const element = $(selector);
      if (element.length > 0) {
        element.find('br').replaceWith('\n');
        lyricsText = element.text().trim();
        if (lyricsText.length > 50) break;
      }
    }
    
    if (!lyricsText || lyricsText.length < 50) {
      return null;
    }
    
    const title = $('h1').first().text().trim() || 'Unknown Song';
    const artist = $('.artist').first().text().trim() || $('h2').first().text().trim() || 'Unknown Artist';
    
    const lyrics = lyricsText
      .split('\n')
      .map(line => line.trim())
      .filter(line => line && line.length > 2);
    
    if (lyrics.length < 5) {
      return null;
    }
    
    return {
      title: title,
      artist: artist,
      lyrics: lyrics,
      url: url,
      source: 'generic'
    };
  } catch (error) {
    console.error('❌ Generic lyrics extraction failed:', error.message);
    return null;
  }
}

async function getLyricsFromMusixmatch(url) {
  try {
    console.log(`🎵 Getting lyrics from Musixmatch: ${url}`);
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: 15000
    });
    
    const $ = cheerio.load(response.data);
    
    const title = $('h1').first().text().trim() || 'Unknown Song';
    const artist = $('.mxm-track-title__artist a').first().text().trim() || 'Unknown Artist';
    
    const lyricsText = $('.mxm-lyrics__content').text().trim();
    
    if (!lyricsText) {
      return null;
    }
    
    const lyrics = lyricsText.split('\n').filter(line => line.trim());
    
    return {
      title: title,
      artist: artist,
      lyrics: lyrics,
      url: url
    };
  } catch (error) {
    console.error('❌ Musixmatch lyrics error:', error.message);
    return null;
  }
}

async function getLyricsFromAZLyrics(url) {
  try {
    console.log(`🎵 Getting lyrics from AZLyrics: ${url}`);
    
    const response = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      },
      timeout: 15000
    });
    
    const $ = cheerio.load(response.data);
    
    const title = $('b').first().text().trim() || 'Unknown Song';
    const artist = $('.artist').first().text().trim() || 'Unknown Artist';
    
    const lyricsText = $('.ringtone').nextUntil('div').text().trim();
    
    if (!lyricsText) {
      return null;
    }
    
    const lyrics = lyricsText.split('\n').filter(line => line.trim());
    
    return {
      title: title,
      artist: artist,
      lyrics: lyrics,
      url: url
    };
  } catch (error) {
    console.error('❌ AZLyrics lyrics error:', error.message);
    return null;
  }
}

async function translateLyrics(lyrics) {
  try {
    const translatedLyrics = [];
    
    for (const line of lyrics) {
      if (line.trim()) {
        try {
          const translation = await translate(line, { to: 'fa' });
          translatedLyrics.push(translation.text);
        } catch (error) {
          translatedLyrics.push('ترجمه در دسترس نیست');
        }
      } else {
        translatedLyrics.push('');
      }
    }
    
    return translatedLyrics;
  } catch (error) {
    console.error('Error translating lyrics:', error.message);
    return lyrics.map(() => 'ترجمه در دسترس نیست');
  }
}

// Optimized warning system
const WARNINGS_FILE = path.join(__dirname, "warnings.json");
let warnings = {};

// Prevent duplicate callback query processing
const processedCallbacks = new Set();

const fsp = fs.promises;

async function loadWarnings() {
  try {
    await fsp.access(WARNINGS_FILE);
    const data = await fsp.readFile(WARNINGS_FILE, "utf8");
    return JSON.parse(data);
  } catch (error) {
    if (error && error.code !== "ENOENT") console.error("Error loading warnings:", error);
    return {};
  }
}

// Debounced save for warnings to reduce file I/O
let _warningsSaveTimer = null;
const WARNINGS_SAVE_DELAY = 1000; // 1 second

async function saveWarnings(warningsData) {
  if (_warningsSaveTimer) clearTimeout(_warningsSaveTimer);
  _warningsSaveTimer = setTimeout(async () => {
    try {
      await fsp.writeFile(WARNINGS_FILE, JSON.stringify(warningsData, null, 2), "utf8");
    } catch (error) {
      console.error("Error saving warnings:", error);
    }
    _warningsSaveTimer = null;
  }, WARNINGS_SAVE_DELAY);
}

// Cache for admin status to reduce API calls
const adminCache = new Map();
const ADMIN_CACHE_TTL = 5 * 60 * 1000; // 5 minutes

async function isAdmin(userId, chatId) {
  const cacheKey = `${userId}_${chatId}`;
  const cached = adminCache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < ADMIN_CACHE_TTL) {
    return cached.isAdmin;
  }
  
  // Check environment variable first
  const adminIds = process.env.ADMIN_IDS ? process.env.ADMIN_IDS.split(',').map(id => parseInt(id.trim())) : [];
  
  if (adminIds.length > 0) {
    const result = adminIds.includes(userId);
    adminCache.set(cacheKey, { isAdmin: result, timestamp: Date.now() });
    return result;
  }
  
  // Fallback: Check Telegram admin status
  try {
    const chatMember = await bot.getChatMember(chatId, userId);
    const result = chatMember.status === 'administrator' || chatMember.status === 'creator';
    adminCache.set(cacheKey, { isAdmin: result, timestamp: Date.now() });
    return result;
  } catch (error) {
    console.error('Error checking admin status:', error.message);
    return false;
  }
}

// Clear admin cache for a specific user/chat or all
function clearAdminCache(userId = null, chatId = null) {
  if (userId && chatId) {
    adminCache.delete(`${userId}_${chatId}`);
  } else {
    adminCache.clear();
  }
}

async function safeSendMessage(chatId, message, options = {}) {
  try {
    await bot.sendMessage(chatId, message, options);
    return true;
  } catch (error) {
    if (error.response?.body?.error_code === 403) {
      console.log('Bot is not a member of the group chat, skipping message send');
      return false;
    }
    if (error.response?.body?.error_code === 400) {
      const description = error.response?.body?.description || '';
      if (description.includes('group chat was upgraded to a supergroup chat')) {
        console.log('Group was upgraded to supergroup, chat ID changed. Skipping message send.');
        return false;
      }
      if (description.includes('chat not found')) {
        console.log('Chat not found, skipping message send.');
        return false;
      }
      if (description.includes('message is not modified')) {
        console.log('Message is not modified, skipping message send.');
        return false;
      }
    }
    console.error('Failed to send message:', error.message);
    if (error.response?.body) {
      console.error('Error details:', error.response.body);
    }
    return false;
  }
}

async function safeEditMessageText(text, options) {
  try {
    await bot.editMessageText(text, options);
    return true;
  } catch (error) {
    if (error.response?.body?.error_code === 403) {
      console.log('Bot is not a member of the group chat, skipping message edit');
      return false;
    }
    if (error.response?.body?.error_code === 400) {
      const description = error.response?.body?.description || '';
      if (description.includes('group chat was upgraded to a supergroup chat')) {
        console.log('Group was upgraded to supergroup, chat ID changed. Skipping message edit.');
        return false;
      }
      if (description.includes('chat not found')) {
        console.log('Chat not found, skipping message edit.');
        return false;
      }
      if (description.includes('message is not modified')) {
        console.log('Message is not modified, skipping message edit.');
        return false;
      }
      if (description.includes('message to edit not found')) {
        console.log('Message to edit not found, skipping message edit.');
        return false;
      }
    }
    console.error('Failed to edit message:', error.message);
    if (error.response?.body) {
      console.error('Error details:', error.response.body);
    }
    return false;
  }
}

async function addWarning(userId, chatId, adminId, reason = 'اخطار ادمین') {
  const userKey = `${chatId}_${userId}`;
  
  if (!warnings[userKey]) {
    warnings[userKey] = {
      userId,
      chatId,
      warnings: [],
      totalWarnings: 0
    };
  }
  
  const warning = {
    id: Date.now(),
    adminId,
    reason,
    timestamp: new Date().toISOString()
  };
  
  warnings[userKey].warnings.push(warning);
  warnings[userKey].totalWarnings++;
  
  await saveWarnings(warnings);
  return warnings[userKey].totalWarnings;
}

async function removeWarning(userId, chatId, adminId) {
  const userKey = `${chatId}_${userId}`;
  
  if (!warnings[userKey]?.warnings.length) return 0;
  
  warnings[userKey].warnings.pop();
  warnings[userKey].totalWarnings = Math.max(0, warnings[userKey].totalWarnings - 1);
  
  await saveWarnings(warnings);
  return warnings[userKey].totalWarnings;
}

function getUserWarnings(userId, chatId) {
  return warnings[`${chatId}_${userId}`]?.totalWarnings || 0;
}

// Global error handlers
async function gracefulShutdown(reason, err) {
  console.error("Graceful shutdown triggered:", reason, err || "");
  try {
    if (typeof saveQuizResults === "function") await saveQuizResults(quizSessions);
    if (typeof saveWarnings === "function") await saveWarnings(warnings);
  } catch (e) {
    console.error("Error saving data during shutdown:", e);
  }
  try {
    if (bot && typeof bot.stopPolling === "function") bot.stopPolling();
  } catch (e) {
    // ignore
  }
  setTimeout(() => process.exit(1), 500);
}

process.on("unhandledRejection", (reason, p) => {
  console.error("Unhandled Rejection at:", p, "reason:", reason);
});

process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  gracefulShutdown("uncaughtException", err);
});

// Async load/save for quiz results
async function loadQuizResults() {
  try {
    await fsp.access(RESULTS_FILE);
    const data = await fsp.readFile(RESULTS_FILE, "utf8");
    try {
      return JSON.parse(data);
    } catch (parseErr) {
      console.error('quiz_results.json appears corrupted:', parseErr.message);
      const backup = RESULTS_FILE + `.corrupt.${Date.now()}`;
      try {
        await fsp.rename(RESULTS_FILE, backup);
        console.warn('Moved corrupted quiz results to', backup);
      } catch (renameErr) {
        console.error('Failed to backup corrupted quiz results:', renameErr);
      }
      try {
        await fsp.writeFile(RESULTS_FILE, JSON.stringify({}, null, 2), 'utf8');
      } catch (writeErr) {
        console.error('Failed to recreate quiz_results.json:', writeErr);
      }
      return {};
    }
  } catch (error) {
    if (error && error.code !== "ENOENT") console.error("Error loading quiz results:", error);
    return {};
  }
}

async function saveQuizResults(results) {
  try {
    await fsp.writeFile(RESULTS_FILE, JSON.stringify(results, null, 2), "utf8");
  } catch (error) {
    console.error("Error saving quiz results:", error);
  }
}

// بارگذاری اطلاعات در ابتدای اجرای ربات (غیرهمزمان)
let quizSessions = {};
(async () => {
  try {
    quizSessions = await loadQuizResults();
    console.log("Loaded quiz sessions:", Object.keys(quizSessions).length);
  } catch (e) {
    console.error("Failed to load quiz sessions on startup:", e);
  }
})();

// Load warnings on startup
(async () => {
  try {
    warnings = await loadWarnings();
    console.log("Loaded warnings:", Object.keys(warnings).length);
  } catch (e) {
    console.error("Failed to load warnings on startup:", e);
  }
})();

// Load large JSON assets asynchronously to avoid blocking startup
let allData = {};
let quizzQuestions = [];

const QUESTIONS_FILE = path.join(__dirname, "questions.json");
const QUIZZ_FILE = path.join(__dirname, "quizz.json");

async function loadQuestionFiles() {
  try {
    const raw = await fsp.readFile(QUESTIONS_FILE, "utf8");
    try {
      allData = JSON.parse(raw);
    } catch (parseErr) {
      console.error('questions.json appears corrupted:', parseErr.message);
      const backup = QUESTIONS_FILE + `.corrupt.${Date.now()}`;
      try {
        await fsp.rename(QUESTIONS_FILE, backup);
        console.warn('Moved corrupted questions.json to', backup);
      } catch (renameErr) {
        console.error('Failed to backup corrupted questions.json:', renameErr);
      }
      // recreate a minimal structure to allow bot to continue
      allData = {};
      try {
        await fsp.writeFile(QUESTIONS_FILE, JSON.stringify(allData, null, 2), 'utf8');
      } catch (wErr) {
        console.error('Failed to recreate questions.json:', wErr);
      }
    }
    console.log("questions.json loaded: categories=", Object.keys(allData).length);
  } catch (e) {
    console.error("Failed to load questions.json:", e && e.message ? e.message : e);
    allData = {};
  }

  try {
    const raw2 = await fsp.readFile(QUIZZ_FILE, "utf8");
    try {
      quizzQuestions = JSON.parse(raw2).sort(() => 0.5 - Math.random());
    } catch (parseErr) {
      console.error('quizz.json appears corrupted:', parseErr.message);
      const backup = QUIZZ_FILE + `.corrupt.${Date.now()}`;
      try {
        await fsp.rename(QUIZZ_FILE, backup);
        console.warn('Moved corrupted quizz.json to', backup);
      } catch (renameErr) {
        console.error('Failed to backup corrupted quizz.json:', renameErr);
      }
      quizzQuestions = [];
      try {
        await fsp.writeFile(QUIZZ_FILE, JSON.stringify([], null, 2), 'utf8');
      } catch (wErr) {
        console.error('Failed to recreate quizz.json:', wErr);
      }
    }
    console.log("quizz.json loaded: questions=", quizzQuestions.length);
  } catch (e) {
    console.error("Failed to load quizz.json:", e && e.message ? e.message : e);
    quizzQuestions = [];
  }
}

// Helper: wrap Telegram API calls to avoid unhandled exceptions from bubbling up
async function safeApiCall(fn, ...args) {
  if (!fn) return null;
  try {
    return await fn(...args);
  } catch (err) {
    // common Telegram errors: rate limit (429) includes retry_after, and 400-series for bad requests
    try {
      if (err && err.response && err.response.body) console.error('Telegram API Error:', err.response.body);
      else if (err && err.code) console.error('Telegram API Error:', err.code, err.message || err);
      else console.error('Telegram API Error:', err && err.message ? err.message : err);
    } catch (logErr) {
      console.error('Error logging Telegram error:', logErr);
    }
    // If it's rate limit, wait for suggested time (best-effort) before continuing
    if (err && err.response && err.response.body && err.response.body.error_code === 429) {
      const desc = err.response.body.description || '';
      const m = desc.match(/retry after (\d+)/i);
      const wait = m ? parseInt(m[1], 10) : null;
      if (wait) {
        console.warn('Rate limited by Telegram, waiting', wait, 'seconds before continuing');
        await new Promise((r) => setTimeout(r, (wait + 1) * 1000));
      }
    }
    return null;
  }
}

// start loading, then initialize decks once loaded
loadQuestionFiles().then(() => {
  try {
    initializeDecks();
  } catch (e) {
    console.error('initializeDecks error after loading question files:', e);
  }
});

let questionDecks = {};
let allCategories = {};
let englishSubCategories = {};

// Debounced save to reduce frequent disk writes
let _saveTimer = null;
function saveQuizResultsDebounced(results, delay = 3000) {
  if (_saveTimer) clearTimeout(_saveTimer);
  _saveTimer = setTimeout(() => {
    saveQuizResults(results).catch((e) => console.error('Debounced save failed:', e));
    _saveTimer = null;
  }, delay);
}

const categoryIcons = {
  "general_knowledge": "🌍",
  "history": "📜",
  "geography": "🗺️",
  "sports": "⚽",
  "movies": "🎬",
  "food_nutrition": "🍕",
  "religious_info": "🙏",
  "math_fun": "🔢",
  "technology": "💻",
  "english_language": "🇬🇧",
};

const englishSubCategoryIcons = {
  vocabulary: "📖",
  grammar: "✒️",
  idioms: "🤔",
  conversation: "💬",
  spelling: "✍️",
};

function initializeDecks() {
  console.log("Initializing and shuffling the question decks...");
  for (const categoryKey in allQuestionsData) {
    const questions = allQuestionsData[categoryKey];
    if (questions && questions.length > 0) {
      // Get display name from first question's category field
      const displayName = questions[0].category;
      allCategories[categoryKey] = displayName;
      
      // Convert questions format to match expected structure
      const convertedQuestions = questions.map(q => ({
        question: q.question,
        correct_answer: q.correct_answer,
        options: q.options,
        category: q.category,
        difficulty: q.difficulty,
        id: q.id
      }));
      
      questionDecks[categoryKey] = {
        deck: JSON.parse(JSON.stringify(convertedQuestions)).sort(() => 0.5 - Math.random()),
        discardPile: [],
      };
      
      console.log(`✅ Initialized category "${displayName}" (${categoryKey}) with ${questions.length} questions`);
    } else {
      console.log(`⚠️ Category "${categoryKey}" is empty - skipping`);
    }
  }
  
  // Add English language category from quizz.json if questions.json doesn't have it
  if (!allQuestionsData.english_language || allQuestionsData.english_language.length === 0) {
    try {
      const quizzData = JSON.parse(fs.readFileSync(path.join(__dirname, "quizz.json"), "utf8"));
      if (quizzData && quizzData.length > 0) {
        allCategories["english_language"] = "زبان انگلیسی";
        questionDecks["english_language"] = {
          deck: JSON.parse(JSON.stringify(quizzData)).sort(() => 0.5 - Math.random()),
          discardPile: [],
        };
        console.log(`✅ Initialized category "زبان انگلیسی" (english_language) with ${quizzData.length} questions from quizz.json`);
      }
    } catch (error) {
      console.log(`⚠️ Could not load quizz.json for English language: ${error.message}`);
    }
  }
  
  // Force add English language category even if no questions
  if (!allCategories["english_language"]) {
    allCategories["english_language"] = "زبان انگلیسی";
    questionDecks["english_language"] = {
      deck: [],
      discardPile: [],
    };
    console.log(`✅ Added empty English language category for UI purposes`);
  }
  
  console.log(`Decks initialized successfully. Active categories: ${Object.keys(allCategories).length}`);
}

initializeDecks();

const ROUNDS = [5, 10, 15];
const TIMERS = [15, 20, 30];

// ----------------------------------------------------
// 🎮 توابع و منطق بازی گروهی
// ----------------------------------------------------

async function createNewGame(chatId, from, options = {}) {
  console.log('🎮 Creating new game for chat:', chatId, 'by user:', from.id);
  
  if (games[chatId] && games[chatId].state !== "finished") {
    console.log('⚠️ Active game already exists, state:', games[chatId].state);
    safeSendMessage(
      chatId,
      "یک بازی فعال است. برای لغو از /cancelgame استفاده کنید.",
      options
    );
    return;
  }
  
  try {
    // Send initial message directly using bot.sendMessage
    const gameMessage = await bot.sendMessage(
      chatId,
      "در حال ساخت بازی جدید...",
      options
    );
    
    console.log('✅ Initial game message sent, message ID:', gameMessage.message_id);
    
    games[chatId] = {
      state: "configuring_category",
      creatorId: from.id,
      creatorName: from.first_name,
      gameMessageId: gameMessage.message_id,
      threadId: options.message_thread_id,
      players: {},
      settings: {},
      answers: {},
      lastMessageText: "",
      lastKeyboard: [],
    };
    
    console.log('✅ Game created successfully, updating message with categories');
    await updateGameMessage(chatId);
  } catch (error) {
    console.error('❌ Error creating new game:', error.message);
    safeSendMessage(
      chatId,
      "متاسفم، در ایجاد بازی مشکلی پیش آمد. لطفاً دوباره تلاش کنید.",
      options
    );
  }
}

async function updateGameMessage(chatId) {
  const game = games[chatId];
  if (!game || !game.gameMessageId) {
    console.log('⚠️ Cannot update game message - no game or message ID');
    return;
  }
  
  console.log('🔄 Updating game message for chat:', chatId, 'state:', game.state);
  let text = "";
  let keyboard = [];
  const createProgressBar = (player) => {
    let bar = "";
    const totalRounds = game.settings.rounds;
    for (let i = 1; i <= totalRounds; i++) {
      const answer = game.answers[i] ? game.answers[i][player.id] : undefined;
      if (game.state === "in_progress" && i === game.currentRound && !answer) {
        bar += "⏳";
      } else if (
        i > game.currentRound ||
        (game.state === "round_summary" && i === game.currentRound && !answer)
      ) {
        bar += "⬜️";
      } else if (answer === undefined) {
        bar += "⬛️";
      } else {
        bar += answer.isCorrect ? "✅" : "❌";
      }
    }
    return bar;
  };
  const header = "👑 *بازی آنلاین کوئیز* 👑\n\n";
  switch (game.state) {
    case "configuring_category":
      text = `${header}*انتخاب دسته‌بندی* 🕹️\n\nیک موضوع را برای شروع انتخاب کنید:`;
      
      console.log('📚 Available categories:', Object.keys(allCategories));
      
      const categoryButtons = Object.entries(allCategories).map(
        ([uniqueKey, displayName]) => {
          const icon = categoryIcons[uniqueKey] || "📚";
          console.log('🎯 Creating button for category:', uniqueKey, displayName);
          return {
            text: `${icon} ${displayName}`,
            callback_data: `cfg_category_${uniqueKey}`,
          };
        }
      );
      
      console.log('🎮 Category buttons created:', categoryButtons.length);
      
      keyboard = [];
      for (let i = 0; i < categoryButtons.length; i += 2) {
        if (categoryButtons[i + 1]) {
          keyboard.push([categoryButtons[i], categoryButtons[i + 1]]);
        } else {
          keyboard.push([categoryButtons[i]]);
        }
      }
      
      console.log('⌨️ Keyboard layout created:', keyboard.length, 'rows');
      break;
    case "configuring_subcategory":
      text = `${header}*انتخاب زیرشاخه زبان* 🇬🇧\n\nلطفاً یکی از زیرشاخه‌های زبان انگلیسی را انتخاب کنید:`;
      const subCategoryButtons = Object.entries(englishSubCategories).map(
        ([uniqueKey, displayName]) => {
          const subKey = uniqueKey.split("_")[2];
          const icon = englishSubCategoryIcons[subKey] || "📝";
          return {
            text: `${icon} ${displayName}`,
            callback_data: `cfg_category_${uniqueKey}`,
          };
        }
      );
      keyboard = [];
      for (let i = 0; i < subCategoryButtons.length; i += 2) {
        if (subCategoryButtons[i + 1]) {
          keyboard.push([subCategoryButtons[i], subCategoryButtons[i + 1]]);
        } else {
          keyboard.push([subCategoryButtons[i]]);
        }
      }
      keyboard.push([
        { text: "⬅️ بازگشت به منوی اصلی", callback_data: "cfg_back_main" },
      ]);
      break;
    case "configuring_rounds":
      const categoryName = game.settings.category.startsWith(
        "english_language_"
      )
        ? `زبان انگلیسی (${englishSubCategories[game.settings.category]})`
        : allCategories[game.settings.category];
      text = `${header}*تنظیم تعداد سوالات* 🔢\n\nبرای موضوع «${categoryName}» چند سوال بازی کنیم؟`;
      keyboard = [
        ROUNDS.map((r) => ({
          text: `${r} سوال`,
          callback_data: `cfg_rounds_${r}`,
        })),
      ];
      break;
    case "configuring_timer":
      text = `${header}*تنظیم زمان* ⏱️\n\nبرای پاسخ به هر سوال چند ثانیه زمان می‌خواهید؟`;
      keyboard = [
        TIMERS.map((t) => ({
          text: `${t} ثانیه`,
          callback_data: `cfg_timer_${t}`,
        })),
      ];
      break;
    case "lobby":
      const lobbyCategoryName = game.settings.category.startsWith(
        "english_language_"
      )
        ? `زبان انگلیسی (${englishSubCategories[game.settings.category]})`
        : allCategories[game.settings.category];
      let playerList = Object.values(game.players)
        .map((p) => `👤 ${p.name}`)
        .join("\n");
      if (!playerList) playerList = "_هنوز کسی وارد بازی نشده..._";
      text = `${header}*لابی بازی* 📣\n\n*موضوع:* ${lobbyCategoryName}\n*تعداد سوالات:* ${game.settings.rounds}\n*زمان هر سوال:* ${game.settings.timer} ثانیه\n\n*بازیکنان حاضر:*\n${playerList}`;
      keyboard = [
        [{ text: "✅ من هم بازی می‌کنم", callback_data: "join" }],
        [{ text: "🚀 شروع بازی", callback_data: "start" }],
      ];
      break;
    case "in_progress":
      const currentQuestion = game.questions[game.currentRound - 1];
      let playerProgress = Object.values(game.players)
        .map((p) => {
          const progressBar = createProgressBar(p);
          return `*${p.name}* (${p.score} امتیاز)\n${progressBar}`;
        })
        .join("\n\n");
      text = `${header}*سوال ${game.currentRound} از ${
        game.settings.rounds
      }* ❓\n\n*${he.decode(
        currentQuestion.question
      )}*\n\n------------------------------------\n${playerProgress}`;
      keyboard = currentQuestion.options.map((option, index) => [
        { text: he.decode(option), callback_data: `answer_${index}` },
      ]);
      break;
    case "round_summary":
      const prevRoundNumber = game.currentRound;
      const prevQuestion = game.questions[prevRoundNumber - 1];
      let summaryProgress = Object.values(game.players)
        .map((p) => {
          const progressBar = createProgressBar(p);
          return `*${p.name}* (${p.score} امتیاز)\n${progressBar}`;
        })
        .join("\n\n");
      text = `${header}*پایان دور ${prevRoundNumber}* 🏁\n\nپاسخ صحیح: *${he.decode(
        prevQuestion.correct_answer
      )}*\n\n------------------------------------\n${summaryProgress}`;
      break;
    case "finished":
      let finalScores = `${header}*بازی تمام شد!* 🏆\n\n*نتایج نهایی:*\n\n`;
      const sortedPlayers = Object.values(game.players).sort(
        (a, b) => b.score - a.score
      );
      const highScore = sortedPlayers.length > 0 ? sortedPlayers[0].score : 0;
      sortedPlayers.forEach((player, index) => {
        let medal = "";
        if (index === 0 && highScore > 0) medal = "🥇";
        else if (index === 1 && highScore > 0) medal = "🥈";
        else if (index === 2 && highScore > 0) medal = "🥉";
        else medal = "▫️";
        finalScores += `${medal} *${player.name}: ${player.score} امتیاز*\n\n`;
      });
      text = finalScores;
      keyboard = [[{ text: "🎮 بازی جدید", callback_data: "new_game_button" }]];
      break;
  }
  if (
    text &&
    (text !== game.lastMessageText ||
      JSON.stringify(keyboard) !== JSON.stringify(game.lastKeyboard))
  ) {
    console.log('📝 Updating game message with new content');
    const options = game.threadId ? { message_thread_id: game.threadId } : {};
    
    try {
      await safeEditMessageText(text, {
        chat_id: chatId,
        message_id: game.gameMessageId,
        reply_markup: { inline_keyboard: keyboard },
        parse_mode: "Markdown",
        ...options,
      });
      
      game.lastMessageText = text;
      game.lastKeyboard = keyboard;
      console.log('✅ Game message updated successfully');
    } catch (err) {
      console.error('❌ Error updating game message:', err.message);
      
      // If editing fails, try to send a new message
      try {
        console.log('🔄 Trying to send new message instead of editing');
        const newMessage = await safeSendMessage(chatId, text, {
          ...options,
          reply_markup: { inline_keyboard: keyboard },
          parse_mode: "Markdown",
        });
        
        if (newMessage) {
          // Delete old message and update game with new message ID
          try {
            await bot.deleteMessage(chatId, game.gameMessageId);
          } catch (deleteErr) {
            console.log('⚠️ Could not delete old message:', deleteErr.message);
          }
          
          game.gameMessageId = newMessage.message_id;
          game.lastMessageText = text;
          game.lastKeyboard = keyboard;
          console.log('✅ New game message sent successfully');
        }
      } catch (sendErr) {
        console.error('❌ Failed to send new message:', sendErr.message);
      }
    }
  } else {
    console.log('ℹ️ Game message content unchanged, skipping update');
  }
}

async function fetchQuestionsAndStart(chatId) {
  const game = games[chatId];
  const { rounds, category } = game.settings;
  let deckInfo = questionDecks[category];
  if (deckInfo.deck.length < rounds) {
    console.log(`Reshuffling all questions for category: ${category}`);
    deckInfo.deck = [...deckInfo.deck, ...deckInfo.discardPile].sort(
      () => 0.5 - Math.random()
    );
    deckInfo.discardPile = [];
  }
  const questionsToPlay = Math.min(rounds, deckInfo.deck.length);
  if (questionsToPlay === 0) {
    const options = game.threadId ? { message_thread_id: game.threadId } : {};
    const categoryDisplayName = game.settings.category.startsWith(
      "english_language_"
    )
      ? `زبان انگلیسی (${englishSubCategories[game.settings.category]})`
      : allCategories[game.settings.category];
    safeSendMessage(
      chatId,
      `سوالی در دسته‌بندی «${categoryDisplayName}» باقی نمانده است! بازی لغو شد.`,
      options
    );
    delete games[chatId];
    return;
  }
  const selectedQuestions = deckInfo.deck.splice(0, questionsToPlay);
  deckInfo.discardPile.push(...selectedQuestions);
  game.questions = selectedQuestions.map((q) => ({
    question: q.question,
    correct_answer: q.correct_answer,
    options: [...q.options].sort(() => Math.random() - 0.5),
  }));
  game.settings.rounds = questionsToPlay;
  game.currentRound = 0;
  for (let i = 1; i <= questionsToPlay; i++) {
    game.answers[i] = {};
  }
  await startNextRound(chatId);
}

async function endRound(chatId) {
  const game = games[chatId];
  if (!game) return;
  game.state = "round_summary";
  await updateGameMessage(chatId);
  if (game.currentRound >= game.settings.rounds) {
    setTimeout(async () => {
      if (!games[chatId]) return;
      game.state = "finished";
      await updateGameMessage(chatId);
    }, 5000);
  } else {
    setTimeout(async () => {
      if (!games[chatId]) return;
      await startNextRound(chatId);
    }, 5000);
  }
}

async function startNextRound(chatId) {
  const game = games[chatId];
  if (!game) return;
  game.currentRound++;
  game.state = "in_progress";
  await updateGameMessage(chatId);
  game.timerId = setTimeout(async () => {
    if (games[chatId] && games[chatId].state === "in_progress") {
      await endRound(chatId);
    }
  }, game.settings.timer * 1000);
}

// ----------------------------------------------------
// 🎯 توابع و منطق آزمون انفرادی (Quizz)
// ----------------------------------------------------

bot.onText(/^\/quizz\b/, (msg) => {
  try {
    // rate limit check
    if (isRateLimited(msg.from && msg.from.id)) {
      handleRateLimited(msg.from && msg.from.id, msg.chat.id);
      return;
    }
    console.log('/quizz called by', msg.from && msg.from.id);
    const chatId = msg.chat.id;
    const userId = msg.from.id;
    const options = msg.is_topic_message
      ? { message_thread_id: msg.message_thread_id }
      : {};

    const keyboard = [
      [{ text: "🚀 شروع آزمون", callback_data: "quizz_start" }],
      [{ text: "🏆 مشاهده نتایج", callback_data: "quizz_results" }],
    ];

    if (quizSessions[userId] && quizSessions[userId].status === "finished") {
      keyboard.push([
        {
          text: "❌ مشاهده پاسخ‌های اشتباه",
          callback_data: "quizz_show_mistakes",
        },
      ]);
    }

    const messageText = "به بخش آزمون خوش آمدید! یکی از گزینه‌ها را انتخاب کنید:";

    safeSendMessage(chatId, messageText, {
      ...options,
      reply_markup: { inline_keyboard: keyboard },
    });
  } catch (err) {
    console.error('Error in /quizz handler:', err);
    safeSendMessage(msg.chat.id, 'متاسفم، در نمایش منوی آزمون مشکلی پیش آمد.');
  }
});

bot.onText(/^\/cancelquizz$/, (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};

  const session = quizSessions[userId];
  if (!session || session.status !== "in_progress") {
    return safeSendMessage(
      chatId,
      "شما در حال حاضر در هیچ آزمونی نیستید که بتوان آن را لغو کرد.",
      options
    );
  }

  // توقف تایمر و حذف پیام فعلی
  if (session.timer) {
    clearTimeout(session.timer);
  }
  if (session.currentMessageId) {
    bot.deleteMessage(chatId, session.currentMessageId).catch(() => {});
  }

  // به‌روزرسانی وضعیت و اطلاع‌رسانی به کاربر
  session.status = "canceled";
  safeSendMessage(chatId, "✅ آزمون شما با موفقیت لغو شد.", options);
});

async function sendQuizQuestion(chatId, userId) {
  const session = quizSessions[userId];
  if (!session || session.status !== "in_progress") return;

  const currentQuestion = session.questions[session.currentQuestionIndex];
  if (!currentQuestion) {
    return await endQuiz(chatId, userId);
  }

  const questionText = he.decode(currentQuestion.question);
  const options = currentQuestion.options.map((option, index) => [
    { text: he.decode(option), callback_data: `quizz_answer_${index}` },
  ]);

  const messageText = `*سوال ${session.currentQuestionIndex + 1} از ${
    session.questions.length
  }*\n\n*${questionText}*`;

  let questionMessage;
  
  // اگر پیام قبلی وجود دارد، آن را ویرایش کن
  if (session.currentMessageId && session.currentQuestionIndex > 0) {
    const editSuccess = await safeEditMessageText(messageText, {
      chat_id: chatId,
      message_id: session.currentMessageId,
      parse_mode: "Markdown",
      reply_markup: { inline_keyboard: options },
    });
    
    if (editSuccess) {
      questionMessage = { message_id: session.currentMessageId };
    } else {
      // اگر ویرایش ناموفق بود، پیام جدید ارسال کن
      questionMessage = await bot.sendMessage(chatId, messageText, {
        parse_mode: "Markdown",
        reply_markup: { inline_keyboard: options },
        message_thread_id:
          games[chatId] && games[chatId].threadId
            ? games[chatId].threadId
            : undefined,
      });
    }
  } else {
    // برای سوال اول، پیام جدید ارسال کن
    questionMessage = await bot.sendMessage(chatId, messageText, {
      parse_mode: "Markdown",
      reply_markup: { inline_keyboard: options },
      message_thread_id:
        games[chatId] && games[chatId].threadId
          ? games[chatId].threadId
          : undefined,
    });
  }

  session.currentMessageId = questionMessage.message_id;
  session.timer = setTimeout(() => {
    // Timeout logic - check if quiz is still active
    if (!session || session.status !== "in_progress") return;
    
    const questionToSave = session.questions[session.currentQuestionIndex];
    session.answers.push({
      question: questionToSave.question,
      user_answer: "پاسخ نداد",
      correct_answer: questionToSave.correct_answer,
      isCorrect: false,
    });

  safeApiCall(() => bot.deleteMessage(chatId, session.currentMessageId)).catch(() => {});
    session.currentQuestionIndex++;
    sendQuizQuestion(chatId, userId);
  }, 15000);
}

async function endQuiz(chatId, userId) {
  const session = quizSessions[userId];
  if (!session) return;

  const correctCount = session.answers.filter((ans) => ans.isCorrect).length;
  const incorrectCount = session.answers.length - correctCount;

  const finalScoreText = `🎉 *آزمون به پایان رسید!* 🎉\n\nامتیاز نهایی شما: *${correctCount}* از *${session.questions.length}*.\nتعداد پاسخ‌های صحیح: ${correctCount} ✅\nتعداد پاسخ‌های غلط: ${incorrectCount} ❌\n\nبرای مشاهده رتبه‌بندی کلی یا پاسخ‌های اشتباه خود، دوباره از دستور /quizz استفاده کنید.`;

  await safeApiCall(() => bot.sendMessage(chatId, finalScoreText, {
    parse_mode: "Markdown",
    message_thread_id:
      games[chatId] && games[chatId].threadId
        ? games[chatId].threadId
        : undefined,
  }));

  // ذخیره‌سازی اطلاعات در فایل (آسینک)
  session.status = "finished";
  session.score = correctCount; // Update score for ranking
  session.incorrectCount = incorrectCount; // Update incorrect count for consistency
  session.name = quizSessions[userId].name;
  quizSessions[userId] = session;
  // debounced save to reduce disk IO
  saveQuizResultsDebounced(quizSessions);
}

// ----------------------------------------------------
// 🤖 مدیریت دستورات و Callback Query
// ----------------------------------------------------

bot.onText(createCommandRegex('start'), (msg) => {
  const chatId = msg.chat.id;
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};
  safeSendMessage(
    chatId,
    "سلام! برای شروع یک بازی جدید در گروه، از منوی دستورات (/) استفاده کنید.",
    options
  );
});

bot.onText(createCommandRegex('newgame'), async (msg) => {
  try {
    console.log('/newgame called by', msg.from && msg.from.id);
    const options = msg.is_topic_message
      ? { message_thread_id: msg.message_thread_id }
      : {};
    if (msg.chat.type === "private") {
      return bot.sendMessage(
        msg.chat.id,
        "این بازی فقط در گروه‌ها قابل اجراست!",
        options
      );
    }
    await createNewGame(msg.chat.id, msg.from, options);
  } catch (err) {
    console.error('Error handling /newgame:', err);
    safeSendMessage(msg.chat.id, 'متاسفم، در ایجاد بازی مشکلی پیش آمد. بعداً تلاش کنید.');
  }
});

bot.onText(createCommandRegex('cancelgame'), async (msg) => {
  console.log('🎯 /cancelgame called by:', msg.from.id, 'in chat:', msg.chat.id);
  const chatId = msg.chat.id;
  const game = games[chatId];
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};
  
  console.log('🎮 Game state:', game ? game.state : 'no game');
  
  if (!game || game.state === "finished") {
    console.log('❌ No active game to cancel');
    return safeSendMessage(
      chatId,
      "هیچ بازی فعالی برای لغو وجود ندارد.",
      options
    );
  }
  
  try {
    // Check if user is admin using our isAdmin function
    const userIsAdmin = await isAdmin(msg.from.id, chatId);
    console.log('👤 User is admin:', userIsAdmin, 'Creator ID:', game.creatorId, 'User ID:', msg.from.id);
    
    if (msg.from.id === game.creatorId || userIsAdmin) {
      console.log('✅ Cancelling game - user has permission');
      
      // Clear timer if exists
      if (game.timerId) {
        clearTimeout(game.timerId);
        console.log('⏰ Game timer cleared');
      }
      
      // Try to delete the game message
      try {
        await bot.deleteMessage(chatId, game.gameMessageId);
        console.log('🗑️ Game message deleted');
      } catch (deleteError) {
        console.log('⚠️ Could not delete game message:', deleteError.message);
      }
      
      // Remove game from memory
      delete games[chatId];
      console.log('🎮 Game removed from memory');
      
      // Send confirmation message
      await safeSendMessage(
        chatId,
        "✅ بازی فعال توسط سازنده یا ادمین لغو شد.",
        options
      );
      console.log('✅ Cancel confirmation sent');
    } else {
      console.log('❌ User does not have permission to cancel game');
      safeSendMessage(
        chatId,
        "❌ فقط سازنده بازی یا ادمین‌های گروه می‌توانند بازی را لغو کنند.",
        options
      );
    }
  } catch (error) {
    console.error('❌ Error in /cancelgame:', error.message);
    
    // Fallback: if user is creator, allow cancel even if admin check fails
    if (msg.from.id === game.creatorId) {
      console.log('🔄 Fallback: Creator canceling game');
      
      if (game.timerId) {
        clearTimeout(game.timerId);
      }
      
      try {
        await bot.deleteMessage(chatId, game.gameMessageId);
      } catch (deleteError) {
        console.log('⚠️ Could not delete game message in fallback');
      }
      
      delete games[chatId];
      safeSendMessage(chatId, "✅ بازی فعال توسط سازنده لغو شد.", options);
    } else {
      safeSendMessage(
        chatId,
        "❌ خطا در لغو بازی. لطفاً دوباره تلاش کنید.",
        options
      );
    }
  }
});

bot.onText(createCommandRegexWithParams('translate'), async (msg, match) => {
  const chatId = msg.chat.id;
  const wordToTranslate = match[1].trim();
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};
  
  try {
    // First check if it's an idiom in our dictionary
    if (englishIdioms[wordToTranslate.toLowerCase()]) {
      const messageText = `📖 اصطلاح انگلیسی *${he.decode(wordToTranslate)}*:\n\n🇮🇷 *${he.decode(englishIdioms[wordToTranslate.toLowerCase()])}*`;
      await safeSendMessage(chatId, messageText, {
        ...options,
        parse_mode: "Markdown",
      });
      
      // Still send pronunciation audio
      const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURIComponent(
        wordToTranslate
      )}&tl=en`;
      const response = await axios({
        method: "get",
        url: ttsUrl,
        responseType: "stream",
      });
      const caption = `🔊 تلفظ *${he.decode(wordToTranslate)}*`;
      bot.sendAudio(chatId, response.data, {
        ...options,
        caption: caption,
        parse_mode: "Markdown",
      });
    } else if (englishWords[wordToTranslate]) {
      // Check if it's in our English words database
      const messageText = `📖 کلمه انگلیسی *${he.decode(wordToTranslate)}*:\n\n🇮🇷 *${he.decode(englishWords[wordToTranslate])}*`;
      await safeSendMessage(chatId, messageText, {
        ...options,
        parse_mode: "Markdown",
      });
      
      // Still send pronunciation audio
      const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURIComponent(
        wordToTranslate
      )}&tl=en`;
      const response = await axios({
        method: "get",
        url: ttsUrl,
        responseType: "stream",
      });
      const caption = `🔊 تلفظ *${he.decode(wordToTranslate)}*`;
      bot.sendAudio(chatId, response.data, {
        ...options,
        caption: caption,
        parse_mode: "Markdown",
      });
    } else {
      // Use Google Translate for regular words
      const translationResult = await translate(wordToTranslate, { to: "fa" });
      const translatedText = translationResult.text;
      const messageText = `📖 ترجمه *${he.decode(
        wordToTranslate
      )}*:\n\n🇮🇷 *${he.decode(translatedText)}*`;
      await safeSendMessage(chatId, messageText, {
        ...options,
        parse_mode: "Markdown",
      });
      
      const ttsUrl = `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&q=${encodeURIComponent(
        wordToTranslate
      )}&tl=en`;
      const response = await axios({
        method: "get",
        url: ttsUrl,
        responseType: "stream",
      });
      const caption = `🔊 تلفظ *${he.decode(wordToTranslate)}*`;
      bot.sendAudio(chatId, response.data, {
        ...options,
        caption: caption,
        parse_mode: "Markdown",
      });
    }
  } catch (error) {
    console.error("Translate command error:", error.message);
    safeSendMessage(
      chatId,
      "متاسفانه در ترجمه یا دریافت تلفظ مشکلی پیش آمد. لطفاً کلمه انگلیسی را به درستی وارد کنید.",
      options
    );
  }
});

// 📚 دستور /words - نمایش کلمات انگلیسی با صفحه‌بندی
bot.onText(new RegExp(`^\\/words(@\\w+)?(?: (\\d+))?$`), async (msg, match) => {
  const chatId = msg.chat.id;
  const page = parseInt(match[2]) || 1;
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};

  try {
    const wordCount = Object.keys(englishWords).length;
    const wordsPerPage = 10;
    const totalPages = Math.ceil(wordCount / wordsPerPage);
    const startIndex = (page - 1) * wordsPerPage;
    const endIndex = startIndex + wordsPerPage;
    
    if (page > totalPages || page < 1) {
      await safeSendMessage(chatId, `❌ صفحه ${page} وجود ندارد. صفحات موجود: 1 تا ${totalPages}`, options);
      return;
    }
    
    let messageText = `📚 *کلمات انگلیسی* (صفحه ${page} از ${totalPages})\n`;
    messageText += `📊 *تعداد کل:* ${wordCount} کلمه\n\n`;
    
    // نمایش کلمات صفحه فعلی
    const words = Object.keys(englishWords).slice(startIndex, endIndex);
    words.forEach((word, index) => {
      const globalIndex = startIndex + index + 1;
      messageText += `${globalIndex}. *${word}* = ${englishWords[word]}\n`;
    });
    
    // دکمه‌های ناوبری
    const keyboard = [];
    const navRow = [];
    
    if (page > 1) {
      navRow.push({ text: "◀️ قبلی", callback_data: `words_page_${page - 1}` });
    }
    navRow.push({ text: `${page}/${totalPages}`, callback_data: "words_info" });
    if (page < totalPages) {
      navRow.push({ text: "بعدی ▶️", callback_data: `words_page_${page + 1}` });
    }
    
    if (navRow.length > 0) {
      keyboard.push(navRow);
    }
    
    await safeSendMessage(chatId, messageText, {
      ...options,
      parse_mode: "Markdown",
      reply_markup: keyboard.length > 0 ? { inline_keyboard: keyboard } : undefined
    });
  } catch (error) {
    console.error("Words command error:", error.message);
    await safeSendMessage(
      chatId,
      "متاسفانه در نمایش کلمات مشکلی پیش آمد.",
      options
    );
  }
});

// ➕ دستور /addword - اضافه کردن کلمات جدید (فقط ادمین‌ها)
bot.onText(createCommandRegexWithParams('addword'), async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const input = msg.text.replace(/^\/addword\s*/, '').trim();
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};

  try {
    // بررسی مجوز ادمین
    const userIsAdmin = await isAdmin(userId, chatId);
    if (!userIsAdmin) {
      await safeSendMessage(chatId, "❌ فقط ادمین‌ها می‌توانند کلمات جدید اضافه کنند.", options);
      return;
    }

    // تجزیه ورودی برای دریافت چندین کلمه
    const lines = input.split('\n').filter(line => line.trim());
    const addedWords = [];
    let errorCount = 0;
    
    if (lines.length > 10) {
      await safeSendMessage(chatId, "❌ حداکثر 10 کلمه در هر بار می‌توانید اضافه کنید.", options);
      return;
    }
    
    for (const line of lines) {
      let englishWord = '';
      let persianMeaning = '';
      
      // Check for tab-separated format (english\tpersian)
      if (line.includes('\t')) {
        const parts = line.split('\t');
        if (parts.length >= 2) {
          englishWord = parts[0].trim();
          persianMeaning = parts.slice(1).join(' ').trim();
        }
      }
      // Check for equals format (english = persian)
      else if (line.includes('=')) {
        const parts = line.split('=');
        if (parts.length === 2) {
          englishWord = parts[0].trim();
          persianMeaning = parts[1].trim();
        }
      }
      // Check for multiple spaces format (english    persian)
      else if (line.match(/\s{2,}/)) {
        const parts = line.split(/\s{2,}/);
        if (parts.length >= 2) {
          englishWord = parts[0].trim();
          persianMeaning = parts.slice(1).join(' ').trim();
        }
      }
      
      if (englishWord && persianMeaning) {
        englishWords[englishWord.toLowerCase()] = persianMeaning;
        addedWords.push({ english: englishWord, persian: persianMeaning });
      } else {
        errorCount++;
      }
    }
    
    if (addedWords.length === 0) {
      await safeSendMessage(chatId, 
        "❌ فرمت صحیح:\n\n" +
        "**فرمت 1:** /addword کلمه1 = معنی1\nکلمه2 = معنی2\n...\n\n" +
        "**فرمت 2:** /addword کلمه1\tمعنی1\nکلمه2\tمعنی2\n...\n\n" +
        "**فرمت 3:** /addword کلمه1    معنی1\nکلمه2    معنی2\n...\n\n" +
        "مثال:\n/addword Computer = کامپیوتر\nPhone = تلفن\n\n" +
        "یا:\n/addword Purchase\tخرید کردن\nArrange\tترتیب دادن", 
        options
      );
      return;
    }
    
    // ذخیره در فایل
    fs.writeFileSync(
      path.join(__dirname, "english_words.json"),
      JSON.stringify(englishWords, null, 2),
      "utf8"
    );
    
    let messageText = `✅ *${addedWords.length} کلمه جدید توسط ادمین اضافه شد:*\n\n`;
    
    addedWords.forEach((word, index) => {
      messageText += `${index + 1}. *${word.english}* = ${word.persian}\n`;
    });
    
    messageText += `\n📊 تعداد کل کلمات: ${Object.keys(englishWords).length}`;
    
    if (errorCount > 0) {
      messageText += `\n⚠️ ${errorCount} خط در فرمت ورودی`;
    }
    
    await safeSendMessage(chatId, messageText, {
      ...options,
      parse_mode: "Markdown",
    });
  } catch (error) {
    console.error("Addword command error:", error.message);
    await safeSendMessage(
      chatId,
      "متاسفانه در اضافه کردن کلمات مشکلی پیش آمد.",
      options
    );
  }
});

// 🗑️ دستور /deleteword - حذف کلمات (فقط ادمین‌ها)
bot.onText(/^\/deleteword (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const input = match[1].trim();
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};

  try {
    // بررسی مجوز ادمین
    const userIsAdmin = await isAdmin(userId, chatId);
    if (!userIsAdmin) {
      await safeSendMessage(chatId, "❌ فقط ادمین‌ها می‌توانند کلمات را حذف کنند.", options);
      return;
    }

    // تجزیه ورودی برای دریافت چندین کلمه
    const wordsToDelete = input.split('\n').filter(word => word.trim());
    const deletedWords = [];
    const notFoundWords = [];
    
    if (wordsToDelete.length > 10) {
      await safeSendMessage(chatId, "❌ حداکثر 10 کلمه در هر بار می‌توانید حذف کنید.", options);
      return;
    }
    
    for (const word of wordsToDelete) {
      const trimmedWord = word.trim();
      if (trimmedWord) {
        if (englishWords[trimmedWord]) {
          const meaning = englishWords[trimmedWord];
          delete englishWords[trimmedWord];
          deletedWords.push({ english: trimmedWord, persian: meaning });
        } else {
          notFoundWords.push(trimmedWord);
        }
      }
    }
    
    if (deletedWords.length === 0 && notFoundWords.length === 0) {
      await safeSendMessage(chatId, 
        "❌ فرمت صحیح: /deleteword کلمه1\nکلمه2\n...\n\nمثال:\n/deleteword Computer\nPhone", 
        options
      );
      return;
    }
    
    // ذخیره در فایل
    fs.writeFileSync(
      path.join(__dirname, "english_words.json"),
      JSON.stringify(englishWords, null, 2),
      "utf8"
    );
    
    let messageText = "";
    
    if (deletedWords.length > 0) {
      messageText += `🗑️ *${deletedWords.length} کلمه توسط ادمین حذف شد:*\n\n`;
      deletedWords.forEach((word, index) => {
        messageText += `${index + 1}. *${word.english}* = ${word.persian}\n`;
      });
      messageText += `\n📊 تعداد کل کلمات: ${Object.keys(englishWords).length}\n`;
    }
    
    if (notFoundWords.length > 0) {
      messageText += `\n⚠️ کلمات زیر یافت نشدند:\n`;
      notFoundWords.forEach((word, index) => {
        messageText += `${index + 1}. *${word}*\n`;
      });
    }
    
    await safeSendMessage(chatId, messageText, {
      ...options,
      parse_mode: "Markdown",
    });
  } catch (error) {
    console.error("Deleteword command error:", error.message);
    await safeSendMessage(
      chatId,
      "متاسفانه در حذف کلمات مشکلی پیش آمد.",
      options
    );
  }
});

// 🎵 دستور /song - جستجو و نمایش متن آهنگ از اینترنت
bot.onText(createCommandRegexWithParams('song'), async (msg, match) => {
  const chatId = msg.chat.id;
  const songName = match[1].trim();
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};

  try {
    // ارسال پیام در حال جستجو
    const searchingMsg = await safeSendMessage(chatId, 
      `🔍 در حال جستجوی آهنگ "${songName}" از اینترنت...\n⏳ لطفاً صبر کنید...`, 
      options
    );

    // جستجوی آنلاین - ابتدا API های رایگان، سپس Genius، سپس جایگزین‌ها
    let songData = null;
    
    // ابتدا API های رایگان را امتحان کن
    try {
      console.log('🎵 Trying free APIs first...');
      songData = await searchSongAlternative(songName);
    } catch (error) {
      console.log('❌ Free APIs failed:', error.message);
    }
    
    // اگر API های رایگان موفق نبودند، Genius را امتحان کن
    if (!songData) {
      console.log('🔄 Free APIs failed, trying Genius...');
      songData = await searchSongOnline(songName);
    }

    if (!songData) {
      // اگر آنلاین پیدا نشد، از پایگاه داده محلی استفاده کن
      const foundSong = Object.keys(songs).find(song => 
        song.toLowerCase().includes(songName.toLowerCase()) ||
        songName.toLowerCase().includes(song.toLowerCase())
      );

      if (foundSong) {
        const song = songs[foundSong];
        let messageText = `🎵 *${foundSong}* (از پایگاه داده محلی)\n`;
        messageText += `🎤 *هنرمند:* ${song.artist}\n\n`;

        // نمایش متن آهنگ با ترجمه
        for (let i = 0; i < song.english.length; i++) {
          messageText += `🔤 ${song.english[i]}\n`;
          messageText += `🇮🇷 ${song.persian[i]}\n\n`;
        }

        await safeSendMessage(chatId, messageText, {
          ...options,
          parse_mode: "Markdown",
        });
      } else {
        await safeSendMessage(chatId, 
          `❌ آهنگ "${songName}" در اینترنت یا پایگاه داده محلی یافت نشد.\n\n💡 *نکات:*\n• نام آهنگ را دقیق‌تر وارد کنید\n• نام هنرمند را نیز اضافه کنید\n• از آهنگ‌های معروف استفاده کنید\n\n📝 *مثال:*\n/song Imagine John Lennon`, 
          {
            ...options,
            parse_mode: "Markdown",
          }
        );
      }
      return;
    }

    // حذف پیام جستجو
    if (searchingMsg) {
      try {
        await bot.deleteMessage(chatId, searchingMsg.message_id);
      } catch (error) {
        console.log('Could not delete searching message');
      }
    }

    // ترجمه متن آهنگ
    const translatedLyrics = await translateLyrics(songData.lyrics);

    let messageText = `🎵 *${songData.title}*\n`;
    messageText += `🎤 *هنرمند:* ${songData.artist}\n`;
    messageText += `🌐 *منبع:* [Genius.com](${songData.url})\n\n`;

    // نمایش متن آهنگ با ترجمه
    for (let i = 0; i < songData.lyrics.length; i++) {
      if (songData.lyrics[i].trim()) {
        messageText += `🔤 ${songData.lyrics[i]}\n`;
        messageText += `🇮🇷 ${translatedLyrics[i]}\n\n`;
      }
    }

    // اگر متن طولانی باشد، آن را تقسیم کنیم
    if (messageText.length > 4000) {
      const parts = [];
      let currentPart = `🎵 *${songData.title}*\n🎤 *هنرمند:* ${songData.artist}\n🌐 *منبع:* [Genius.com](${songData.url})\n\n`;
      
      for (let i = 0; i < songData.lyrics.length; i++) {
        if (songData.lyrics[i].trim()) {
          const line = `🔤 ${songData.lyrics[i]}\n🇮🇷 ${translatedLyrics[i]}\n\n`;
          
          if (currentPart.length + line.length > 4000) {
            parts.push(currentPart);
            currentPart = line;
          } else {
            currentPart += line;
          }
        }
      }
      
      if (currentPart.trim()) {
        parts.push(currentPart);
      }

      // ارسال قسمت اول
      await safeSendMessage(chatId, parts[0], {
        ...options,
        parse_mode: "Markdown",
      });

      // ارسال بقیه قسمت‌ها با تأخیر
      for (let i = 1; i < parts.length; i++) {
        setTimeout(async () => {
          await safeSendMessage(chatId, parts[i], {
            ...options,
            parse_mode: "Markdown",
          });
        }, i * 1000);
      }
    } else {
      await safeSendMessage(chatId, messageText, {
        ...options,
        parse_mode: "Markdown",
      });
    }
  } catch (error) {
    console.error("Song command error:", error.message);
    await safeSendMessage(chatId, 
      `❌ متاسفانه در جستجوی آهنگ مشکلی پیش آمد.\n\n💡 *علل احتمالی:*\n• مشکل اتصال به اینترنت\n• آهنگ در سایت‌های موسیقی موجود نیست\n• نام آهنگ نادرست است\n\n📝 *لطفاً دوباره تلاش کنید*`, 
      options
    );
  }
});

// 🎵 دستور /songs - راهنمای جستجوی آهنگ‌ها
bot.onText(createCommandRegex('songs'), async (msg) => {
  const chatId = msg.chat.id;
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};

  try {
    const localSongCount = Object.keys(songs).length;
    
    let messageText = `🎵 *راهنمای جستجوی آهنگ‌ها*\n\n`;
    messageText += `🌐 *جستجوی آنلاین:*\n`;
    messageText += `ربات از سایت Genius.com برای جستجوی آهنگ‌ها استفاده می‌کند.\n\n`;
    
    messageText += `📚 *آهنگ‌های محلی موجود* (${localSongCount} آهنگ):\n`;
    
    if (localSongCount > 0) {
      Object.keys(songs).forEach((songName, index) => {
        const song = songs[songName];
        messageText += `${index + 1}. **${songName}**\n`;
        messageText += `   🎤 ${song.artist}\n\n`;
      });
    } else {
      messageText += `هیچ آهنگ محلی موجود نیست.\n\n`;
    }

    messageText += `💡 *نحوه استفاده:*\n`;
    messageText += `/song [نام آهنگ]\n`;
    messageText += `/song [نام هنرمند + نام آهنگ]\n\n`;
    
    messageText += `📝 *مثال‌ها:*\n`;
    messageText += `/song Imagine\n`;
    messageText += `/song John Lennon Imagine\n`;
    messageText += `/song Bohemian Rhapsody Queen\n`;
    messageText += `/song Shape of You Ed Sheeran\n\n`;
    
    messageText += `⚠️ *نکات مهم:*\n`;
    messageText += `• جستجو از اینترنت انجام می‌شود\n`;
    messageText += `• ترجمه خودکار با Google Translate\n`;
    messageText += `• در صورت عدم دسترسی، از آهنگ‌های محلی استفاده می‌شود\n`;
    messageText += `• آهنگ‌های معروف و محبوب بهتر پیدا می‌شوند`;

    await safeSendMessage(chatId, messageText, {
      ...options,
      parse_mode: "Markdown",
    });
  } catch (error) {
    console.error("Songs command error:", error.message);
    await safeSendMessage(chatId, "متاسفانه در نمایش راهنما مشکلی پیش آمد.", options);
  }
});

// 📖 دستور /help - راهنمای جامع ربات
bot.onText(createCommandRegex('help'), async (msg) => {
  const chatId = msg.chat.id;
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};

  try {
    const userIsAdmin = await isAdmin(msg.from.id, chatId);
    const wordCount = Object.keys(englishWords).length;
    const idiomCount = Object.keys(englishIdioms).length;
    const songCount = Object.keys(songs).length;
    const categoryCount = Object.keys(allCategories).length;

    let messageText = `🤖 *راهنمای جامع ربات کوییز*\n\n`;
    
    messageText += `📊 *آمار ربات:*\n`;
    messageText += `• دسته‌بندی‌های بازی: ${categoryCount}\n`;
    messageText += `• کلمات انگلیسی: ${wordCount}\n`;
    messageText += `• اصطلاحات انگلیسی: ${idiomCount}\n`;
    messageText += `• آهنگ‌ها: ${songCount}\n\n`;

    messageText += `🎮 *دستورات بازی:*\n`;
    messageText += `/newgame - شروع بازی گروهی\n`;
    messageText += `/cancelgame - لغو بازی فعال\n`;
    messageText += `/quizz - آزمون انفرادی\n`;
    messageText += `/cancelquizz - لغو آزمون\n\n`;

    messageText += `📚 *دستورات یادگیری:*\n`;
    messageText += `/translate [کلمه] - ترجمه کلمه انگلیسی\n`;
    messageText += `/words [صفحه] - لیست کلمات با صفحه‌بندی\n`;
    messageText += `/idioms - لیست اصطلاحات انگلیسی\n`;
    messageText += `/randomword - کلمه تصادفی انگلیسی\n`;
    messageText += `/search [کلمه] - جستجو در کلمات\n\n`;

    messageText += `🎵 *دستورات موسیقی:*\n`;
    messageText += `/song [نام آهنگ] - جستجو و نمایش متن آهنگ از اینترنت\n`;
    messageText += `/songs - راهنمای جستجوی آهنگ‌ها\n\n`;

    if (userIsAdmin) {
      messageText += `🔐 *دستورات ادمین:*\n`;
      messageText += `/addword - اضافه کردن کلمات جدید\n`;
      messageText += `/deleteword - حذف کلمات\n`;
      messageText += `/backup - پشتیبان‌گیری از کلمات\n`;
      messageText += `/restore - بازیابی کلمات\n`;
      messageText += `/setadmin [آیدی‌ها] - تنظیم ادمین‌ها\n`;
      messageText += `/botstatus - وضعیت ربات\n\n`;
    }

    messageText += `🛠️ *دستورات کاربردی:*\n`;
    messageText += `/help - این راهنما\n`;
    messageText += `/stats - آمار تفصیلی ربات\n`;
    messageText += `/ping - تست اتصال\n\n`;

    messageText += `💡 *نکات مهم:*\n`;
    messageText += `• برای بازی گروهی از /newgame استفاده کنید\n`;
    messageText += `• کلمات با /translate ترجمه می‌شوند\n`;
    messageText += `• دستورات ادمین فقط برای ادمین‌ها\n`;
    messageText += `• از صفحه‌بندی برای دیدن همه کلمات استفاده کنید\n\n`;

    messageText += `🎯 *مثال‌های کاربردی:*\n`;
    messageText += `/translate computer\n`;
    messageText += `/words 1\n`;
    messageText += `/search phone\n`;
    messageText += `/randomword\n`;

    await safeSendMessage(chatId, messageText, {
      ...options,
      parse_mode: "Markdown",
    });
  } catch (error) {
    console.error("Help command error:", error.message);
    await safeSendMessage(chatId, "متاسفانه در نمایش راهنما مشکلی پیش آمد.", options);
  }
});

// 📊 دستور /stats - آمار تفصیلی ربات
bot.onText(/^\/stats$/, async (msg) => {
  const chatId = msg.chat.id;
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};

  try {
    const wordCount = Object.keys(englishWords).length;
    const idiomCount = Object.keys(englishIdioms).length;
    const songCount = Object.keys(songs).length;
    const categoryCount = Object.keys(allCategories).length;
    const activeGames = Object.keys(games).length;
    const activeQuizSessions = Object.keys(quizSessions).length;

    // محاسبه آمار دسته‌بندی‌ها
    let categoryStats = "";
    for (const [key, name] of Object.entries(allCategories)) {
      const questionCount = questionDecks[key]?.deck?.length || 0;
      categoryStats += `• ${name}: ${questionCount} سوال\n`;
    }

    let messageText = `📊 *آمار تفصیلی ربات*\n\n`;
    
    messageText += `🎮 *بازی‌ها:*\n`;
    messageText += `• بازی‌های فعال: ${activeGames}\n`;
    messageText += `• آزمون‌های فعال: ${activeQuizSessions}\n`;
    messageText += `• دسته‌بندی‌های بازی: ${categoryCount}\n\n`;

    messageText += `📚 *دسته‌بندی‌ها:*\n`;
    messageText += categoryStats + `\n`;

    messageText += `🔤 *کلمات و اصطلاحات:*\n`;
    messageText += `• کلمات انگلیسی: ${wordCount}\n`;
    messageText += `• اصطلاحات انگلیسی: ${idiomCount}\n`;
    messageText += `• آهنگ‌ها: ${songCount}\n\n`;

    messageText += `⏰ *وضعیت سیستم:*\n`;
    messageText += `• زمان راه‌اندازی: ${new Date().toLocaleString('fa-IR')}\n`;
    messageText += `• وضعیت: آنلاین ✅\n`;

    await safeSendMessage(chatId, messageText, {
      ...options,
      parse_mode: "Markdown",
    });
  } catch (error) {
    console.error("Stats command error:", error.message);
    await safeSendMessage(chatId, "متاسفانه در نمایش آمار مشکلی پیش آمد.", options);
  }
});

// 🔍 دستور /search - جستجو در کلمات
bot.onText(/^\/search (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const searchTerm = match[1].trim().toLowerCase();
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};

  try {
    const results = [];
    
    // جستجو در کلمات انگلیسی
    for (const [word, meaning] of Object.entries(englishWords)) {
      if (word.toLowerCase().includes(searchTerm) || 
          meaning.toLowerCase().includes(searchTerm)) {
        results.push({ type: 'word', english: word, persian: meaning });
      }
    }

    // جستجو در اصطلاحات
    for (const [idiom, meaning] of Object.entries(englishIdioms)) {
      if (idiom.toLowerCase().includes(searchTerm) || 
          meaning.toLowerCase().includes(searchTerm)) {
        results.push({ type: 'idiom', english: idiom, persian: meaning });
      }
    }

    // جستجو در آهنگ‌ها
    for (const [songName, song] of Object.entries(songs)) {
      if (songName.toLowerCase().includes(searchTerm) || 
          song.artist.toLowerCase().includes(searchTerm)) {
        results.push({ 
          type: 'song', 
          english: `${songName} - ${song.artist}`, 
          persian: 'آهنگ موسیقی' 
        });
      }
    }

    if (results.length === 0) {
      await safeSendMessage(chatId, 
        `❌ هیچ نتیجه‌ای برای "${searchTerm}" یافت نشد.\n\n💡 پیشنهادات:\n• املای کلمه را بررسی کنید\n• کلمات کوتاه‌تر امتحان کنید\n• از /words برای دیدن همه کلمات استفاده کنید`, 
        options
      );
      return;
    }

    // محدود کردن نتایج به 10 مورد
    const limitedResults = results.slice(0, 10);
    
    let messageText = `🔍 *نتایج جستجو برای "${searchTerm}"* (${results.length} نتیجه)\n\n`;
    
    limitedResults.forEach((result, index) => {
      let icon = '🔤';
      if (result.type === 'idiom') icon = '📖';
      else if (result.type === 'song') icon = '🎵';
      
      messageText += `${icon} ${index + 1}. *${result.english}*\n   ${result.persian}\n\n`;
    });

    if (results.length > 10) {
      messageText += `... و ${results.length - 10} نتیجه دیگر\n\n`;
    }

    messageText += `💡 برای ترجمه کامل از /translate استفاده کنید.`;

    await safeSendMessage(chatId, messageText, {
      ...options,
      parse_mode: "Markdown",
    });
  } catch (error) {
    console.error("Search command error:", error.message);
    await safeSendMessage(chatId, "متاسفانه در جستجو مشکلی پیش آمد.", options);
  }
});

// 🎲 دستور /randomword - کلمه تصادفی انگلیسی
bot.onText(/^\/randomword$/, async (msg) => {
  const chatId = msg.chat.id;
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};

  try {
    const words = Object.keys(englishWords);
    const idioms = Object.keys(englishIdioms);
    const songsList = Object.keys(songs);
    const allItems = [
      ...words.map(word => ({ type: 'word', english: word, persian: englishWords[word] })),
      ...idioms.map(idiom => ({ type: 'idiom', english: idiom, persian: englishIdioms[idiom] })),
      ...songsList.map(song => ({ type: 'song', english: song, persian: songs[song].artist }))
    ];

    if (allItems.length === 0) {
      await safeSendMessage(chatId, "❌ هیچ کلمه یا اصطلاحی در پایگاه داده وجود ندارد.", options);
      return;
    }

    const randomItem = allItems[Math.floor(Math.random() * allItems.length)];
    let icon = '🔤';
    let typeText = 'کلمه';
    
    if (randomItem.type === 'idiom') {
      icon = '📖';
      typeText = 'اصطلاح';
    } else if (randomItem.type === 'song') {
      icon = '🎵';
      typeText = 'آهنگ';
    }

    let messageText = `${icon} *${typeText} تصادفی:*\n\n`;
    messageText += `🔤 *${randomItem.english}*\n`;
    messageText += `🇮🇷 ${randomItem.persian}\n\n`;
    
    if (randomItem.type === 'song') {
      messageText += `💡 برای دیدن متن آهنگ از /song ${randomItem.english} استفاده کنید.`;
    } else {
      messageText += `💡 برای تلفظ از /translate ${randomItem.english} استفاده کنید.`;
    }

    await safeSendMessage(chatId, messageText, {
      ...options,
      parse_mode: "Markdown",
    });
  } catch (error) {
    console.error("Randomword command error:", error.message);
    await safeSendMessage(chatId, "متاسفانه در انتخاب کلمه تصادفی مشکلی پیش آمد.", options);
  }
});

// 💾 دستور /backup - پشتیبان‌گیری از کلمات (ادمین)
bot.onText(/^\/backup$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};

  try {
    // بررسی مجوز ادمین
    const userIsAdmin = await isAdmin(userId, chatId);
    if (!userIsAdmin) {
      await safeSendMessage(chatId, "❌ فقط ادمین‌ها می‌توانند پشتیبان‌گیری کنند.", options);
      return;
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupData = {
      timestamp: new Date().toISOString(),
      words: englishWords,
      idioms: englishIdioms,
      version: "1.0"
    };

    const backupFileName = `backup_${timestamp}.json`;
    const backupPath = path.join(__dirname, backupFileName);
    
    fs.writeFileSync(backupPath, JSON.stringify(backupData, null, 2), 'utf8');

    let messageText = `💾 *پشتیبان‌گیری موفقیت‌آمیز*\n\n`;
    messageText += `📁 فایل: \`${backupFileName}\`\n`;
    messageText += `📊 کلمات: ${Object.keys(englishWords).length}\n`;
    messageText += `📖 اصطلاحات: ${Object.keys(englishIdioms).length}\n`;
    messageText += `⏰ زمان: ${new Date().toLocaleString('fa-IR')}\n\n`;
    messageText += `💡 برای بازیابی از /restore ${backupFileName} استفاده کنید.`;

    await safeSendMessage(chatId, messageText, {
      ...options,
      parse_mode: "Markdown",
    });
  } catch (error) {
    console.error("Backup command error:", error.message);
    await safeSendMessage(chatId, "متاسفانه در پشتیبان‌گیری مشکلی پیش آمد.", options);
  }
});

// 🔄 دستور /restore - بازیابی کلمات (ادمین)
bot.onText(/^\/restore (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const backupFileName = match[1].trim();
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};

  try {
    // بررسی مجوز ادمین
    const userIsAdmin = await isAdmin(userId, chatId);
    if (!userIsAdmin) {
      await safeSendMessage(chatId, "❌ فقط ادمین‌ها می‌توانند بازیابی کنند.", options);
      return;
    }

    const backupPath = path.join(__dirname, backupFileName);
    
    if (!fs.existsSync(backupPath)) {
      await safeSendMessage(chatId, `❌ فایل پشتیبان \`${backupFileName}\` یافت نشد.`, {
        ...options,
        parse_mode: "Markdown",
      });
      return;
    }

    const backupData = JSON.parse(fs.readFileSync(backupPath, 'utf8'));
    
    // بررسی فرمت فایل پشتیبان
    if (!backupData.words || !backupData.idioms) {
      await safeSendMessage(chatId, "❌ فایل پشتیبان معتبر نیست.", options);
      return;
    }

    // پشتیبان‌گیری از داده‌های فعلی قبل از بازیابی
    const currentBackup = {
      words: englishWords,
      idioms: englishIdioms,
      timestamp: new Date().toISOString()
    };
    
    const emergencyBackupName = `emergency_backup_${Date.now()}.json`;
    fs.writeFileSync(
      path.join(__dirname, emergencyBackupName), 
      JSON.stringify(currentBackup, null, 2), 
      'utf8'
    );

    // بازیابی داده‌ها
    Object.assign(englishWords, backupData.words);
    Object.assign(englishIdioms, backupData.idioms);

    // ذخیره در فایل‌ها
    fs.writeFileSync(
      path.join(__dirname, "english_words.json"),
      JSON.stringify(englishWords, null, 2),
      "utf8"
    );

    let messageText = `🔄 *بازیابی موفقیت‌آمیز*\n\n`;
    messageText += `📁 فایل: \`${backupFileName}\`\n`;
    messageText += `📊 کلمات بازیابی شده: ${Object.keys(backupData.words).length}\n`;
    messageText += `📖 اصطلاحات بازیابی شده: ${Object.keys(backupData.idioms).length}\n`;
    messageText += `⏰ زمان پشتیبان: ${new Date(backupData.timestamp).toLocaleString('fa-IR')}\n\n`;
    messageText += `🛡️ پشتیبان اضطراری: \`${emergencyBackupName}\``;

    await safeSendMessage(chatId, messageText, {
      ...options,
      parse_mode: "Markdown",
    });
  } catch (error) {
    console.error("Restore command error:", error.message);
    await safeSendMessage(chatId, "متاسفانه در بازیابی مشکلی پیش آمد.", options);
  }
});

// Add command to list available idioms
bot.onText(/^\/idioms$/, (msg) => {
  const chatId = msg.chat.id;
  const options = msg.is_topic_message
    ? { message_thread_id: msg.message_thread_id }
    : {};
  
  const idiomsList = Object.keys(englishIdioms).slice(0, 20); // Show first 20 idioms
  const messageText = `📚 *لیست اصطلاحات انگلیسی موجود:*\n\n${idiomsList.map((idiom, index) => 
    `${index + 1}. \`${idiom}\``
  ).join('\n')}\n\n💡 *نحوه استفاده:*\n/translate [اصطلاح]\n\n📝 *مثال:*\n/translate break the ice`;
  
  safeSendMessage(chatId, messageText, {
    ...options,
    parse_mode: "Markdown",
  });
});

// Admin commands for warning management
// Optimized warning commands
bot.onText(/^\/warn$/, async (msg) => {
  if (!msg.reply_to_message) return;
  
  const chatId = msg.chat.id;
  const adminId = msg.from.id;
  const targetUserId = msg.reply_to_message.from.id;
  const targetUserName = msg.reply_to_message.from.first_name || 'User';

  if (!(await isAdmin(adminId, chatId))) return;

  try {
    const totalWarnings = await addWarning(targetUserId, chatId, adminId);
    let message = `⚠️ اخطار به ${targetUserName}\n📊 تعداد اخطارها: ${totalWarnings}/3`;
    
    if (totalWarnings >= 3) {
      message += `\n🚫 کاربر ${targetUserName} به ۳ اخطار رسید. اقدام دستی لازم است.`;
    } else {
      message += `\n⚠️ ${3 - totalWarnings} اخطار تا رسیدن به ۳ اخطار باقی مانده.`;
    }

    await safeSendMessage(chatId, message);
  } catch (error) {
    console.error('Warn error:', error);
    await safeSendMessage(chatId, `❌ خطا در پردازش اخطار: ${error.message}`);
  }
});

bot.onText(/^\/warnuser (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const adminId = msg.from.id;
  const targetUsername = match[1].replace('@', '').trim();

  if (!(await isAdmin(adminId, chatId))) return;

  try {
    let targetUser = null;
    
    // Try direct username lookup first (fastest)
    try {
      const chatMember = await bot.getChatMember(chatId, `@${targetUsername}`);
      targetUser = chatMember.user;
    } catch (e) {
      // Fallback: try numeric ID if it's numeric
      if (/^\d+$/.test(targetUsername)) {
        try {
          const chatMember = await bot.getChatMember(chatId, parseInt(targetUsername));
          targetUser = chatMember.user;
        } catch (e3) {}
      }
    }

    if (!targetUser) {
      await safeSendMessage(chatId, `❌ کاربر ${targetUsername} پیدا نشد.`);
      return;
    }

    const totalWarnings = await addWarning(targetUser.id, chatId, adminId);
    let message = `⚠️ اخطار به ${targetUser.first_name}\n📊 تعداد اخطارها: ${totalWarnings}/3`;
    
    if (totalWarnings >= 3) {
      message += `\n🚫 کاربر ${targetUser.first_name} به ۳ اخطار رسید. اقدام دستی لازم است.`;
    } else {
      message += `\n⚠️ ${3 - totalWarnings} اخطار تا رسیدن به ۳ اخطار باقی مانده.`;
    }

    await safeSendMessage(chatId, message);
  } catch (error) {
    console.error('Warnuser error:', error);
    await safeSendMessage(chatId, `❌ خطا در اخطار دادن: ${error.message}`);
  }
});

bot.onText(/^\/unwarn$/, async (msg) => {
  if (!msg.reply_to_message) return;
  
  const chatId = msg.chat.id;
  const adminId = msg.from.id;
  const targetUserId = msg.reply_to_message.from.id;
  const targetUserName = msg.reply_to_message.from.first_name || 'User';

  if (!(await isAdmin(adminId, chatId))) return;

  try {
    const totalWarnings = await removeWarning(targetUserId, chatId, adminId);
    await safeSendMessage(chatId, `✅ اخطار از ${targetUserName} حذف شد\n📊 تعداد اخطارها: ${totalWarnings}/3`);
  } catch (error) {
    console.error('Unwarn error:', error);
    await safeSendMessage(chatId, `❌ خطا در حذف اخطار: ${error.message}`);
  }
});

bot.onText(/^\/warnings$/, async (msg) => {
  if (!msg.reply_to_message) return;
  
  const chatId = msg.chat.id;
  const adminId = msg.from.id;
  const targetUserId = msg.reply_to_message.from.id;
  const targetUserName = msg.reply_to_message.from.first_name || 'User';

  if (!(await isAdmin(adminId, chatId))) return;

  try {
    const userKey = `${chatId}_${targetUserId}`;
    const userWarnings = warnings[userKey];
    
    if (!userWarnings || userWarnings.totalWarnings === 0) {
      await safeSendMessage(chatId, `✅ ${targetUserName} هیچ اخطاری ندارد.`);
      return;
    }

    let message = `📊 اخطارهای ${targetUserName}:\n🔢 مجموع: ${userWarnings.totalWarnings}/3\n\n📝 تاریخچه:\n`;
    userWarnings.warnings.forEach((warning, index) => {
      const date = new Date(warning.timestamp).toLocaleString('fa-IR');
      message += `${index + 1}. ${warning.reason} - ${date}\n`;
    });

    await safeSendMessage(chatId, message);
  } catch (error) {
    console.error('Warnings error:', error);
    await safeSendMessage(chatId, `❌ خطا در دریافت اخطارها: ${error.message}`);
  }
});

bot.onText(/^\/banuser$/, async (msg) => {
  if (!msg.reply_to_message) return;
  
  const chatId = msg.chat.id;
  const adminId = msg.from.id;
  const targetUserId = msg.reply_to_message.from.id;
  const targetUserName = msg.reply_to_message.from.first_name || 'User';

  if (!(await isAdmin(adminId, chatId))) return;

  try {
    // Check if user has 3 or more warnings
    const userKey = `${chatId}_${targetUserId}`;
    const userWarnings = warnings[userKey];
    
    if (!userWarnings || userWarnings.totalWarnings < 3) {
      await safeSendMessage(chatId, `❌ کاربر ${targetUserName} هنوز ۳ اخطار ندارد. اخطارهای فعلی: ${userWarnings ? userWarnings.totalWarnings : 0}/3`);
      return;
    }

    // Try to ban the user
    try {
      await bot.banChatMember(chatId, targetUserId);
      await safeSendMessage(chatId, `🚫 کاربر ${targetUserName} به دلیل رسیدن به ۳ اخطار بن شد.`);
    } catch (banError) {
      console.error('Ban error:', banError.message);
      await safeSendMessage(chatId, `❌ نتوانستیم کاربر ${targetUserName} را بن کنیم. ربات ممکن است دسترسی بن کردن نداشته باشد.`);
    }
  } catch (error) {
    console.error('Banuser error:', error);
    await safeSendMessage(chatId, `❌ خطا در پردازش بن: ${error.message}`);
  }
});

bot.onText(/^\/warnhelp$/, async (msg) => {
  const chatId = msg.chat.id;
  const adminId = msg.from.id;

  if (!(await isAdmin(adminId, chatId))) return;

  const helpMessage = `🛡️ **دستورات سیستم اخطار:**

**دستورات اصلی:**
• \`/warn\` - ریپلای روی پیام برای اخطار دادن
• \`/warnuser @username\` - اخطار دادن با نام کاربری
• \`/unwarn\` - ریپلای برای حذف اخطار
• \`/warnings\` - ریپلای برای مشاهده تاریخچه اخطارها

**دستور بن:**
• \`/banuser\` - ریپلای برای بن کردن کاربر (نیاز به ۳+ اخطار)

**نحوه کار:**
• کاربران اخطار دریافت می‌کنند (۱/۳، ۲/۳، ۳/۳)
• در ۳ اخطار، بن دستی لازم است
• از \`/banuser\` برای بن کردن کاربران با ۳+ اخطار استفاده کنید
• ربات برای \`/banuser\` نیاز به دسترسی بن دارد`;

  await safeSendMessage(chatId, helpMessage);
});

bot.onText(/^\/clearcache$/, async (msg) => {
  const chatId = msg.chat.id;
  const adminId = msg.from.id;

  if (!(await isAdmin(adminId, chatId))) return;

  clearAdminCache();
  await safeSendMessage(chatId, `✅ کش ادمین‌ها پاک شد.`);
});

// Test command to check admin status
bot.onText(/^\/testadmin$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  try {
    const isUserAdmin = await isAdmin(userId, chatId);
    const adminIds = process.env.ADMIN_IDS ? process.env.ADMIN_IDS.split(',').map(id => parseInt(id.trim())) : [];
    
    let message = `🔍 *تست وضعیت ادمین:*\n\n`;
    message += `👤 شناسه کاربری شما: \`${userId}\`\n`;
    message += `✅ وضعیت ادمین: ${isUserAdmin ? '✅ ادمین هستید' : '❌ ادمین نیستید'}\n`;
    message += `⚙️ ADMIN_IDS تنظیم شده: ${adminIds.length > 0 ? '✅ بله' : '❌ خیر'}\n`;
    
    if (adminIds.length > 0) {
      message += `📝 شناسه‌های ادمین: \`${adminIds.join(', ')}\`\n`;
    } else {
      message += `\n⚠️ *راه حل:*\n`;
      message += `1. فایل \`.env\` ایجاد کنید\n`;
      message += `2. خط زیر را اضافه کنید:\n`;
      message += `\`ADMIN_IDS=${userId}\`\n`;
      message += `3. ربات را مجدداً راه‌اندازی کنید`;
    }
    
    await safeSendMessage(chatId, message, { parse_mode: 'Markdown' });
  } catch (error) {
    console.error('Test admin error:', error);
    await safeSendMessage(chatId, `❌ خطا در تست ادمین: ${error.message}`);
  }
});

// Command to set admin IDs temporarily
bot.onText(/^\/setadmin (.+)$/, async (msg, match) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  // Only allow group admins to use this command
  try {
    const chatMember = await bot.getChatMember(chatId, userId);
    if (chatMember.status !== 'administrator' && chatMember.status !== 'creator') {
      await safeSendMessage(chatId, '❌ فقط ادمین‌های گروه می‌توانند از این دستور استفاده کنند.');
      return;
    }
  } catch (error) {
    await safeSendMessage(chatId, '❌ خطا در بررسی وضعیت ادمین.');
    return;
  }
  
  const adminIds = match[1].split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));
  
  if (adminIds.length === 0) {
    await safeSendMessage(chatId, '❌ لطفاً شناسه‌های معتبر وارد کنید.\nمثال: `/setadmin 123456789,987654321`');
    return;
  }
  
  // Set environment variable temporarily
  process.env.ADMIN_IDS = adminIds.join(',');
  
  // Clear admin cache
  clearAdminCache();
  
  await safeSendMessage(chatId, `✅ شناسه‌های ادمین تنظیم شد:\n\`${adminIds.join(', ')}\`\n\n⚠️ این تنظیمات موقت است و با راه‌اندازی مجدد ربات پاک می‌شود.`, { parse_mode: 'Markdown' });
});

// Simple warning command for testing (without admin check)
bot.onText(/^\/testwarn$/, async (msg) => {
  if (!msg.reply_to_message) {
    await safeSendMessage(msg.chat.id, '❌ لطفاً روی پیام کاربر مورد نظر ریپلای کنید.');
    return;
  }
  
  const chatId = msg.chat.id;
  const adminId = msg.from.id;
  const targetUserId = msg.reply_to_message.from.id;
  const targetUserName = msg.reply_to_message.from.first_name || 'User';

  try {
    const totalWarnings = await addWarning(targetUserId, chatId, adminId, 'اخطار تست');
    let message = `⚠️ اخطار تست به ${targetUserName}\n📊 تعداد اخطارها: ${totalWarnings}/3`;
    
    if (totalWarnings >= 3) {
      message += `\n🚫 کاربر ${targetUserName} به ۳ اخطار رسید.`;
    } else {
      message += `\n⚠️ ${3 - totalWarnings} اخطار تا رسیدن به ۳ اخطار باقی مانده.`;
    }

    await safeSendMessage(chatId, message);
  } catch (error) {
    console.error('Test warn error:', error);
    await safeSendMessage(chatId, `❌ خطا در اخطار تست: ${error.message}`);
  }
});

// Command to view all warnings for testing
bot.onText(/^\/testwarnings$/, async (msg) => {
  const chatId = msg.chat.id;
  
  try {
    const userKey = `${chatId}_${msg.from.id}`;
    const userWarnings = warnings[userKey];
    
    if (!userWarnings || userWarnings.totalWarnings === 0) {
      await safeSendMessage(chatId, `✅ شما هیچ اخطاری ندارید.`);
      return;
    }

    let message = `📊 اخطارهای شما:\n🔢 مجموع: ${userWarnings.totalWarnings}/3\n\n📝 تاریخچه:\n`;
    userWarnings.warnings.forEach((warning, index) => {
      const date = new Date(warning.timestamp).toLocaleString('fa-IR');
      message += `${index + 1}. ${warning.reason} - ${date}\n`;
    });

    await safeSendMessage(chatId, message);
  } catch (error) {
    console.error('Test warnings error:', error);
    await safeSendMessage(chatId, `❌ خطا در دریافت اخطارها: ${error.message}`);
  }
});

// Command to restart polling (admin only)
bot.onText(/^\/restartpolling$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (!(await isAdmin(userId, chatId))) {
    await safeSendMessage(chatId, '❌ فقط ادمین‌ها می‌توانند از این دستور استفاده کنند.');
    return;
  }
  
  try {
    await safeSendMessage(chatId, '🔄 در حال راه‌اندازی مجدد polling...');
    
    // Stop current polling
    bot.stopPolling();
    
    // Wait a bit
    setTimeout(async () => {
      try {
        await bot.startPolling();
        await safeSendMessage(chatId, '✅ Polling با موفقیت راه‌اندازی مجدد شد.');
      } catch (error) {
        await safeSendMessage(chatId, `❌ خطا در راه‌اندازی مجدد: ${error.message}`);
      }
    }, 3000);
    
  } catch (error) {
    console.error('Restart polling error:', error);
    await safeSendMessage(chatId, `❌ خطا در restart polling: ${error.message}`);
  }
});

// Command to check bot status
bot.onText(createCommandRegex('botstatus'), async (msg) => {
  const chatId = msg.chat.id;
  
  try {
    const me = await bot.getMe();
    
    let statusMessage = `🤖 *وضعیت ربات:*\n\n`;
    statusMessage += `📛 نام: @${me.username}\n`;
    statusMessage += `🆔 شناسه: ${me.id}\n`;
    statusMessage += `📊 مجوزهای ربات: ${me.can_read_all_group_messages ? 'فعال' : 'محدود'}\n`;
    statusMessage += `🔗 روش اتصال: Polling (Real-time)\n`;
    statusMessage += `📈 وضعیت سرور: آنلاین و پاسخگو\n`;
    
    // Add instance info
    statusMessage += `\n🔄 *مدیریت Instance:*\n`;
    statusMessage += `⏰ زمان فعالیت: ${Math.floor(process.uptime())} ثانیه\n`;
    statusMessage += `💾 حافظه استفاده شده: ${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)} MB\n`;
    
    // Add explanation
    statusMessage += `\n📋 *توضیحات:*\n`;
    statusMessage += `• مجوزهای ربات: سطح دسترسی ربات در گروه‌ها\n`;
    statusMessage += `• روش اتصال: نحوه دریافت پیام‌ها از سرور تلگرام\n`;
    statusMessage += `• وضعیت سرور: آیا ربات به تلگرام متصل است\n`;
    
    await safeSendMessage(chatId, statusMessage, { parse_mode: 'Markdown' });
  } catch (error) {
    console.error('Bot status error:', error);
    await safeSendMessage(chatId, `❌ خطا در دریافت وضعیت: ${error.message}`);
  }
});

// Command to stop bot gracefully
bot.onText(/^\/stopbot$/, async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  
  if (!(await isAdmin(userId, chatId))) {
    await safeSendMessage(chatId, '❌ فقط ادمین‌ها می‌توانند از این دستور استفاده کنند.');
    return;
  }
  
  try {
    await safeSendMessage(chatId, '🛑 در حال متوقف کردن ربات...');
    
    // Graceful shutdown
    if (typeof gracefulShutdown === 'function') {
      await gracefulShutdown('Manual stop command');
    } else {
      process.exit(0);
    }
  } catch (error) {
    console.error('Stop bot error:', error);
    await safeSendMessage(chatId, `❌ خطا در متوقف کردن ربات: ${error.message}`);
  }
});


bot.on("callback_query", async (callbackQuery) => {
  const { message, from, data } = callbackQuery;
  const chatId = message.chat.id;
  const userId = from.id;
  
  // Prevent duplicate processing
  const callbackKey = `${callbackQuery.id}_${userId}_${data}`;
  if (processedCallbacks.has(callbackKey)) {
    console.log('Duplicate callback query ignored:', callbackKey);
    return;
  }
  processedCallbacks.add(callbackKey);
  
  // Clean up old processed callbacks after 1 minute
  setTimeout(() => {
    processedCallbacks.delete(callbackKey);
  }, 60000);
  
  // Handle words pagination
  if (data.startsWith('words_page_')) {
    const page = parseInt(data.split('_')[2]);
    const options = message.is_topic_message
      ? { message_thread_id: message.message_thread_id }
      : {};
    
    try {
      const wordCount = Object.keys(englishWords).length;
      const wordsPerPage = 10;
      const totalPages = Math.ceil(wordCount / wordsPerPage);
      const startIndex = (page - 1) * wordsPerPage;
      const endIndex = startIndex + wordsPerPage;
      
      let messageText = `📚 *کلمات انگلیسی* (صفحه ${page} از ${totalPages})\n`;
      messageText += `📊 *تعداد کل:* ${wordCount} کلمه\n\n`;
      
      // نمایش کلمات صفحه فعلی
      const words = Object.keys(englishWords).slice(startIndex, endIndex);
      words.forEach((word, index) => {
        const globalIndex = startIndex + index + 1;
        messageText += `${globalIndex}. *${word}* = ${englishWords[word]}\n`;
      });
      
      // دکمه‌های ناوبری
      const keyboard = [];
      const navRow = [];
      
      if (page > 1) {
        navRow.push({ text: "◀️ قبلی", callback_data: `words_page_${page - 1}` });
      }
      navRow.push({ text: `${page}/${totalPages}`, callback_data: "words_info" });
      if (page < totalPages) {
        navRow.push({ text: "بعدی ▶️", callback_data: `words_page_${page + 1}` });
      }
      
      if (navRow.length > 0) {
        keyboard.push(navRow);
      }
      
      await safeEditMessageText(messageText, {
        chat_id: chatId,
        message_id: message.message_id,
        parse_mode: "Markdown",
        reply_markup: keyboard.length > 0 ? { inline_keyboard: keyboard } : undefined
      });
      
      await bot.answerCallbackQuery(callbackQuery.id);
      return;
    } catch (error) {
      console.error("Words pagination error:", error.message);
      await bot.answerCallbackQuery(callbackQuery.id, "خطا در نمایش صفحه");
      return;
    }
  }
  
  // rate limit check for callback queries (buttons)
  if (isRateLimited(userId)) {
    await handleRateLimited(userId, chatId);
    return;
  }
  await safeApiCall(() => bot.answerCallbackQuery(callbackQuery.id));

  let game = games[chatId];

  if (data.startsWith("quizz_")) {
    const session = quizSessions[userId];
    const options = message.is_topic_message
      ? { message_thread_id: message.message_thread_id }
      : {};

    if (data === "quizz_start") {
      if (session && session.status === "in_progress") {
        return await safeSendMessage(
          chatId,
          "شما در حال حاضر در یک آزمون هستید. لطفاً صبر کنید تا به پایان برسد.",
          options
        );
      }
      if (session && session.status === "finished") {
        return await safeSendMessage(
          chatId,
          "شما قبلاً در این آزمون شرکت کرده‌اید. 🚫",
          options
        );
      }

      quizSessions[userId] = {
        status: "in_progress",
        score: 0,
        correctCount: 0,
        incorrectCount: 0,
        currentQuestionIndex: 0,
        questions: quizzQuestions.slice(),
        answers: [], // New array to store user answers
        name: from.first_name,
      };
      sendQuizQuestion(chatId, userId);
    } else if (data === "quizz_results") {
      const finishedParticipants = Object.entries(quizSessions).filter(
        ([id, session]) => session.status === "finished"
      );
      if (finishedParticipants.length === 0) {
        return await safeSendMessage(
          chatId,
          "❌ هنوز کسی در آزمون شرکت نکرده است.",
          options
        );
      }

      const sortedParticipants = finishedParticipants
        .sort(([, a], [, b]) => b.score - a.score)
        .slice(0, 10);

      let resultsText = "🏆 *نتایج آزمون زبان انگلیسی* 🏆\n\n";
      sortedParticipants.forEach(([id, session], index) => {
        const medal =
          index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : "▫️";
        const totalQuestions = session.answers.length;
        const incorrectCount = totalQuestions - session.score;
        resultsText += `${medal} *${session.name}*: ${session.score} ✅ / ${incorrectCount} ❌\n`;
      });

      await safeSendMessage(chatId, resultsText, {
        ...options,
        parse_mode: "Markdown",
      });
    } else if (data === "quizz_show_mistakes") {
      if (!session || session.status !== "finished") {
        return await safeSendMessage(
          chatId,
          "شما هنوز آزمون را به پایان نرسانده‌اید یا شرکت نکرده‌اید.",
          options
        );
      }

      const incorrectAnswers = session.answers.filter((ans) => !ans.isCorrect);

      if (incorrectAnswers.length === 0) {
        return await safeSendMessage(
          chatId,
          "شما هیچ پاسخ اشتباهی نداشتید. آفرین! 🎉",
          options
        );
      }

      let mistakesText = "🤔 *پاسخ‌های اشتباه شما:*\n\n";
      incorrectAnswers.forEach((ans, index) => {
        mistakesText += `${index + 1}. *سوال:*\n${he.decode(
          ans.question
        )}\n*پاسخ شما:* ${he.decode(ans.user_answer)}\n*پاسخ صحیح:* ${he.decode(
          ans.correct_answer
        )}\n\n`;
      });

      await safeSendMessage(chatId, mistakesText, {
        ...options,
        parse_mode: "Markdown",
      });
    } else if (data.startsWith("quizz_answer_")) {
      if (!session || session.status !== "in_progress") return;

  clearTimeout(session.timer); // توقف تایمر
  safeApiCall(() => bot.deleteMessage(chatId, session.currentMessageId)).catch(() => {});

      const currentQuestion = session.questions[session.currentQuestionIndex];
      const chosenOptionIndex = parseInt(data.split("_")[2], 10);
      const chosenOptionText = he.decode(
        currentQuestion.options[chosenOptionIndex]
      );
      const isCorrect =
        chosenOptionText === he.decode(currentQuestion.correct_answer);

      if (isCorrect) {
        session.correctCount++;
      } else {
        session.incorrectCount++;
      }

      session.answers.push({
        question: currentQuestion.question,
        user_answer: chosenOptionText,
        correct_answer: currentQuestion.correct_answer,
        isCorrect: isCorrect,
      });

      session.currentQuestionIndex++;
      sendQuizQuestion(chatId, userId);
    }
    return;
  }

  if (data === "new_game_button") {
    const options =
      game && game.threadId ? { message_thread_id: game.threadId } : {};
    createNewGame(chatId, from, options);
    return;
  }

  if (!game || message.message_id !== game.gameMessageId) {
    return;
  }

  let action, value;
  const firstUnderscoreIndex = data.indexOf("_");
  if (firstUnderscoreIndex !== -1) {
    action = data.substring(0, firstUnderscoreIndex);
    value = data.substring(firstUnderscoreIndex + 1);
  } else {
    action = data;
    value = "";
  }

  if (action === "cfg" && userId !== game.creatorId) {
    return;
  }

  if (action === "cfg") {
    const type = value.split("_")[0];
    const val = value.substring(type.length + 1);
    if (type === "category") {
      if (val === "english_language") {
        game.state = "configuring_subcategory";
      } else {
        game.settings.category = val;
        game.state = "configuring_rounds";
      }
    } else if (type === "rounds") {
      game.settings.rounds = parseInt(val, 10);
      game.state = "configuring_timer";
    } else if (type === "timer") {
      game.settings.timer = parseInt(val, 10);
      game.state = "lobby";
    } else if (type === "back" && val === "main") {
      game.state = "configuring_category";
    }
    await updateGameMessage(chatId);
    return;
  }

  switch (action) {
    case "join":
      if (game.state !== "lobby") return;
      if (!game.players[userId]) {
        game.players[userId] = { id: userId, name: from.first_name, score: 0 };
        await updateGameMessage(chatId);
      }
      break;
    case "start":
      if (userId !== game.creatorId) return;
      if (game.state !== "lobby") return;
      if (Object.keys(game.players).length === 0) {
        game.players[userId] = { id: userId, name: from.first_name, score: 0 };
      }
      await fetchQuestionsAndStart(chatId);
      break;
    case "answer":
      if (
        game.state !== "in_progress" ||
        !game.players[userId] ||
        (game.answers[game.currentRound] &&
          game.answers[game.currentRound][userId])
      )
        return;
      const currentQuestion = game.questions[game.currentRound - 1];
      const chosenOptionIndex = parseInt(value, 10);
      const chosenOptionText = currentQuestion.options[chosenOptionIndex];
      const isCorrect = chosenOptionText === currentQuestion.correct_answer;
      
      // اطمینان از وجود game.answers[game.currentRound]
      if (!game.answers[game.currentRound]) {
        game.answers[game.currentRound] = {};
      }
      
      if (isCorrect) game.players[userId].score++;
      game.answers[game.currentRound][userId] = {
        answer: chosenOptionText,
        isCorrect: isCorrect,
      };
      await updateGameMessage(chatId);
      if (
        Object.keys(game.answers[game.currentRound]).length ===
        Object.keys(game.players).length
      ) {
        clearTimeout(game.timerId);
        endRound(chatId);
      }
      break;
  }
});

// مدیریت خطاهای عمومی — از handlerهای بالا استفاده می‌کنیم
// (اینجا صرفاً لاگ می‌کنیم؛ shutdown توسط global handlers انجام می‌شود)
process.on('uncaughtException', (error) => {
  console.error('❌ خطای غیرمنتظره (bottom handler):', error && error.message ? error.message : error);
  // از graceful shutdown استفاده کن
  if (typeof gracefulShutdown === 'function') gracefulShutdown('uncaughtException (bottom handler)', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ خطای Promise (bottom handler):', reason);
  if (typeof gracefulShutdown === 'function') gracefulShutdown('unhandledRejection (bottom handler)', reason);
});

// مدیریت خطاهای تلگرام با handling بهتر conflicts
bot.on('polling_error', (error) => {
  console.error('❌ خطای Polling:', error && error.message ? error.message : error);
  
  // Handle specific conflict errors
  if (error.message && error.message.includes('409 Conflict')) {
    console.log('⚠️ Conflict detected with another bot instance.');
    console.log('💡 Recommendation: Stop all bot instances with "taskkill /f /im node.exe" then restart.');
    
    // Don't auto-retry to avoid infinite loops
    // Let the user manually restart after stopping conflicts
  }
});

bot.on('error', (error) => {
  console.error('❌ خطای بات:', error && error.message ? error.message : error);
  
  // Handle rate limiting and other errors
  if (error.message && error.message.includes('429')) {
    console.log('⚠️ Rate limited by Telegram. Bot will continue after cooldown.');
  }
});

console.log("✅ ربات کوییز با موفقیت روشن شد!");

// ✅ اضافه کردن دستورات به منوی ربات
// این کد را فقط یک بار اجرا کنید و سپس می‌توانید آن را حذف کنید.
bot.setMyCommands([
  {
    command: "help",
    description: "راهنمای جامع ربات",
  },
  {
    command: "newgame",
    description: "شروع یک بازی کوئیز گروهی",
  },
  {
    command: "quizz",
    description: "منوی آزمون انفرادی",
  },
  {
    command: "translate",
    description: "ترجمه یک کلمه انگلیسی",
  },
  {
    command: "words",
    description: "لیست کلمات انگلیسی",
  },
  {
    command: "search",
    description: "جستجو در کلمات و اصطلاحات",
  },
  {
    command: "randomword",
    description: "کلمه تصادفی انگلیسی",
  },
  {
    command: "idioms",
    description: "لیست اصطلاحات انگلیسی",
  },
  {
    command: "song",
    description: "جستجو و نمایش متن آهنگ از اینترنت",
  },
  {
    command: "songs",
    description: "راهنمای جستجوی آهنگ‌ها",
  },
  {
    command: "stats",
    description: "آمار تفصیلی ربات",
  },
  {
    command: "addword",
    description: "اضافه کردن کلمات جدید (ادمین)",
  },
  {
    command: "deleteword",
    description: "حذف کلمات (ادمین)",
  },
  {
    command: "backup",
    description: "پشتیبان‌گیری از کلمات (ادمین)",
  },
  {
    command: "restore",
    description: "بازیابی کلمات (ادمین)",
  },
  {
    command: "cancelgame",
    description: "لغو بازی فعال",
  },
  {
    command: "cancelquizz",
    description: "لغو آزمون در حال انجام",
  },
]);