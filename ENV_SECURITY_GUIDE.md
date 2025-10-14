# 🔐 راهنمای امنیت و مدیریت توکن‌ها

## ⚠️ نکات مهم امنیتی

### **❌ هرگز توکن‌ها را در کد ننویسید!**
- توکن‌ها باید فقط در فایل `.env` باشند
- فایل `.env` در `.gitignore` قرار دارد
- هرگز فایل `.env` را در Git commit نکنید

## 📁 ایجاد فایل `.env`

### **مرحله 1: ایجاد فایل `.env`**
در پوشه پروژه فایل `.env` ایجاد کنید:

```env
# 🔑 Telegram Bot Configuration
BOT_TOKEN=YOUR_BOT_TOKEN_HERE

# 👥 Admin Configuration
ADMIN_IDS=8041742380

# ⚙️ Bot Settings
RATE_LIMIT_SECONDS=2

# 🎵 Song Search Settings (Optional)
# GENIUS_API_KEY=your_genius_api_key_here
# MUSIXMATCH_API_KEY=your_musixmatch_api_key_here

# 📊 Database Settings (Optional)
# DATABASE_URL=your_database_url_here
```

### **مرحله 2: تنظیم توکن ربات**
1. به [@BotFather](https://t.me/BotFather) در تلگرام بروید
2. دستور `/newbot` را بزنید
3. نام ربات را وارد کنید
4. توکن دریافتی را در `BOT_TOKEN` قرار دهید

### **مرحله 3: تنظیم ادمین‌ها**
شناسه‌های تلگرام ادمین‌ها را در `ADMIN_IDS` قرار دهید:
```env
ADMIN_IDS=123456789,987654321,555666777
```

## 🔍 بررسی امنیت

### **✅ موارد امن:**
- ✅ توکن اصلی از `process.env.BOT_TOKEN` گرفته می‌شود
- ✅ Google Translate بدون API key کار می‌کند
- ✅ Song search از API های رایگان استفاده می‌کند
- ✅ توکن‌های موجود در کد فقط در کامنت‌ها هستند

### **🔧 تنظیمات پیشنهادی:**

#### **برای تولید (Production):**
```env
BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
ADMIN_IDS=8041742380
RATE_LIMIT_SECONDS=1
```

#### **برای توسعه (Development):**
```env
BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
ADMIN_IDS=8041742380,123456789
RATE_LIMIT_SECONDS=2
```

## 🛡️ نکات امنیتی

### **1. محافظت از فایل `.env`:**
- فایل `.env` در `.gitignore` قرار دارد
- هرگز آن را در Git commit نکنید
- دسترسی‌های فایل را محدود کنید

### **2. مدیریت توکن‌ها:**
- توکن‌ها را به صورت دوره‌ای تغییر دهید
- از توکن‌های مختلف برای محیط‌های مختلف استفاده کنید
- توکن‌ها را در متغیرهای محیطی سرور قرار دهید

### **3. بررسی منظم:**
- کد را برای توکن‌های سخت‌کد شده بررسی کنید
- لاگ‌ها را برای نشتی اطلاعات بررسی کنید
- دسترسی‌های ربات را محدود نگه دارید

## 🔧 دستورات مفید

### **بررسی متغیرهای محیطی:**
```bash
# Windows
echo %BOT_TOKEN%

# Linux/Mac
echo $BOT_TOKEN
```

### **اجرای ربات با متغیرهای محیطی:**
```bash
# Windows
set BOT_TOKEN=your_token && node index.js

# Linux/Mac
BOT_TOKEN=your_token node index.js
```

### **بررسی امنیت کد:**
```bash
# جستجوی توکن‌های احتمالی
grep -r "token.*=" .
grep -r "api.*key" .
```

## 📋 چک‌لیست امنیت

### **قبل از Deploy:**
- [ ] فایل `.env` ایجاد شده
- [ ] توکن ربات در `.env` قرار دارد
- [ ] هیچ توکنی در کد نیست
- [ ] فایل `.env` در `.gitignore` است
- [ ] دسترسی‌های فایل محدود است

### **بعد از Deploy:**
- [ ] ربات کار می‌کند
- [ ] دستورات پاسخ می‌دهند
- [ ] لاگ‌ها بررسی شده‌اند
- [ ] ادمین‌ها دسترسی دارند

## 🚨 در صورت مشکل

### **خطای "BOT_TOKEN is not set":**
1. فایل `.env` را ایجاد کنید
2. `BOT_TOKEN` را در آن قرار دهید
3. ربات را مجدداً راه‌اندازی کنید

### **خطای "Invalid token":**
1. توکن را از [@BotFather](https://t.me/BotFather) مجدداً دریافت کنید
2. در فایل `.env` به‌روزرسانی کنید
3. ربات را مجدداً راه‌اندازی کنید

## ✅ نتیجه

**ربات شما حالا کاملاً امن است:**
- ✅ همه توکن‌ها در فایل `.env` هستند
- ✅ هیچ اطلاعات حساسی در کد نیست
- ✅ از API های رایگان استفاده می‌کند
- ✅ تنظیمات قابل تغییر هستند

**فقط فایل `.env` را ایجاد کنید و توکن خود را در آن قرار دهید!** 🔐✨
