#!/usr/bin/env node

// Bot Debug Script for Host Issues
console.log('🔍 شروع بررسی مشکل عدم پاسخ ربات روی هاست...\n');

const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

// Check environment variables
console.log('🔧 Environment Variables Check:');
console.log('BOT_TOKEN:', process.env.BOT_TOKEN ? '✅ Set (length: ' + process.env.BOT_TOKEN.length + ')' : '❌ Not set');
console.log('ADMIN_IDS:', process.env.ADMIN_IDS ? '✅ Set' : '❌ Not set');
console.log('PORT:', process.env.PORT || '3000 (default)');

if (!process.env.BOT_TOKEN) {
    console.log('❌ BOT_TOKEN not set. Please check your .env file.');
    process.exit(1);
}

// Initialize bot
console.log('\n🤖 Initializing bot...');
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Bot event handlers
bot.on('message', (msg) => {
    console.log('📨 Message received:', {
        from: msg.from ? msg.from.first_name || msg.from.username || 'Unknown' : 'Unknown',
        userId: msg.from ? msg.from.id : 'Unknown',
        chatId: msg.chat.id,
        text: msg.text || 'No text',
        type: msg.chat.type,
        timestamp: new Date().toISOString()
    });

    // Test response
    const chatId = msg.chat.id;
    const testMessage = `✅ ربات پاسخ می‌دهد!\n🕐 زمان: ${new Date().toLocaleString('fa-IR')}\n👤 از: ${msg.from ? msg.from.first_name || msg.from.username || 'Unknown' : 'Unknown'}`;
    
    bot.sendMessage(chatId, testMessage).then(() => {
        console.log('✅ Response sent successfully');
    }).catch((error) => {
        console.log('❌ Error sending response:', error.message);
    });
});

bot.on('polling_error', (error) => {
    console.log('❌ Polling error:', error.message);
});

bot.on('error', (error) => {
    console.log('❌ Bot error:', error.message);
});

// Test bot connection
console.log('🔗 Testing bot connection...');
bot.getMe().then((me) => {
    console.log('✅ Bot connected successfully:');
    console.log('   Name:', me.first_name);
    console.log('   Username:', me.username);
    console.log('   ID:', me.id);
    console.log('\n🎯 Bot is ready! Send a message to test.');
}).catch((error) => {
    console.log('❌ Bot connection failed:', error.message);
    process.exit(1);
});

// Keep the script running
console.log('\n⏳ Bot is running. Press Ctrl+C to stop.');
process.on('SIGINT', () => {
    console.log('\n🛑 Stopping bot...');
    bot.stopPolling();
    process.exit(0);
});
