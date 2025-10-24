# راهنمای حل مشکل عدم پاسخ ربات روی لیارا

## 🚨 مشکل: ربات روی لیارا اجرا می‌شود اما به دستورات پاسخ نمی‌دهد

### تنظیمات فعلی:
- **Platform:** Node.js
- **App Name:** my-telegram-bot
- **Port:** 3005
- **Start Command:** `node index.js`

## 🔍 تشخیص مشکل:

### از لاگ‌های ارائه شده:
```
Bot connected as @TestQuizzForGroupBot (id: 7132943895)
ℹ️ Skipping webhook check - using polling mode
Failed to set webhook: ETELEGRAM: 400 Bad Request: bad webhook: Failed to resolve host: Name or service not known
```

### علل احتمالی:
1. **مشکل در Polling Mode** - ربات پیام‌ها را دریافت نمی‌کند
2. **مشکل در Event Handlers** - command handlers فعال نیستند
3. **مشکل در Rate Limiting** - پیام‌ها با delay ارسال می‌شوند
4. **مشکل در Environment Variables** - متغیرهای محیطی صحیح نیستند

## 🔧 راه‌حل‌های فوری:

### 1. **اضافه کردن Debug Code به index.js:**

در ابتدای فایل `index.js` بعد از ایجاد bot instance، این کد را اضافه کنید:

```javascript
// ===== LIARA DEBUG CODE START =====
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
    console.log(`⏳ Adding ${delay}ms delay to prevent rate limiting...`);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
  lastMessageTime = Date.now();
}
// ===== LIARA DEBUG CODE END =====
```

### 2. **بررسی Environment Variables:**

در پنل لیارا، متغیرهای محیطی زیر را بررسی کنید:

```
BOT_TOKEN=your_bot_token_here
ADMIN_IDS=your_admin_id_here
```

### 3. **تست ربات:**

بعد از اضافه کردن debug code:

```bash
# روی لیارا اجرا کنید:
node index.js
```

### 4. **تست دستورات:**

در تلگرام این دستورات را ارسال کنید:
- `/test` - تست ساده
- `/start` - تست دستور اصلی
- `/help` - تست دستور help

## 🚀 مراحل Debug:

### 1. **بررسی لاگ‌ها:**
- آیا پیام‌ها دریافت می‌شوند؟
- آیا command handlers فعال هستند؟
- آیا error هایی وجود دارد؟

### 2. **تست دستورات:**
- `/test` - تست ساده
- `/start` - تست دستور اصلی
- `/help` - تست دستور help

### 3. **بررسی Rate Limiting:**
- آیا delay بین پیام‌ها کافی است؟
- آیا 429 error دریافت می‌شود؟

## 📋 تنظیمات لیارا:

### 1. **Environment Variables:**
```
BOT_TOKEN=your_bot_token_here
ADMIN_IDS=your_admin_id_here
```

### 2. **Port Configuration:**
```json
{
  "platform": "node",
  "app-name": "my-telegram-bot",
  "port": 3005
}
```

### 3. **Start Command:**
```json
{
  "scripts": {
    "start": "node index.js"
  }
}
```

## 🔍 مراحل Debug:

### 1. **بررسی لاگ‌ها:**
- آیا پیام‌ها دریافت می‌شوند؟
- آیا command handlers فعال هستند؟
- آیا error هایی وجود دارد؟

### 2. **تست دستورات:**
- `/test` - تست ساده
- `/start` - تست دستور اصلی
- `/help` - تست دستور help

### 3. **بررسی Rate Limiting:**
- آیا delay بین پیام‌ها کافی است؟
- آیا 429 error دریافت می‌شود؟

## 🎯 هدف:

بعد از اعمال این راه‌حل‌ها، ربات باید:
- ✅ پیام‌ها را دریافت کند
- ✅ به دستورات پاسخ دهد
- ✅ در گروه‌ها و private chat کار کند
- ✅ تمام ویژگی‌ها فعال باشد

## 📞 اگر مشکل ادامه داشت:

لطفاً خروجی‌های زیر را ارسال کنید:
1. لاگ‌های کامل ربات بعد از اضافه کردن debug code
2. نتیجه تست دستور `/test`
3. هر error یا warning که در لاگ‌ها نمایش داده می‌شود
4. تنظیمات Environment Variables در پنل لیارا

## 🔧 نکات مهم برای لیارا:

1. **Environment Variables** را در پنل لیارا تنظیم کنید
2. **Port 3005** را در نظر بگیرید
3. **Debug Code** را اضافه کنید
4. **لاگ‌ها** را بررسی کنید
5. **دستورات** را تست کنید
