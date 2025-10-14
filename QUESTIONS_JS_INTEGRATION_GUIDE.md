# 📚 راهنمای تطبیق با questions.js

## ✅ تغییرات اعمال شده

### 1. **بارگذاری از `questions.js`**
- **قبل**: از `quizz.json` استفاده می‌کرد
- **بعد**: از `questions.js` کامل استفاده می‌کند

### 2. **دسته‌بندی‌های موجود**
از فایل `questions.js` این دسته‌بندی‌ها شناسایی شد:
- **اطلاعات عمومی** 🌍
- **فیلم** 🎬  
- **موسیقی** 🎵
- **ورزش** ⚽
- **تاریخ** 📜
- **علم و طبیعت** 🔬
- **جغرافیا** 🗺️

### 3. **تبدیل فرمت سوالات**
```javascript
// فرمت questions.js
{
  "question": "Who wrote the award winning musical...",
  "options": ["Option1", "Option2", "Option3", "Option4"],
  "correctAnswer": "Lin-Manuel Miranda"
}

// فرمت مورد انتظار ربات
{
  "question": "Who wrote the award winning musical...",
  "correct_answer": "Lin-Manuel Miranda", 
  "options": ["Option1", "Option2", "Option3", "Option4"],
  "category": "اطلاعات عمومی"
}
```

## 🎯 تست فوری

### **مرحله 1: تست `/newgame`**
```
/newgame
```

**Console Output مورد انتظار:**
```
✅ Loaded questions.js with categories: ['اطلاعات عمومی', 'فیلم', 'موسیقی', 'ورزش', 'تاریخ', 'علم و طبیعت', 'جغرافیا']
✅ Total questions loaded: [تعداد کل سوالات]
✅ Initialized category "اطلاعات عمومی" with [تعداد] questions
✅ Initialized category "فیلم" with [تعداد] questions
✅ Initialized category "موسیقی" with [تعداد] questions
✅ Initialized category "ورزش" with [تعداد] questions
✅ Initialized category "تاریخ" with [تعداد] questions
✅ Initialized category "علم و طبیعت" with [تعداد] questions
✅ Initialized category "جغرافیا" with [تعداد] questions
Decks initialized successfully.
/newgame called by 8041742380
🎮 Creating new game for chat: -1002952928009 by user: 8041742380
✅ Initial game message sent, message ID: 123
✅ Game created successfully, updating message with categories
🔄 Updating game message for chat: -1002952928009 state: configuring_category
📚 Available categories: ['اطلاعات عمومی', 'فیلم', 'موسیقی', 'ورزش', 'تاریخ', 'علم و طبیعت', 'جغرافیا']
🎯 Creating button for category: اطلاعات عمومی اطلاعات عمومی
🎯 Creating button for category: فیلم فیلم
🎯 Creating button for category: موسیقی موسیقی
🎯 Creating button for category: ورزش ورزش
🎯 Creating button for category: تاریخ تاریخ
🎯 Creating button for category: علم و طبیعت علم و طبیعت
🎯 Creating button for category: جغرافیا جغرافیا
🎮 Category buttons created: 7
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

### **فیلم** 🎬
- سوالات مربوط به فیلم‌ها
- بازیگران، کارگردانان، فیلم‌ها

### **موسیقی** 🎵
- سوالات مربوط به موسیقی
- خوانندگان، آهنگ‌ها، سبک‌ها

### **ورزش** ⚽
- سوالات مربوط به ورزش
- تیم‌ها، بازیکنان، مسابقات

### **تاریخ** 📜
- سوالات تاریخی
- رویدادهای تاریخی، شخصیت‌ها

### **علم و طبیعت** 🔬
- سوالات علمی
- طبیعت، حیوانات، گیاهان

### **جغرافیا** 🗺️
- سوالات جغرافیایی
- کشورها، پایتخت‌ها، مکان‌ها

## 🎮 مراحل بازی

### **1. ایجاد بازی**
```
/newgame
```
- پیام "در حال ساخت بازی جدید..." نمایش داده می‌شود
- سپس 7 دکمه دسته‌بندی نمایش داده می‌شود

### **2. انتخاب دسته‌بندی**
- روی هر یک از 7 دسته‌بندی کلیک کنید
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
1. بررسی کنید که `questions.js` وجود دارد
2. Console را برای "Loaded questions.js with categories" بررسی کنید
3. اگر خطا است، ربات را restart کنید

### **اگر دکمه‌ها نمایش داده نمی‌شوند:**
1. بررسی کنید که پیام اولیه ارسال شده باشد
2. Console را برای "Game message updated successfully" بررسی کنید
3. اگر مشکل است، `/cancelgame` و `/newgame` مجدداً اجرا کنید

## 🎊 نتیجه

بعد از این تطبیق:
- ✅ تمام دسته‌بندی‌های `questions.js` لود می‌شوند
- ✅ 7 دسته‌بندی مختلف با آیکون‌های مناسب نمایش داده می‌شوند
- ✅ سوالات به فرمت صحیح تبدیل می‌شوند
- ✅ بازی کامل با تمام دسته‌بندی‌ها قابل اجرا است

## 🚀 تست کنید!

حالا دستور `/newgame` را در گروه اجرا کنید و باید 7 دکمه دسته‌بندی را ببینید! 🎮

### **مراحل تست:**
1. `/newgame` - ایجاد بازی
2. کلیک روی هر دسته‌بندی - انتخاب موضوع
3. انتخاب تعداد سوالات - 5، 10 یا 15
4. انتخاب زمان - 15، 20 یا 30 ثانیه
5. شروع بازی!

**ربات شما حالا با تمام دسته‌بندی‌های `questions.js` کاملاً آماده استفاده است!** 🎉
