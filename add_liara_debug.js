const fs = require('fs');
const path = require('path');

// Read the current index.js file
const indexPath = path.join(__dirname, 'index.js');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Liara-specific debug code to add
const liaraDebugCode = `
// ===== LIARA DEBUG CODE START =====
// Add comprehensive logging for debugging on Liara
bot.on('message', (msg) => {
  console.log('📨 Message received on Liara:', {
    from: msg.from?.first_name || 'Unknown',
    userId: msg.from?.id,
    chatId: msg.chat.id,
    text: msg.text,
    type: msg.chat.type,
    timestamp: new Date().toISOString()
  });
});

bot.on('polling_error', (error) => {
  console.error('❌ Polling error on Liara:', error.message);
});

bot.on('error', (error) => {
  console.error('❌ Bot error on Liara:', error.message);
});

// Test command for debugging on Liara
bot.onText(/^\/test/, (msg) => {
  console.log('✅ Test command received on Liara:', msg.text);
  bot.sendMessage(msg.chat.id, '✅ Test command working on Liara!')
    .then(() => {
      console.log('✅ Test message sent successfully on Liara');
    })
    .catch((error) => {
      console.error('❌ Error sending test message on Liara:', error.message);
    });
});

// Enhanced message delay for rate limiting on Liara
const MESSAGE_DELAY = 2000; // 2 seconds
let lastMessageTime = 0;

async function addMessageDelay() {
  const now = Date.now();
  const timeSinceLastMessage = now - lastMessageTime;
  if (timeSinceLastMessage < MESSAGE_DELAY) {
    const delay = MESSAGE_DELAY - timeSinceLastMessage;
    console.log(\`⏳ Adding \${delay}ms delay to prevent rate limiting on Liara...\`);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  lastMessageTime = Date.now();
}

// Log Liara environment info
console.log('🌐 Liara Environment Info:');
console.log('  PORT:', process.env.PORT || '3005');
console.log('  NODE_ENV:', process.env.NODE_ENV || 'production');
console.log('  Platform: Liara');
// ===== LIARA DEBUG CODE END =====
`;

// Find the position to insert debug code (after bot creation)
const botCreationPattern = /const bot = new TelegramBot\(BOT_TOKEN, \{ polling: true \}\);?/;
const match = indexContent.match(botCreationPattern);

if (match) {
  const insertPosition = match.index + match[0].length;
  
  // Insert debug code after bot creation
  const newContent = indexContent.slice(0, insertPosition) + liaraDebugCode + indexContent.slice(insertPosition);
  
  // Write the modified content back to the file
  fs.writeFileSync(indexPath, newContent, 'utf8');
  
  console.log('✅ Liara debug code added successfully to index.js');
  console.log('📋 Added features for Liara:');
  console.log('  - Message logging for Liara');
  console.log('  - Error handling for Liara');
  console.log('  - Test command (/test) for Liara');
  console.log('  - Enhanced rate limiting for Liara');
  console.log('  - Liara environment info logging');
  console.log('');
  console.log('🚀 You can now deploy to Liara and test the bot');
} else {
  console.error('❌ Could not find bot creation pattern in index.js');
  console.log('📝 Please add the debug code manually to your index.js file');
}
