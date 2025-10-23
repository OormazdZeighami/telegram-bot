@echo off
echo 🚀 شروع نصب و تنظیم ربات تلگرام روی هاست...

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js نصب نیست. لطفاً ابتدا Node.js را نصب کنید.
    pause
    exit /b 1
)

echo ✅ Node.js version:
node --version

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo ❌ npm نصب نیست. لطفاً ابتدا npm را نصب کنید.
    pause
    exit /b 1
)

echo ✅ npm version:
npm --version

REM Install dependencies
echo 📦 نصب dependencies...
npm install

REM Check if .env file exists
if not exist ".env" (
    echo ⚠️ فایل .env وجود ندارد. لطفاً آن را ایجاد کنید:
    echo BOT_TOKEN=your_bot_token_here
    echo ADMIN_IDS=123456789,987654321
    echo RATE_LIMIT_SECONDS=5
    echo PORT=3000
    pause
    exit /b 1
)

echo ✅ فایل .env موجود است

REM Run host check
echo 🔍 اجرای بررسی هاست...
node host_check.js

echo ✅ تنظیمات کامل شد!
echo 🚀 برای اجرای ربات از دستور زیر استفاده کنید:
echo npm start
echo یا
echo node index.js
pause
