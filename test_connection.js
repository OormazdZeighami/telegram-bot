#!/usr/bin/env node

// Test Telegram API Connection
console.log('🔍 تست اتصال به Telegram API...\n');

require('dotenv').config();

if (!process.env.BOT_TOKEN) {
    console.log('❌ BOT_TOKEN not set in .env file');
    process.exit(1);
}

const axios = require('axios');

async function testConnection() {
    try {
        console.log('🔄 تست اتصال به Telegram API...');
        
        const response = await axios.get(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/getMe`);
        
        if (response.data.ok) {
            console.log('✅ اتصال موفق!');
            console.log('📋 Bot Info:');
            console.log('   Name:', response.data.result.first_name);
            console.log('   Username:', response.data.result.username);
            console.log('   ID:', response.data.result.id);
            console.log('   Can Join Groups:', response.data.result.can_join_groups);
            console.log('   Can Read All Group Messages:', response.data.result.can_read_all_group_messages);
            console.log('   Supports Inline Queries:', response.data.result.supports_inline_queries);
        } else {
            console.log('❌ اتصال ناموفق:', response.data);
        }
        
    } catch (error) {
        console.log('❌ خطا در اتصال:', error.message);
        if (error.response) {
            console.log('📋 Response data:', error.response.data);
        }
        if (error.code === 'ENOTFOUND') {
            console.log('🌐 مشکل DNS: نمی‌تواند api.telegram.org را پیدا کند');
        }
        if (error.code === 'ECONNREFUSED') {
            console.log('🚫 اتصال رد شد: ممکن است firewall یا proxy مشکل باشد');
        }
    }
}

testConnection();
