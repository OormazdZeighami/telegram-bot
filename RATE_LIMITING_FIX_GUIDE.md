# راهنمای برطرف کردن مشکل Rate Limiting

## 🚨 مشکل اصلی
ربات روی هاست کار می‌کند اما به دلیل Rate Limiting (محدودیت تعداد درخواست) پاسخ نمی‌دهد.

### خطای مشاهده شده:
```
❌ Error sending response: ETELEGRAM: 429 Too Many Requests: retry after 5
```

## 🔧 راه‌حل‌های اعمال شده

### 1. **Rate Limiting Protection در safeSendMessage**
```javascript
// Handle rate limiting
if (error.response?.statusCode === 429) {
  console.log('⚠️ Rate limited, waiting...');
  const retryAfter = error.response?.body?.parameters?.retry_after || 5;
  console.log(`⏳ Waiting ${retryAfter} seconds before retry...`);
  await new Promise(resolve => setTimeout(resolve, retryAfter * 1000));
  // Retry sending message
}
```

### 2. **Message Delay بین پیام‌ها**
```javascript
const MESSAGE_DELAY = 1000; // 1 second delay between messages

async function addMessageDelay() {
  const now = Date.now();
  const timeSinceLastMessage = now - lastMessageTime;
  if (timeSinceLastMessage < MESSAGE_DELAY) {
    const delay = MESSAGE_DELAY - timeSinceLastMessage;
    console.log(`⏳ Adding ${delay}ms delay to prevent rate limiting...`);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  lastMessageTime = Date.now();
}
```

### 3. **Rate Limiting در User Level**
```javascript
const RATE_LIMIT_SECONDS = parseInt(process.env.RATE_LIMIT_SECONDS || '2', 10);
```

## 🚀 نحوه استفاده

### 1. **اجرای ربات با تنظیمات جدید**
```bash
node index.js
```

### 2. **تنظیم متغیرهای محیطی**
در فایل `.env`:
```env
RATE_LIMIT_SECONDS=3
```

### 3. **بررسی logs**
```bash
# اگر از PM2 استفاده می‌کنید:
pm2 logs

# یا:
tail -f logs/bot.log
```

## 🔍 علائم بهبود

### ✅ **قبل از اصلاح:**
```
❌ Error sending response: ETELEGRAM: 429 Too Many Requests: retry after 5
```

### ✅ **بعد از اصلاح:**
```
⏳ Adding 500ms delay to prevent rate limiting...
⚠️ Rate limited, waiting...
⏳ Waiting 5 seconds before retry...
✅ Response sent successfully
```

## 📋 تنظیمات پیشنهادی

### 1. **برای هاست‌های کم‌قدرت:**
```env
RATE_LIMIT_SECONDS=5
MESSAGE_DELAY=2000
```

### 2. **برای هاست‌های قوی:**
```env
RATE_LIMIT_SECONDS=2
MESSAGE_DELAY=1000
```

### 3. **برای گروه‌های پرترافیک:**
```env
RATE_LIMIT_SECONDS=3
MESSAGE_DELAY=1500
```

## 🛠️ تنظیمات پیشرفته

### 1. **PM2 Configuration**
```json
{
  "apps": [{
    "name": "telegram-bot",
    "script": "index.js",
    "instances": 1,
    "autorestart": true,
    "max_memory_restart": "1G",
    "env": {
      "RATE_LIMIT_SECONDS": "3",
      "MESSAGE_DELAY": "1500"
    }
  }]
}
```

### 2. **Docker Configuration**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ENV RATE_LIMIT_SECONDS=3
ENV MESSAGE_DELAY=1500
EXPOSE 3000
CMD ["node", "index.js"]
```

## 🔍 Debug و Monitoring

### 1. **بررسی Rate Limiting**
```bash
# اجرای debug script
node debug_bot.js

# بررسی logs
grep "Rate limited" logs/bot.log
```

### 2. **بررسی Performance**
```bash
# بررسی memory usage
ps aux | grep node

# بررسی network connections
netstat -tulpn | grep :3000
```

## ⚠️ نکات مهم

1. **هرگز Rate Limiting را غیرفعال نکنید** - این کار باعث ban شدن ربات می‌شود
2. **تنظیمات را به تدریج تغییر دهید** - تغییرات ناگهانی ممکن است مشکل ایجاد کند
3. **Logs را مرتباً بررسی کنید** - برای شناسایی مشکلات احتمالی
4. **از PM2 یا Docker استفاده کنید** - برای مدیریت بهتر process

## 🆘 اگر مشکل ادامه داشت

1. **Rate Limiting را افزایش دهید:**
   ```env
   RATE_LIMIT_SECONDS=10
   MESSAGE_DELAY=3000
   ```

2. **Logs را بررسی کنید:**
   ```bash
   node debug_bot.js
   ```

3. **از support host کمک بگیرید**

4. **Bot token را بررسی کنید**

## 📞 پشتیبانی

اگر مشکل ادامه داشت:
1. خروجی `node debug_bot.js` را ارسال کنید
2. Logs ربات را بررسی کنید
3. تنظیمات host را چک کنید
4. از support host کمک بگیرید
