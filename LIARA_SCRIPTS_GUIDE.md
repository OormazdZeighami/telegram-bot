# راهنمای Script های لیارا

## 🚀 Script های موجود در package.json

### 1. **Script اصلی (Production):**
```bash
npm start
# یا
node index.js
```
**توضیح:** ربات اصلی را اجرا می‌کند - برای production استفاده می‌شود.

### 2. **Script Debug مخصوص لیارا:**
```bash
npm run debug
# یا
node liara_debug.js
```
**توضیح:** ربات را با debug code مخصوص لیارا اجرا می‌کند.

### 3. **Script تست اتصال:**
```bash
npm test
# یا
node test_connection.js
```
**توضیح:** اتصال ربات به Telegram API را تست می‌کند.

### 4. **Script Debug هاست:**
```bash
npm run host-debug
# یا
node host_debug.js
```
**توضیح:** ربات را با debug code مخصوص هاست اجرا می‌کند.

### 5. **Script اضافه کردن Debug Code:**
```bash
npm run add-debug
# یا
node add_liara_debug.js
```
**توضیح:** debug code را به index.js اضافه می‌کند.

### 6. **Script Development:**
```bash
npm run dev
# یا
nodemon index.js
```
**توضیح:** ربات را با nodemon اجرا می‌کند (auto-restart).

## 🔧 نحوه استفاده روی لیارا:

### 1. **برای Production:**
```bash
npm start
```

### 2. **برای Debug:**
```bash
npm run debug
```

### 3. **برای تست اتصال:**
```bash
npm test
```

## 📋 مراحل Debug روی لیارا:

### مرحله 1: **اضافه کردن Debug Code:**
```bash
npm run add-debug
```

### مرحله 2: **تست اتصال:**
```bash
npm test
```

### مرحله 3: **اجرای Debug Mode:**
```bash
npm run debug
```

### مرحله 4: **اجرای Production:**
```bash
npm start
```

## 🎯 دستورات تست در تلگرام:

### 1. **تست ساده:**
```
/test
```

### 2. **تست شروع:**
```
/start
```

### 3. **تست راهنما:**
```
/help
```

## 🔍 بررسی لاگ‌ها:

### 1. **لاگ‌های Debug:**
- پیام‌های دریافتی
- خطاهای polling
- خطاهای bot
- وضعیت rate limiting

### 2. **لاگ‌های Production:**
- وضعیت اتصال
- خطاهای اصلی
- عملکرد ربات

## 📞 اگر مشکل ادامه داشت:

### 1. **بررسی Environment Variables:**
```bash
echo $BOT_TOKEN
echo $ADMIN_IDS
```

### 2. **تست اتصال:**
```bash
npm test
```

### 3. **اجرای Debug Mode:**
```bash
npm run debug
```

### 4. **بررسی لاگ‌ها:**
- لاگ‌های debug
- لاگ‌های production
- خطاهای سیستم

## 🎯 هدف:

بعد از استفاده از این script ها، ربات باید:
- ✅ در debug mode کار کند
- ✅ در production mode کار کند
- ✅ به دستورات پاسخ دهد
- ✅ تمام ویژگی‌ها فعال باشد

## 🔧 نکات مهم:

1. **برای Debug:** از `npm run debug` استفاده کنید
2. **برای Production:** از `npm start` استفاده کنید
3. **برای تست:** از `npm test` استفاده کنید
4. **برای اضافه کردن Debug Code:** از `npm run add-debug` استفاده کنید
