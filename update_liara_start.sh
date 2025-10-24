#!/bin/bash

# Update Liara start command script
echo "🔧 Updating Liara start command..."

# Check if liara.json exists
if [ ! -f "liara.json" ]; then
    echo "❌ liara.json not found"
    exit 1
fi

# Backup original liara.json
cp liara.json liara.json.backup

# Update liara.json with debug start command
cat > liara.json << EOF
{
  "platform": "node",
  "app-name": "my-telegram-bot",
  "port": 3005,
  "start": "npm run debug"
}
EOF

echo "✅ liara.json updated with debug start command"
echo "📋 New configuration:"
cat liara.json

echo ""
echo "🚀 You can now deploy to Liara with debug mode"
echo "📝 To revert to production mode, run:"
echo "   cp liara.json.backup liara.json"
