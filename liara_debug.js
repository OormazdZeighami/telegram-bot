const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// Load environment variables
const BOT_TOKEN = process.env.BOT_TOKEN;
const ADMIN_IDS = process.env.ADMIN_IDS ? process.env.ADMIN_IDS.split(',').map(id => parseInt(id.trim())) : [];

console.log('🔍 Liara Debug Script Starting...');
console.log('📋 Environment Check:');
console.log('  BOT_TOKEN:', BOT_TOKEN ? '✅ Set' : '❌ Missing');
console.log('  ADMIN_IDS:', ADMIN_IDS.length > 0 ? '✅ Set' : '❌ Missing');
console.log('  PORT:', process.env.PORT || '3005');
console.log('  NODE_ENV:', process.env.NODE_ENV || 'production');

if (!BOT_TOKEN) {
  console.error('❌ BOT_TOKEN not found in environment variables');
  console.log('📝 Please set BOT_TOKEN in Liara panel');
  process.exit(1);
}

// Create bot instance
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

// Add comprehensive logging
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

// Test command
bot.onText(/^\/test/, (msg) => {
  console.log('✅ Test command received:', msg.text);
  bot.sendMessage(msg.chat.id, '✅ Test command working on Liara!')
    .then(() => {
      console.log('✅ Test message sent successfully');
    })
    .catch((error) => {
      console.error('❌ Error sending test message:', error.message);
    });
});

// Start command
bot.onText(/^\/start/, (msg) => {
  console.log('✅ Start command received:', msg.text);
  bot.sendMessage(msg.chat.id, '🤖 Bot is working on Liara! Send /test to verify.')
    .then(() => {
      console.log('✅ Start message sent successfully');
    })
    .catch((error) => {
      console.error('❌ Error sending start message:', error.message);
    });
});

// Help command
bot.onText(/^\/help/, (msg) => {
  console.log('✅ Help command received:', msg.text);
  bot.sendMessage(msg.chat.id, '📋 Bot is responding to commands on Liara!')
    .then(() => {
      console.log('✅ Help message sent successfully');
    })
    .catch((error) => {
      console.error('❌ Error sending help message:', error.message);
    });
});

// Get bot info
bot.getMe()
  .then((me) => {
    console.log('✅ Bot connected successfully on Liara:');
    console.log('  Name:', me.first_name);
    console.log('  Username:', me.username);
    console.log('  ID:', me.id);
    console.log('');
    console.log('🎯 Bot is ready on Liara! Send a message to test.');
    console.log('📝 Test commands: /start, /help, /test');
    console.log('🌐 Platform: Liara');
    console.log('🔌 Port: 3005');
  })
  .catch((error) => {
    console.error('❌ Error getting bot info:', error.message);
  });

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down bot on Liara...');
  bot.stopPolling();
  process.exit(0);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
  console.error('❌ Uncaught Exception:', error.message);
  process.exit(1);
});
