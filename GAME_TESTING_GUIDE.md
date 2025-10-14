# 🎮 راهنمای تست دستورات بازی

## ✅ مشکلات حل شده

### 1. **دستور `/newgame`**
- **مشکل**: دسته‌بندی‌ها به صورت دکمه شیشه‌ای نمایش داده نمی‌شدند
- **راه‌حل**: 
  - بهبود تابع `updateGameMessage` برای نمایش صحیح دکمه‌ها
  - اضافه کردن logging کامل برای debugging
  - استفاده از `safeEditMessageText` برای بهتر error handling

### 2. **دستور `/cancelgame`**
- **مشکل**: بازی را تمام نمی‌کرد
- **راه‌حل**:
  - بهبود permission checking با استفاده از `isAdmin` function
  - اضافه کردن logging کامل
  - بهتر error handling و fallback mechanisms

## 🎯 دستورات تست

### **مرحله 1: تست `/newgame`**
```
/newgame
```
**انتظار**:
- پیام "در حال ساخت بازی جدید..." نمایش داده شود
- سپس پیام با دکمه‌های دسته‌بندی نمایش داده شود
- هر دسته‌بندی باید آیکون و نام داشته باشد

**Console Output مورد انتظار**:
```
🎮 Creating new game for chat: -123456 by user: 123456
✅ Game created successfully, updating message with categories
🔄 Updating game message for chat: -123456 state: configuring_category
📚 Available categories: ['general_knowledge', 'history', 'geography', 'english_language']
🎯 Creating button for category: general_knowledge دانش عمومی
🎯 Creating button for category: history تاریخ
🎮 Category buttons created: 4
⌨️ Keyboard layout created: 2 rows
📝 Updating game message with new content
✅ Game message updated successfully
```

### **مرحله 2: تست انتخاب دسته‌بندی**
- روی یکی از دکمه‌های دسته‌بندی کلیک کنید
- اگر "زبان انگلیسی" را انتخاب کردید، زیرشاخه‌ها نمایش داده شوند

**Console Output مورد انتظار**:
```
📨 Message received: { from: 'UserName', userId: 123456, chatId: -123456, text: 'callback_query', type: 'group' }
🔄 Updating game message for chat: -123456 state: configuring_rounds
📝 Updating game message with new content
✅ Game message updated successfully
```

### **مرحله 3: تست `/cancelgame`**
```
/cancelgame
```
**انتظار**:
- اگر بازی فعال باشد، بازی لغو شود
- پیام تأیید نمایش داده شود
- اگر بازی فعال نباشد، پیام مناسب نمایش داده شود

**Console Output مورد انتظار**:
```
🎯 /cancelgame called by: 123456 in chat: -123456
🎮 Game state: configuring_category
👤 User is admin: true Creator ID: 123456 User ID: 123456
✅ Cancelling game - user has permission
⏰ Game timer cleared
🗑️ Game message deleted
🎮 Game removed from memory
✅ Cancel confirmation sent
```

## 🔧 عیب‌یابی

### **اگر `/newgame` کار نمی‌کند:**
1. Console را بررسی کنید
2. پیام‌های debug را دنبال کنید
3. اگر "Failed to send initial game message" است، مشکل permissions است

### **اگر دکمه‌های دسته‌بندی نمایش داده نمی‌شوند:**
1. بررسی کنید که `allCategories` خالی نباشد
2. Console را برای "Available categories" بررسی کنید
3. اگر خالی است، `questions.json` را بررسی کنید

### **اگر `/cancelgame` کار نمی‌کند:**
1. بررسی کنید که بازی فعال باشد
2. Console را برای "Game state" بررسی کنید
3. اگر "no game" است، ابتدا `/newgame` اجرا کنید

## 📊 مراحل تست کامل

### **تست 1: ایجاد بازی**
```
/newgame
```
- ✅ پیام اولیه نمایش داده شود
- ✅ دکمه‌های دسته‌بندی نمایش داده شوند

### **تست 2: انتخاب دسته‌بندی**
- روی یک دسته‌بندی کلیک کنید
- ✅ صفحه تنظیم تعداد سوالات نمایش داده شود

### **تست 3: تنظیم تعداد سوالات**
- یکی از گزینه‌های تعداد سوالات را انتخاب کنید
- ✅ صفحه تنظیم زمان نمایش داده شود

### **تست 4: تنظیم زمان**
- یکی از گزینه‌های زمان را انتخاب کنید
- ✅ صفحه lobby نمایش داده شود

### **تست 5: لغو بازی**
```
/cancelgame
```
- ✅ بازی لغو شود
- ✅ پیام تأیید نمایش داده شود

## 🎯 Console Output سالم

### **هنگام ایجاد بازی:**
```
🎮 Creating new game for chat: -123456 by user: 123456
✅ Game created successfully, updating message with categories
🔄 Updating game message for chat: -123456 state: configuring_category
📚 Available categories: ['general_knowledge', 'history', 'geography', 'english_language']
🎯 Creating button for category: general_knowledge دانش عمومی
🎯 Creating button for category: history تاریخ
🎯 Creating button for category: geography جغرافیا
🎯 Creating button for category: english_language زبان انگلیسی
🎮 Category buttons created: 4
⌨️ Keyboard layout created: 2 rows
📝 Updating game message with new content
✅ Game message updated successfully
```

### **هنگام لغو بازی:**
```
🎯 /cancelgame called by: 123456 in chat: -123456
🎮 Game state: configuring_category
👤 User is admin: true Creator ID: 123456 User ID: 123456
✅ Cancelling game - user has permission
⏰ Game timer cleared
🗑️ Game message deleted
🎮 Game removed from memory
✅ Cancel confirmation sent
```

## 🚨 مشکلات رایج

### **مشکل 1: "Failed to send initial game message"**
**راه‌حل**:
1. ربات را ادمین گروه کنید
2. دسترسی ارسال پیام بدهید
3. `/restartpolling` اجرا کنید

### **مشکل 2: "Available categories: []"**
**راه‌حل**:
1. `questions.json` را بررسی کنید
2. ربات را restart کنید
3. Console را برای خطاهای loading بررسی کنید

### **مشکل 3: "Cannot update game message"**
**راه‌حل**:
1. بررسی کنید که بازی فعال باشد
2. `/cancelgame` اجرا کنید
3. `/newgame` مجدداً اجرا کنید

## 💡 نکات مهم

1. **همیشه console را بررسی کنید** - پیام‌های debug مهم هستند
2. **ابتدا در پیوی تست کنید** - مشکلات permissions را حذف کنید
3. **ربات را ادمین کنید** - دسترسی‌های لازم را بدهید
4. **از دستورات مدیریتی استفاده کنید** - `/restartpolling`, `/botstatus`
5. **در صورت مشکل، restart کنید** - از `start_bot.bat` استفاده کنید

## 🎊 نتیجه

بعد از این اصلاحات:
- ✅ `/newgame` دسته‌بندی‌ها را به صورت دکمه شیشه‌ای نمایش می‌دهد
- ✅ `/cancelgame` بازی را کاملاً لغو می‌کند
- ✅ Error handling بهتر شده است
- ✅ Debugging کامل اضافه شده است
- ✅ تمام توابع async/await شده‌اند
