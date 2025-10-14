# 📚 راهنمای تطبیق با questions.json

## ✅ تغییرات اعمال شده

### 1. **بارگذاری از `questions.json`**
- **قبل**: از `questions.js` استفاده می‌کرد
- **بعد**: از `questions.json` کامل استفاده می‌کند

### 2. **دسته‌بندی‌های موجود**
از فایل `questions.json` این دسته‌بندی‌ها شناسایی شد:
- **اطلاعات عمومی** 🌍 (`general_knowledge`)
- **تاریخ** 📜 (`history`)
- **جغرافیا** 🗺️ (`geography`)
- **ورزش** ⚽ (`sports`)
- **فیلم** 🎬 (`movies`)
- **غذا و تغذیه** 🍕 (`food_nutrition`)
- **اطلاعات مذهبی** 🙏 (`religious_info`)
- **ریاضی و سرگرمی** 🔢 (`math_fun`)

### 3. **فرمت سوالات**
```javascript
// فرمت questions.json
{
  "id": 1,
  "category": "اطلاعات عمومی",
  "difficulty": "متوسط",
  "question": "کدام یک از عجایب هفتگانه جدید، در کشور اردن قرار دارد؟",
  "options": ["چیچن ایتزا", "شهر پترا", "کولوسئوم", "ماچو پیچو"],
  "correct_answer": "شهر پترا"
}

// فرمت مورد انتظار ربات (بدون تغییر)
{
  "question": "کدام یک از عجایب هفتگانه جدید، در کشور اردن قرار دارد؟",
  "correct_answer": "شهر پترا",
  "options": ["چیچن ایتزا", "شهر پترا", "کولوسئوم", "ماچو پیچو"],
  "category": "اطلاعات عمومی",
  "difficulty": "متوسط",
  "id": 1
}
```

## 🎯 تست فوری

### **مرحله 1: تست `/newgame`**
```
/newgame
```

**Console Output مورد انتظار:**
```
✅ Loaded questions.json with categories: ['general_knowledge', 'history', 'geography', 'sports', 'movies', 'food_nutrition', 'religious_info', 'math_fun']
  📚 general_knowledge: [تعداد] questions
  📚 history: [تعداد] questions
  📚 geography: [تعداد] questions
  📚 sports: [تعداد] questions
  📚 movies: [تعداد] questions
  📚 food_nutrition: [تعداد] questions
  📚 religious_info: [تعداد] questions
  📚 math_fun: [تعداد] questions
✅ Total questions loaded: [تعداد کل سوالات]
✅ Initialized category "اطلاعات عمومی" (general_knowledge) with [تعداد] questions
✅ Initialized category "تاریخ" (history) with [تعداد] questions
✅ Initialized category "جغرافیا" (geography) with [تعداد] questions
✅ Initialized category "ورزش" (sports) with [تعداد] questions
✅ Initialized category "فیلم" (movies) with [تعداد] questions
✅ Initialized category "غذا و تغذیه" (food_nutrition) with [تعداد] questions
✅ Initialized category "اطلاعات مذهبی" (religious_info) with [تعداد] questions
✅ Initialized category "ریاضی و سرگرمی" (math_fun) with [تعداد] questions
Decks initialized successfully. Active categories: 8
/newgame called by 8041742380
🎮 Creating new game for chat: -1002952928009 by user: 8041742380
✅ Initial game message sent, message ID: 123
✅ Game created successfully, updating message with categories
🔄 Updating game message for chat: -1002952928009 state: configuring_category
📚 Available categories: ['general_knowledge', 'history', 'geography', 'sports', 'movies', 'food_nutrition', 'religious_info', 'math_fun']
🎯 Creating button for category: general_knowledge اطلاعات عمومی
🎯 Creating button for category: history تاریخ
🎯 Creating button for category: geography جغرافیا
🎯 Creating button for category: sports ورزش
🎯 Creating button for category: movies فیلم
🎯 Creating button for category: food_nutrition غذا و تغذیه
🎯 Creating button for category: religious_info اطلاعات مذهبی
🎯 Creating button for category: math_fun ریاضی و سرگرمی
🎮 Category buttons created: 8
⌨️ Keyboard layout created: 4 rows
📝 Updating game message with new content
✅ Game message updated successfully
```

### **مرحله 2: تست انتخاب دسته‌بندی**
- روی هر یک از دکمه‌های دسته‌بندی کلیک کنید
- ✅ صفحه تنظیم تعداد سوالات نمایش داده شود

## 📊 دسته‌بندی‌های موجود

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

### **فیلم** 🎬
- سوالات مربوط به فیلم‌ها
- بازیگران و کارگردانان
- فیلم‌های مشهور

### **غذا و تغذیه** 🍕
- سوالات مربوط به غذا
- مواد غذایی
- تغذیه سالم

### **اطلاعات مذهبی** 🙏
- سوالات مذهبی
- ادیان مختلف
- اطلاعات مذهبی

### **ریاضی و سرگرمی** 🔢
- سوالات ریاضی
- پازل‌ها و معماها
- سرگرمی‌های فکری

## 🎮 مراحل بازی

### **1. ایجاد بازی**
```
/newgame
```
- پیام "در حال ساخت بازی جدید..." نمایش داده می‌شود
- سپس 8 دکمه دسته‌بندی نمایش داده می‌شود

### **2. انتخاب دسته‌بندی**
- روی هر یک از 8 دسته‌بندی کلیک کنید
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
1. بررسی کنید که `questions.json` وجود دارد
2. Console را برای "Loaded questions.json with categories" بررسی کنید
3. اگر خطا است، ربات را restart کنید

### **اگر دکمه‌ها نمایش داده نمی‌شوند:**
1. بررسی کنید که پیام اولیه ارسال شده باشد
2. Console را برای "Game message updated successfully" بررسی کنید
3. اگر مشکل است، `/cancelgame` و `/newgame` مجدداً اجرا کنید

## 🎊 نتیجه

بعد از این تطبیق:
- ✅ تمام دسته‌بندی‌های `questions.json` لود می‌شوند
- ✅ 8 دسته‌بندی مختلف با آیکون‌های مناسب نمایش داده می‌شوند
- ✅ سوالات فارسی با فرمت صحیح استفاده می‌شوند
- ✅ بازی کامل با تمام دسته‌بندی‌ها قابل اجرا است

## 🚀 تست کنید!

حالا دستور `/newgame` را در گروه اجرا کنید و باید 8 دکمه دسته‌بندی فارسی را ببینید! 🎮

### **مراحل تست:**
1. `/newgame` - ایجاد بازی
2. کلیک روی هر دسته‌بندی - انتخاب موضوع
3. انتخاب تعداد سوالات - 5، 10 یا 15
4. انتخاب زمان - 15، 20 یا 30 ثانیه
5. شروع بازی!

**ربات شما حالا با تمام دسته‌بندی‌های فارسی `questions.json` کاملاً آماده استفاده است!** 🎉
