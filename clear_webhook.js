// اسکریپت برای پاک کردن webhook
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.BOT_TOKEN;

if (!token) {
  console.error('❌ BOT_TOKEN در فایل .env یافت نشد!');
  process.exit(1);
}

const bot = new TelegramBot(token);

async function clearWebhook() {
  try {
    console.log('🔄 در حال پاک کردن webhook...');
    
    // حذف webhook
    const result = await bot.deleteWebHook();
    console.log('✅ Webhook با موفقیت پاک شد:', result);
    
    // بررسی وضعیت webhook
    const info = await bot.getWebHookInfo();
    console.log('\n📊 اطلاعات webhook فعلی:');
    console.log('  URL:', info.url || '(خالی)');
    console.log('  Pending updates:', info.pending_update_count);
    
    if (!info.url) {
      console.log('\n✅ ربات آماده اجرا در حالت Polling است!');
    } else {
      console.log('\n⚠️ هنوز webhook فعال است:', info.url);
    }
    
  } catch (error) {
    console.error('❌ خطا در پاک کردن webhook:', error.message);
  }
  
  process.exit(0);
}

clearWebhook();

