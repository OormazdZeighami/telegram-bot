# 📚 راهنمای دسته‌بندی‌های کامل

## ✅ دسته‌بندی‌های موجود

### **دسته‌بندی‌های فارسی از `questions.json`:**
1. **اطلاعات عمومی** 🌍 (`general_knowledge`)
2. **تاریخ** 📜 (`history`)
3. **جغرافیا** 🗺️ (`geography`)
4. **ورزش** ⚽ (`sports`)
5. **فیلم و سریال** 🎬 (`movies`)
6. **تغذیه و خوراکی** 🍕 (`food_nutrition`)
7. **تکنولوژی** 💻 (`technology`)
8. **اطلاعات دینی** 🙏 (`religious_info`)
9. **ریاضی و سرگرمی** 🔢 (`math_fun`)

### **دسته‌بندی انگلیسی از `quizz.json`:**
10. **زبان انگلیسی** 🇬🇧 (`english_language`)

## 🎯 تست فوری

### **مرحله 1: تست `/newgame`**
```
/newgame
```

**Console Output مورد انتظار:**
```
✅ Loaded questions.json with categories: ['general_knowledge', 'history', 'geography', 'sports', 'movies', 'food_nutrition', 'technology', 'religious_info', 'math_fun']
  📚 general_knowledge: [تعداد] questions
  📚 history: [تعداد] questions
  📚 geography: [تعداد] questions
  📚 sports: [تعداد] questions
  📚 movies: [تعداد] questions
  📚 food_nutrition: [تعداد] questions
  📚 technology: [تعداد] questions
  📚 religious_info: [تعداد] questions
  📚 math_fun: [تعداد] questions
✅ Total questions loaded: [تعداد کل سوالات]
✅ Initialized category "اطلاعات عمومی" (general_knowledge) with [تعداد] questions
✅ Initialized category "تاریخ" (history) with [تعداد] questions
✅ Initialized category "جغرافیا" (geography) with [تعداد] questions
✅ Initialized category "ورزش" (sports) with [تعداد] questions
✅ Initialized category "فیلم و سریال" (movies) with [تعداد] questions
✅ Initialized category "تغذیه و خوراکی" (food_nutrition) with [تعداد] questions
✅ Initialized category "تکنولوژی" (technology) with [تعداد] questions
✅ Initialized category "اطلاعات دینی" (religious_info) with [تعداد] questions
✅ Initialized category "ریاضی و سرگرمی" (math_fun) with [تعداد] questions
✅ Initialized category "زبان انگلیسی" (english_language) with 50 questions from quizz.json
Decks initialized successfully. Active categories: 10
/newgame called by 8041742380
🎮 Creating new game for chat: -1002952928009 by user: 8041742380
✅ Initial game message sent, message ID: 123
✅ Game created successfully, updating message with categories
🔄 Updating game message for chat: -1002952928009 state: configuring_category
📚 Available categories: ['general_knowledge', 'history', 'geography', 'sports', 'movies', 'food_nutrition', 'technology', 'religious_info', 'math_fun', 'english_language']
🎯 Creating button for category: general_knowledge اطلاعات عمومی
🎯 Creating button for category: history تاریخ
🎯 Creating button for category: geography جغرافیا
🎯 Creating button for category: sports ورزش
🎯 Creating button for category: movies فیلم و سریال
🎯 Creating button for category: food_nutrition تغذیه و خوراکی
🎯 Creating button for category: technology تکنولوژی
🎯 Creating button for category: religious_info اطلاعات دینی
🎯 Creating button for category: math_fun ریاضی و سرگرمی
🎯 Creating button for category: english_language زبان انگلیسی
🎮 Category buttons created: 10
⌨️ Keyboard layout created: 5 rows
📝 Updating game message with new content
✅ Game message updated successfully
```

### **مرحله 2: تست انتخاب دسته‌بندی**
- روی هر یک از دکمه‌های دسته‌بندی کلیک کنید
- ✅ صفحه تنظیم تعداد سوالات نمایش داده شود

## 📊 دسته‌بندی‌های کامل

### **اطلاعات عمومی** 🌍
- سوالات عمومی و متنوع
- اطلاعات عمومی جهان
- دانش عمومی

### **تاریخ** 📜
- سوالات تاریخی
- رویدادهای تاریخی
- شخصیت‌های تاریخی

### **جغرافیا** 🗺️
- سوالات جغرافیایی
- کشورها و پایتخت‌ها
- مکان‌های جغرافیایی

### **ورزش** ⚽
- سوالات مربوط به ورزش
- تیم‌ها و بازیکنان
- مسابقات ورزشی

### **فیلم و سریال** 🎬
- سوالات مربوط به فیلم‌ها
- بازیگران و کارگردانان
- فیلم‌های مشهور

### **تغذیه و خوراکی** 🍕
- سوالات مربوط به غذا
- مواد غذایی
- تغذیه سالم

### **تکنولوژی** 💻
- سوالات مربوط به فناوری
- کامپیوتر و نرم‌افزار
- اختراعات و نوآوری‌ها

### **اطلاعات دینی** 🙏
- سوالات مذهبی
- ادیان مختلف
- اطلاعات مذهبی

### **ریاضی و سرگرمی** 🔢
- سوالات ریاضی
- پازل‌ها و معماها
- سرگرمی‌های فکری

### **زبان انگلیسی** 🇬🇧
- سوالات زبان انگلیسی
- گرامر و واژگان
- اصطلاحات انگلیسی

## 🎮 مراحل بازی

### **1. ایجاد بازی**
```
/newgame
```
- پیام "در حال ساخت بازی جدید..." نمایش داده می‌شود
- سپس 10 دکمه دسته‌بندی نمایش داده می‌شود

### **2. انتخاب دسته‌بندی**
- روی هر یک از 10 دسته‌بندی کلیک کنید
- صفحه تنظیم تعداد سوالات نمایش داده می‌شود

### **3. تنظیم تعداد سوالات**
- 5 سوال
- 10 سوال  
- 15 سوال

### **4. تنظیم زمان**
- 15 ثانیه
- 20 ثانیه
- 30 ثانیه

### **5. شروع بازی**
- بازیکنان می‌توانند join کنند
- سازنده بازی می‌تواند start کند

## 🔍 عیب‌یابی

### **اگر "Available categories: []" نمایش داده می‌شود:**
1. بررسی کنید که `questions.json` و `quizz.json` وجود دارند
2. Console را برای "Loaded questions.json with categories" بررسی کنید
3. اگر خطا است، ربات را restart کنید

### **اگر دکمه‌ها نمایش داده نمی‌شوند:**
1. بررسی کنید که پیام اولیه ارسال شده باشد
2. Console را برای "Game message updated successfully" بررسی کنید
3. اگر مشکل است، `/cancelgame` و `/newgame` مجدداً اجرا کنید

## 🎊 نتیجه

بعد از این تکمیل:
- ✅ تمام دسته‌بندی‌های `questions.json` لود می‌شوند
- ✅ دسته‌بندی زبان انگلیسی از `quizz.json` اضافه می‌شود
- ✅ 10 دسته‌بندی کامل با آیکون‌های مناسب نمایش داده می‌شوند
- ✅ سوالات فارسی و انگلیسی با فرمت صحیح استفاده می‌شوند
- ✅ بازی کامل با تمام دسته‌بندی‌ها قابل اجرا است

## 🚀 تست کنید!

حالا دستور `/newgame` را در گروه اجرا کنید و باید 10 دکمه دسته‌بندی کامل را ببینید! 🎮

### **مراحل تست:**
1. `/newgame` - ایجاد بازی
2. کلیک روی هر دسته‌بندی - انتخاب موضوع
3. انتخاب تعداد سوالات - 5، 10 یا 15
4. انتخاب زمان - 15، 20 یا 30 ثانیه
5. شروع بازی!

**ربات شما حالا با 10 دسته‌بندی کامل (9 فارسی + 1 انگلیسی) کاملاً آماده استفاده است!** 🎉
