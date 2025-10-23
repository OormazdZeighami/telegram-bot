# راهنمای به‌روزرسانی ربات روی هاست

## 🔄 مراحل به‌روزرسانی

### 1. **Pull تغییرات از GitHub**
```bash
# روی هاست اجرا کنید:
git pull origin fix/new
```

### 2. **نصب dependencies جدید (اگر نیاز است)**
```bash
npm install
```

### 3. **تست اتصال**
```bash
node test_connection.js
```

### 4. **تست ربات**
```bash
node debug_bot.js
```

### 5. **اجرای ربات اصلی**
```bash
node index.js
```

## 🚨 اگر فایل‌ها وجود ندارند

### بررسی فایل‌های موجود:
```bash
ls -la
```

### بررسی محتویات directory:
```bash
ls -la *.js
ls -la *.md
```

## 🔧 اگر git pull کار نکرد

### 1. **بررسی وضعیت git:**
```bash
git status
git branch
```

### 2. **Pull از branch صحیح:**
```bash
git fetch origin
git checkout fix/new
git pull origin fix/new
```

### 3. **اگر conflict وجود دارد:**
```bash
git stash
git pull origin fix/new
git stash pop
```

## 📋 فایل‌های جدید اضافه شده

- ✅ `debug_bot.js` - Script تست کامل ربات
- ✅ `test_connection.js` - تست اتصال به Telegram API
- ✅ `clear_webhook.js` - پاک کردن webhook
- ✅ `RATE_LIMITING_FIX_GUIDE.md` - راهنمای Rate Limiting
- ✅ `HOST_RESPONSE_FIX_GUIDE.md` - راهنمای برطرف کردن مشکلات هاست

## 🚀 مراحل تست

### 1. **تست اتصال:**
```bash
node test_connection.js
```
**خروجی مورد انتظار:**
```
✅ اتصال موفق!
📋 Bot Info:
   Name: Quiz and translator
   Username: test6909Bot
   ID: 8024875280
```

### 2. **تست ربات:**
```bash
node debug_bot.js
```
**خروجی مورد انتظار:**
```
✅ Bot connected successfully:
   Name: Quiz and translator
   Username: test6909Bot
   ID: 8024875280

🎯 Bot is ready! Send a message to test.
```

### 3. **اجرای ربات اصلی:**
```bash
node index.js
```

## 🔍 Debug کردن مشکلات

### اگر فایل‌ها پیدا نمی‌شوند:
```bash
# بررسی مسیر فعلی
pwd

# بررسی فایل‌ها
ls -la

# بررسی git status
git status
```

### اگر git pull کار نمی‌کند:
```bash
# بررسی remote
git remote -v

# بررسی branch ها
git branch -a

# Pull دستی
git fetch origin fix/new
git merge origin/fix/new
```

## 📞 اگر مشکل ادامه داشت

1. **خروجی `git status` را بررسی کنید**
2. **خروجی `ls -la` را بررسی کنید**
3. **خروجی `git branch -a` را بررسی کنید**
4. **از support host کمک بگیرید**

## 🎯 هدف نهایی

بعد از به‌روزرسانی، ربات باید:
- ✅ بدون خطای Rate Limiting کار کند
- ✅ به تمام دستورات پاسخ دهد
- ✅ در گروه‌ها و private chat کار کند
- ✅ تمام ویژگی‌ها فعال باشد
