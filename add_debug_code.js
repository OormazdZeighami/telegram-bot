const fs = require('fs');
const path = require('path');

// Read the current index.js file
const indexPath = path.join(__dirname, 'index.js');
let indexContent = fs.readFileSync(indexPath, 'utf8');

// Debug code to add
const debugCode = `
// ===== DEBUG CODE START =====
// Add comprehensive logging for debugging
bot.on('message', (msg) => {
  console.log('📨 Message received:', {
    from: msg.from?.first_name || 'Unknown',
    userId: msg.from?.id,
    chatId: msg.chat.id,
    text: msg.text,
    type: msg.chat.type,
    timestamp: new Date().toISOString()
  });
});

bot.on('polling_error', (error) => {
  console.error('❌ Polling error:', error.message);
});

bot.on('error', (error) => {
  console.error('❌ Bot error:', error.message);
});

// Test command for debugging
bot.onText(/^\/test/, (msg) => {
  console.log('✅ Test command received:', msg.text);
  bot.sendMessage(msg.chat.id, '✅ Test command working!')
    .then(() => {
      console.log('✅ Test message sent successfully');
    })
    .catch((error) => {
      console.error('❌ Error sending test message:', error.message);
    });
});

// Enhanced message delay for rate limiting
const MESSAGE_DELAY = 2000; // 2 seconds
let lastMessageTime = 0;

async function addMessageDelay() {
  const now = Date.now();
  const timeSinceLastMessage = now - lastMessageTime;
  if (timeSinceLastMessage < MESSAGE_DELAY) {
    const delay = MESSAGE_DELAY - timeSinceLastMessage;
    console.log(\`⏳ Adding \${delay}ms delay to prevent rate limiting...\`);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  lastMessageTime = Date.now();
}
// ===== DEBUG CODE END =====
`;

// Find the position to insert debug code (after bot creation)
const botCreationPattern = /const bot = new TelegramBot\(BOT_TOKEN, \{ polling: true \}\);?/;
const match = indexContent.match(botCreationPattern);

if (match) {
  const insertPosition = match.index + match[0].length;
  
  // Insert debug code after bot creation
  const newContent = indexContent.slice(0, insertPosition) + debugCode + indexContent.slice(insertPosition);
  
  // Write the modified content back to the file
  fs.writeFileSync(indexPath, newContent, 'utf8');
  
  console.log('✅ Debug code added successfully to index.js');
  console.log('📋 Added features:');
  console.log('  - Message logging');
  console.log('  - Error handling');
  console.log('  - Test command (/test)');
  console.log('  - Enhanced rate limiting');
  console.log('');
  console.log('🚀 You can now run: node index.js');
} else {
  console.error('❌ Could not find bot creation pattern in index.js');
  console.log('📝 Please add the debug code manually to your index.js file');
}
