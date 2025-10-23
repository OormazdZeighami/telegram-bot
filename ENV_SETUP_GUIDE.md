# راهنمای تنظیم متغیرهای محیطی (.env)

## 🚨 مشکل اصلی
ربات روی هاست کار نمی‌کند زیرا متغیرهای محیطی تنظیم نشده‌اند.

## 🔧 راه‌حل

### 1. ایجاد فایل .env
در root directory پروژه، فایل `.env` ایجاد کنید:

```env
BOT_TOKEN=your_actual_bot_token_here
ADMIN_IDS=123456789,987654321
RATE_LIMIT_SECONDS=5
PORT=3000
WEBHOOK_URL=https://yourdomain.com
```

### 2. دریافت BOT_TOKEN
1. به [@BotFather](https://t.me/botfather) در تلگرام بروید
2. دستور `/newbot` را ارسال کنید
3. نام ربات را وارد کنید
4. username ربات را وارد کنید
5. TOKEN را کپی کنید

### 3. دریافت ADMIN_IDS
1. به [@userinfobot](https://t.me/userinfobot) بروید
2. دستور `/start` را ارسال کنید
3. ID خود را کپی کنید
4. برای ادمین‌های دیگر هم همین کار را تکرار کنید

### 4. مثال کامل .env
```env
BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz123456789
ADMIN_IDS=7483438259,8041742380,8451316266
RATE_LIMIT_SECONDS=5
PORT=3000
WEBHOOK_URL=https://yourdomain.com
```

## 🌐 تنظیم روی هاست‌های مختلف

### Liara (لیارا)
```bash
# در پنل Liara، بخش Environment Variables:
BOT_TOKEN=your_token
ADMIN_IDS=123456789,987654321
PORT=3000
```

### Heroku
```bash
heroku config:set BOT_TOKEN=your_token
heroku config:set ADMIN_IDS=123456789,987654321
heroku config:set PORT=3000
```

### DigitalOcean
```bash
# در فایل .env
BOT_TOKEN=your_token
ADMIN_IDS=123456789,987654321
PORT=3000
```

### VPS/Self-hosted
```bash
# ایجاد فایل .env
nano .env

# محتوای فایل:
BOT_TOKEN=your_token
ADMIN_IDS=123456789,987654321
PORT=3000
```

## 🔍 بررسی تنظیمات

### 1. اجرای host_check.js
```bash
node host_check.js
```

### 2. بررسی متغیرهای محیطی
```bash
# Linux/Mac
echo $BOT_TOKEN

# Windows
echo %BOT_TOKEN%
```

### 3. تست ربات
```bash
node index.js
```

## ⚠️ نکات امنیتی

1. **هرگز TOKEN را در کد قرار ندهید**
2. **فایل .env را در .gitignore قرار دهید**
3. **TOKEN را با کسی به اشتراک نگذارید**
4. **در صورت لو رفتن TOKEN، از BotFather TOKEN جدید دریافت کنید**

## 🚀 مراحل نهایی

1. ✅ فایل .env ایجاد کنید
2. ✅ BOT_TOKEN را تنظیم کنید
3. ✅ ADMIN_IDS را تنظیم کنید
4. ✅ ربات را اجرا کنید: `npm start`
5. ✅ تست کنید: `/start` در تلگرام

## 📞 پشتیبانی

اگر مشکل داشتید:
1. `node host_check.js` را اجرا کنید
2. خروجی را بررسی کنید
3. راهنمای HOST_DEPLOYMENT_GUIDE.md را مطالعه کنید
