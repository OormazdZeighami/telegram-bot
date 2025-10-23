# راهنمای کامل Deployment روی هاست

## 🔧 مشکلات احتمالی و راه‌حل‌ها

### 1. متغیرهای محیطی (.env)
ربات نیاز به فایل `.env` دارد که شامل موارد زیر است:

```env
BOT_TOKEN=your_bot_token_here
ADMIN_IDS=123456789,987654321
RATE_LIMIT_SECONDS=5
WEBHOOK_URL=https://yourdomain.com
PORT=3000
```

### 2. Dependencies
مطمئن شوید که تمام dependencies نصب شده‌اند:

```bash
npm install
```

### 3. Node.js Version
مطمئن شوید که نسخه Node.js روی هاست مناسب است (حداقل v16):

```bash
node --version
```

### 4. فایل‌های ضروری
مطمئن شوید که فایل‌های زیر موجود هستند:
- `index.js` ✅
- `package.json` ✅
- `english_words.json` ✅
- `english_idioms.json` ✅
- `questions.json` ✅
- `quizz.json` ✅
- `songs.json` ✅
- `warnings.json` ✅
- `quiz_results.json` ✅

### 5. دسترسی‌های فایل
مطمئن شوید که Node.js دسترسی خواندن/نوشتن به فایل‌ها دارد:

```bash
chmod 644 *.json
chmod 755 index.js
```

### 6. Webhook vs Polling
ربات از polling mode استفاده می‌کند. اگر هاست webhook می‌خواهد، باید کد تغییر کند.

### 7. Port Configuration
ربات روی port 3000 اجرا می‌شود. مطمئن شوید که این port در دسترس است.

### 8. Memory و CPU
ربات ممکن است به memory بیشتری نیاز داشته باشد. بررسی کنید:
- RAM: حداقل 512MB
- CPU: حداقل 1 core

### 9. Logs
برای debug کردن، logs را بررسی کنید:

```bash
npm start
# یا
node index.js
```

### 10. PM2 (اختیاری)
برای مدیریت بهتر process:

```bash
npm install -g pm2
pm2 start index.js --name telegram-bot
pm2 logs telegram-bot
```

## 🚨 مشکلات رایج

### خطای "Cannot find module"
- `npm install` را اجرا کنید
- `node_modules` را بررسی کنید

### خطای "Permission denied"
- دسترسی‌های فایل را بررسی کنید
- با sudo اجرا کنید

### خطای "Port already in use"
- port دیگری انتخاب کنید
- process قبلی را kill کنید

### خطای "ENOENT"
- فایل‌های JSON وجود ندارند
- مسیر فایل‌ها را بررسی کنید

## 📋 Checklist برای Deployment

- [ ] فایل `.env` ایجاد شده
- [ ] `npm install` اجرا شده
- [ ] تمام فایل‌های JSON موجود هستند
- [ ] Node.js version مناسب است
- [ ] Port 3000 در دسترس است
- [ ] دسترسی‌های فایل درست است
- [ ] BOT_TOKEN معتبر است
- [ ] ADMIN_IDS تنظیم شده

## 🔍 Debug Commands

```bash
# بررسی Node.js version
node --version

# بررسی dependencies
npm list

# اجرای ربات با debug
DEBUG=* node index.js

# بررسی processes
ps aux | grep node

# بررسی ports
netstat -tulpn | grep :3000
```
