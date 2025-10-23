# راهنمای برطرف کردن مشکل عدم پاسخ ربات روی هاست

## 🚨 مشکل
ربات روی هاست اجرا می‌شود اما به پیام‌ها پاسخ نمی‌دهد.

## 🔍 تشخیص مشکل

### 1. اجرای Bot Debug Script
```bash
node debug_bot.js
```

### 2. بررسی خروجی
اگر ربات پیام‌ها را دریافت می‌کند اما پاسخ نمی‌دهد، مشکل در کد است.
اگر ربات اصلاً پیام‌ها را دریافت نمی‌کند، مشکل در اتصال است.

## 🔧 راه‌حل‌های احتمالی

### 1. مشکل Webhook vs Polling

#### اگر هاست از Webhook استفاده می‌کند:
```javascript
// در index.js، polling را غیرفعال کنید:
const bot = new TelegramBot(process.env.BOT_TOKEN, { 
    polling: false  // تغییر از true به false
});

// Webhook را تنظیم کنید:
bot.setWebHook(process.env.WEBHOOK_URL);
```

#### اگر هاست از Polling استفاده می‌کند:
```javascript
// در index.js، polling را فعال کنید:
const bot = new TelegramBot(process.env.BOT_TOKEN, { 
    polling: true  // اطمینان از true بودن
});
```

### 2. مشکل Port و Firewall

#### بررسی Port:
```bash
# بررسی port های باز
netstat -tulpn | grep :3000

# یا
ss -tulpn | grep :3000
```

#### تنظیم Firewall:
```bash
# Ubuntu/Debian
sudo ufw allow 3000

# CentOS/RHEL
sudo firewall-cmd --add-port=3000/tcp --permanent
sudo firewall-cmd --reload
```

### 3. مشکل Network و Proxy

#### اگر پشت Proxy هستید:
```javascript
const bot = new TelegramBot(process.env.BOT_TOKEN, {
    polling: true,
    request: {
        proxy: 'http://proxy-server:port'
    }
});
```

### 4. مشکل Rate Limiting

#### بررسی Rate Limits:
```javascript
// در index.js، rate limiting را غیرفعال کنید:
const bot = new TelegramBot(process.env.BOT_TOKEN, {
    polling: true,
    request: {
        agentOptions: {
            keepAlive: true,
            family: 4
        }
    }
});
```

### 5. مشکل Error Handling

#### اضافه کردن Error Handling:
```javascript
bot.on('error', (error) => {
    console.log('Bot Error:', error);
});

bot.on('polling_error', (error) => {
    console.log('Polling Error:', error);
});
```

## 🔍 Debug Steps

### Step 1: Test Bot Connection
```bash
node debug_bot.js
```

### Step 2: Check Logs
```bash
# اگر از PM2 استفاده می‌کنید:
pm2 logs

# یا:
tail -f logs/bot.log
```

### Step 3: Check Network
```bash
# تست اتصال به Telegram API:
curl -X GET "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getMe"
```

### Step 4: Check Environment
```bash
# بررسی متغیرهای محیطی:
env | grep BOT_TOKEN
env | grep ADMIN_IDS
```

## 🚀 راه‌حل‌های سریع

### 1. Restart Bot
```bash
# متوقف کردن ربات
pkill -f "node index.js"

# اجرای مجدد
node index.js
```

### 2. Clear Webhook
```bash
# اگر webhook تنظیم شده، آن را پاک کنید:
curl -X POST "https://api.telegram.org/bot<YOUR_BOT_TOKEN>/deleteWebhook"
```

### 3. Update Bot Token
```bash
# اگر token مشکل دارد، آن را به‌روزرسانی کنید:
# در فایل .env:
BOT_TOKEN=new_token_here
```

## 🔧 تنظیمات پیشرفته

### 1. PM2 Configuration
```json
{
  "apps": [{
    "name": "telegram-bot",
    "script": "index.js",
    "instances": 1,
    "autorestart": true,
    "watch": false,
    "max_memory_restart": "1G",
    "env": {
      "NODE_ENV": "production"
    }
  }]
}
```

### 2. Docker Configuration
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]
```

## 📋 Checklist

- [ ] Bot debug script اجرا شده
- [ ] Webhook/Polling تنظیم شده
- [ ] Port باز است
- [ ] Firewall تنظیم شده
- [ ] Proxy تنظیم شده (اگر نیاز است)
- [ ] Error handling اضافه شده
- [ ] Logs بررسی شده
- [ ] Network connection تست شده

## 🆘 اگر مشکل حل نشد

1. **Logs را بررسی کنید**
2. **Bot token را چک کنید**
3. **Network connectivity را تست کنید**
4. **Host provider را بررسی کنید**
5. **از support host کمک بگیرید**

## 📞 پشتیبانی

اگر مشکل ادامه داشت:
1. خروجی `node debug_bot.js` را ارسال کنید
2. Logs ربات را بررسی کنید
3. تنظیمات host را چک کنید
