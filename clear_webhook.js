#!/usr/bin/env node

// Clear Webhook Script
console.log('🔧 شروع پاک کردن webhook...\n');

require('dotenv').config();

if (!process.env.BOT_TOKEN) {
    console.log('❌ BOT_TOKEN not set in .env file');
    process.exit(1);
}

const axios = require('axios');

async function clearWebhook() {
    try {
        console.log('🔄 پاک کردن webhook...');
        
        const response = await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/deleteWebhook`);
        
        if (response.data.ok) {
            console.log('✅ Webhook successfully deleted');
            console.log('📋 Response:', response.data);
        } else {
            console.log('❌ Failed to delete webhook:', response.data);
        }
        
        console.log('\n🔄 بررسی وضعیت webhook...');
        const statusResponse = await axios.get(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/getWebhookInfo`);
        
        if (statusResponse.data.ok) {
            console.log('📋 Webhook info:', statusResponse.data.result);
        }
        
    } catch (error) {
        console.log('❌ Error:', error.message);
        if (error.response) {
            console.log('📋 Response data:', error.response.data);
        }
    }
}

clearWebhook();