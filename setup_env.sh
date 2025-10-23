#!/bin/bash

# Setup .env file script
echo "🔧 Setting up .env file..."

# Check if .env exists
if [ -f ".env" ]; then
    echo "⚠️ .env file already exists"
    echo "📋 Current content:"
    cat .env
    echo ""
    read -p "Do you want to overwrite it? (y/n): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Setup cancelled"
        exit 1
    fi
fi

# Get bot token
echo "🤖 Enter your bot token (from @BotFather):"
read -p "BOT_TOKEN: " BOT_TOKEN

# Get admin IDs
echo "👤 Enter admin IDs (comma-separated):"
read -p "ADMIN_IDS: " ADMIN_IDS

# Create .env file
echo "📝 Creating .env file..."
cat > .env << EOF
BOT_TOKEN=$BOT_TOKEN
ADMIN_IDS=$ADMIN_IDS
EOF

echo "✅ .env file created successfully!"
echo "📋 Content:"
cat .env

# Test connection
echo "🔍 Testing connection..."
node test_connection.js
