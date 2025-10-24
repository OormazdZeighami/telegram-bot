# راهنمای حل مشکل پورت روی لیارا

## 🚨 مشکل: پورت اشتباه یا listen address نادرست

### خطای دریافتی:
```
شاید پورتی که برنامه‌ی شما به آن listen می‌کند را اشتباه وارد کرده‌اید.
لازم است که برنامه‌ی شما حتما روی آدرس 0.0.0.0 اجرا شود.
```

## ✅ مشکل حل شد!

### تغییرات انجام شده:

#### 1. **تصحیح پورت:**
```javascript
// قبل:
const PORT = process.env.PORT || process.env.PORT || 3000;

// بعد:
const PORT = process.env.PORT || 3005;
```

#### 2. **تصحیح Listen Address:**
```javascript
// قبل:
app.listen(PORT, () => console.log(`Express webhook server running on port ${PORT}`));

// بعد:
app.listen(PORT, '0.0.0.0', () => console.log(`Express webhook server running on port ${PORT}`));
```

## 🔧 تنظیمات فعلی لیارا:

### 1. **liara.json:**
```json
{
  "platform": "node",
  "app-name": "my-telegram-bot",
  "port": 3005,
  "start": "npm run debug"
}
```

### 2. **package.json:**
```json
{
  "scripts": {
    "start": "node index.js",
    "debug": "node liara_debug.js",
    "test": "node test_connection.js"
  }
}
```

## 🚀 مراحل Deploy مجدد:

### 1. **Commit تغییرات:**
```bash
git add .
git commit -m "Fix: Update port to 3005 and listen address to 0.0.0.0 for Liara"
git push origin fix/new
```

### 2. **Deploy روی لیارا:**
```bash
liara deploy
```

### 3. **بررسی لاگ‌ها:**
```bash
liara logs
```

## 📋 نکات مهم:

### 1. **پورت صحیح:**
- لیارا پورت 3005 را انتظار دارد
- ربات باید روی همین پورت listen کند

### 2. **Listen Address:**
- ربات باید روی `0.0.0.0` listen کند
- نه روی `localhost` یا `127.0.0.1`

### 3. **Environment Variables:**
```
BOT_TOKEN=your_bot_token_here
ADMIN_IDS=your_admin_id_here
PORT=3005
```

## 🎯 تست ربات:

### 1. **تست اتصال:**
```bash
npm test
```

### 2. **تست دستورات:**
- `/test` - تست ساده
- `/start` - تست دستور اصلی
- `/help` - تست دستور help

### 3. **بررسی لاگ‌ها:**
- لاگ‌های debug
- لاگ‌های production
- خطاهای سیستم

## 🔍 Debug:

### 1. **بررسی پورت:**
```bash
# روی هاست:
netstat -tlnp | grep 3005
```

### 2. **بررسی Process:**
```bash
# روی هاست:
ps aux | grep node
```

### 3. **بررسی Environment:**
```bash
# روی هاست:
echo $PORT
echo $BOT_TOKEN
```

## 🎯 هدف:

بعد از اعمال این تغییرات، ربات باید:
- ✅ روی پورت صحیح (3005) اجرا شود
- ✅ روی آدرس صحیح (0.0.0.0) listen کند
- ✅ به دستورات پاسخ دهد
- ✅ تمام ویژگی‌ها فعال باشد

## 📞 اگر مشکل ادامه داشت:

### 1. **بررسی لاگ‌ها:**
```bash
liara logs --follow
```

### 2. **بررسی وضعیت:**
```bash
liara status
```

### 3. **Restart کردن:**
```bash
liara restart
```

## 🔧 نکات نهایی:

1. **پورت 3005** را همیشه استفاده کنید
2. **Listen Address 0.0.0.0** را همیشه استفاده کنید
3. **Environment Variables** را صحیح تنظیم کنید
4. **Debug Mode** را برای تست استفاده کنید
5. **Production Mode** را برای استفاده نهایی استفاده کنید
