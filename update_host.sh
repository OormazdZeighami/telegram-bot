#!/bin/bash

# Host Update Script
echo "🔄 شروع به‌روزرسانی ربات روی هاست..."

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    echo "❌ این directory یک git repository نیست"
    exit 1
fi

# Check current branch
echo "📋 Current branch:"
git branch

# Fetch latest changes
echo "🔄 Fetching latest changes..."
git fetch origin

# Pull changes from fix/new branch
echo "🔄 Pulling changes from fix/new branch..."
git pull origin fix/new

# Check if files exist
echo "📁 Checking files..."
if [ -f "debug_bot.js" ]; then
    echo "✅ debug_bot.js exists"
else
    echo "❌ debug_bot.js not found"
fi

if [ -f "test_connection.js" ]; then
    echo "✅ test_connection.js exists"
else
    echo "❌ test_connection.js not found"
fi

if [ -f "clear_webhook.js" ]; then
    echo "✅ clear_webhook.js exists"
else
    echo "❌ clear_webhook.js not found"
fi

# Install dependencies if needed
echo "📦 Installing dependencies..."
npm install

# Test connection
echo "🔍 Testing connection..."
node test_connection.js

echo "✅ Update completed!"
echo "🚀 You can now run: node index.js"
