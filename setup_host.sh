#!/bin/bash

# Host Setup Script for Telegram Bot
echo "🚀 شروع نصب و تنظیم ربات تلگرام روی هاست..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js نصب نیست. لطفاً ابتدا Node.js را نصب کنید."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm نصب نیست. لطفاً ابتدا npm را نصب کنید."
    exit 1
fi

echo "✅ npm version: $(npm --version)"

# Install dependencies
echo "📦 نصب dependencies..."
npm install

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️ فایل .env وجود ندارد. لطفاً آن را ایجاد کنید:"
    echo "BOT_TOKEN=your_bot_token_here"
    echo "ADMIN_IDS=123456789,987654321"
    echo "RATE_LIMIT_SECONDS=5"
    echo "PORT=3000"
    exit 1
fi

echo "✅ فایل .env موجود است"

# Check required JSON files
required_files=("english_words.json" "english_idioms.json" "questions.json" "quizz.json" "songs.json" "warnings.json" "quiz_results.json")

for file in "${required_files[@]}"; do
    if [ ! -f "$file" ]; then
        echo "⚠️ فایل $file وجود ندارد"
    else
        echo "✅ فایل $file موجود است"
    fi
done

# Set permissions
echo "🔐 تنظیم دسترسی‌ها..."
chmod 644 *.json
chmod 755 index.js

# Run host check
echo "🔍 اجرای بررسی هاست..."
node host_check.js

echo "✅ تنظیمات کامل شد!"
echo "🚀 برای اجرای ربات از دستور زیر استفاده کنید:"
echo "npm start"
echo "یا"
echo "node index.js"
