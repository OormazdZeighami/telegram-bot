#!/bin/bash

# Download missing files script
echo "🔄 دانلود فایل‌های مورد نیاز..."

# Create backup of .env if exists
if [ -f ".env" ]; then
    echo "📋 Creating backup of .env..."
    cp .env .env.backup
fi

# Download debug_bot.js
echo "📥 Downloading debug_bot.js..."
wget -O debug_bot.js https://raw.githubusercontent.com/OormazdZeighami/telegram-bot/fix/new/debug_bot.js

# Download test_connection.js
echo "📥 Downloading test_connection.js..."
wget -O test_connection.js https://raw.githubusercontent.com/OormazdZeighami/telegram-bot/fix/new/test_connection.js

# Download clear_webhook.js
echo "📥 Downloading clear_webhook.js..."
wget -O clear_webhook.js https://raw.githubusercontent.com/OormazdZeighami/telegram-bot/fix/new/clear_webhook.js

# Download updated index.js
echo "📥 Downloading updated index.js..."
wget -O index.js https://raw.githubusercontent.com/OormazdZeighami/telegram-bot/fix/new/index.js

# Restore .env if backup exists
if [ -f ".env.backup" ]; then
    echo "📋 Restoring .env from backup..."
    cp .env.backup .env
    rm .env.backup
fi

# Make files executable
chmod +x debug_bot.js
chmod +x test_connection.js
chmod +x clear_webhook.js

# Check if files exist
echo "📁 Checking downloaded files..."
if [ -f "debug_bot.js" ]; then
    echo "✅ debug_bot.js downloaded successfully"
else
    echo "❌ debug_bot.js download failed"
fi

if [ -f "test_connection.js" ]; then
    echo "✅ test_connection.js downloaded successfully"
else
    echo "❌ test_connection.js download failed"
fi

if [ -f "clear_webhook.js" ]; then
    echo "✅ clear_webhook.js downloaded successfully"
else
    echo "❌ clear_webhook.js download failed"
fi

if [ -f "index.js" ]; then
    echo "✅ index.js downloaded successfully"
else
    echo "❌ index.js download failed"
fi

echo "✅ Download completed!"
echo "🚀 You can now run: node index.js"
