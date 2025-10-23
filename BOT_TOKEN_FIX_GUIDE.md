# راهنمای حل مشکل توکن ربات

## 🚨 مشکل: 401 Unauthorized

### علت مشکل:
ربات با خطای `401 Unauthorized` متوقف شده است. این یعنی:
- توکن ربات معتبر نیست
- توکن منقضی شده است
- فایل `.env` وجود ندارد یا توکن در آن تنظیم نشده است

## 🔧 راه‌حل‌ها:

### 1. **ایجاد فایل `.env`:**

در root directory پروژه، فایل `.env` ایجاد کنید:

```bash
# Windows
echo BOT_TOKEN=YOUR_BOT_TOKEN_HERE > .env
echo ADMIN_IDS=YOUR_ADMIN_ID_HERE >> .env

# Linux/Mac
touch .env
echo "BOT_TOKEN=YOUR_BOT_TOKEN_HERE" >> .env
echo "ADMIN_IDS=YOUR_ADMIN_ID_HERE" >> .env
```

### 2. **محتوای فایل `.env`:**

```
BOT_TOKEN=1234567890:ABCdefGHIjklMNOpqrsTUVwxyz
ADMIN_IDS=123456789,987654321
```

### 3. **دریافت توکن جدید:**

1. به [@BotFather](https://t.me/BotFather) در تلگرام بروید
2. `/newbot` را ارسال کنید
3. نام ربات را وارد کنید
4. username ربات را وارد کنید
5. توکن دریافتی را در فایل `.env` قرار دهید

### 4. **دریافت Admin ID:**

1. به [@userinfobot](https://t.me/userinfobot) بروید
2. `/start` را ارسال کنید
3. ID دریافتی را در فایل `.env` قرار دهید

## 🚀 تست ربات:

### 1. **تست اتصال:**
```bash
node test_connection.js
```

### 2. **تست ربات:**
```bash
node debug_bot.js
```

### 3. **اجرای ربات:**
```bash
node index.js
```

## 📋 مثال کامل فایل `.env`:

```
BOT_TOKEN=8024875280:AAGv3q8X8uO3BkYmNURLZnHTFoaJhOoTfQY
ADMIN_IDS=8041742380,123456789
```

## ⚠️ نکات مهم:

1. **هرگز توکن را در کد قرار ندهید**
2. **فایل `.env` را در `.gitignore` قرار دهید**
3. **توکن را با کسی به اشتراک نگذارید**
4. **اگر توکن لو رفت، از BotFather توکن جدید بگیرید**

## 🔍 بررسی مشکلات:

### اگر هنوز خطا می‌دهد:

1. **بررسی فایل `.env`:**
```bash
cat .env
```

2. **بررسی وجود فایل:**
```bash
ls -la .env
```

3. **تست توکن:**
```bash
curl "https://api.telegram.org/botYOUR_BOT_TOKEN/getMe"
```

## 🎯 هدف:

بعد از تنظیم توکن صحیح، ربات باید:
- ✅ بدون خطای 401 اجرا شود
- ✅ به دستورات پاسخ دهد
- ✅ در گروه‌ها و private chat کار کند
- ✅ تمام ویژگی‌ها فعال باشد
