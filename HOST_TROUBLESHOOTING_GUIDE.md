# راهنمای عیب‌یابی هاست - مشکل ادامه‌دار

## 🚨 مشکل: فایل‌ها روی هاست وجود ندارند

### مرحله 1: بررسی وضعیت فعلی روی هاست

```bash
# بررسی directory فعلی
pwd

# بررسی فایل‌ها
ls -la

# بررسی وضعیت git
git status
git branch -a
```

### مرحله 2: بررسی remote repository

```bash
# بررسی remote
git remote -v

# بررسی آخرین commit ها
git log --oneline -10
```

### مرحله 3: Pull کردن از branch صحیح

```bash
# اگر در branch اشتباه هستید
git checkout fix/new

# Pull کردن تغییرات
git pull origin fix/new

# بررسی فایل‌ها
ls -la *.js
ls -la *.md
```

### مرحله 4: اگر git pull کار نکرد

```bash
# Fetch کردن تغییرات
git fetch origin

# بررسی branch ها
git branch -a

# Merge کردن
git merge origin/fix/new
```

### مرحله 5: اگر فایل‌ها هنوز وجود ندارند

```bash
# بررسی محتویات repository
git ls-tree -r HEAD

# بررسی فایل‌های جدید
git show --name-only HEAD
```

## 🔧 راه‌حل‌های جایگزین

### راه‌حل 1: Clone مجدد repository

```bash
# Backup کردن فایل‌های مهم
cp .env .env.backup

# Clone مجدد
git clone https://github.com/OormazdZeighami/telegram-bot.git temp_bot
cd temp_bot

# Copy کردن فایل‌های مهم
cp .env.backup .env

# اجرای ربات
node index.js
```

### راه‌حل 2: دانلود مستقیم فایل‌ها

```bash
# دانلود فایل‌های مورد نیاز
wget https://raw.githubusercontent.com/OormazdZeighami/telegram-bot/fix/new/debug_bot.js
wget https://raw.githubusercontent.com/OormazdZeighami/telegram-bot/fix/new/test_connection.js
wget https://raw.githubusercontent.com/OormazdZeighami/telegram-bot/fix/new/clear_webhook.js
```

### راه‌حل 3: Copy کردن فایل‌ها از master

```bash
# Switch به master
git checkout master

# Pull کردن
git pull origin master

# Switch به fix/new
git checkout fix/new

# Merge کردن
git merge master
```

## 📋 فایل‌های مورد نیاز

### فایل‌های اصلی:
- ✅ `index.js` - فایل اصلی ربات
- ✅ `package.json` - dependencies
- ✅ `.env` - متغیرهای محیطی

### فایل‌های جدید:
- ✅ `debug_bot.js` - تست ربات
- ✅ `test_connection.js` - تست اتصال
- ✅ `clear_webhook.js` - پاک کردن webhook

## 🚀 تست نهایی

### 1. تست اتصال:
```bash
node test_connection.js
```

### 2. تست ربات:
```bash
node debug_bot.js
```

### 3. اجرای ربات:
```bash
node index.js
```

## 📞 اگر مشکل ادامه داشت

### خروجی‌های مورد نیاز برای debug:

```bash
# وضعیت git
git status
git branch -a
git log --oneline -5

# فایل‌های موجود
ls -la

# محتویات directory
pwd
```

### ارسال خروجی‌ها به support

لطفاً خروجی‌های زیر را ارسال کنید:
1. `git status`
2. `git branch -a`
3. `ls -la`
4. `pwd`
5. `git log --oneline -5`

## 🎯 هدف نهایی

بعد از حل مشکل، ربات باید:
- ✅ بدون خطای Rate Limiting کار کند
- ✅ به تمام دستورات پاسخ دهد
- ✅ در گروه‌ها و private chat کار کند
- ✅ تمام ویژگی‌ها فعال باشد
