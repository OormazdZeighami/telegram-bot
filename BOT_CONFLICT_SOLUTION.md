# 🔧 راهنمای حل مشکل تداخل ربات‌ها

## 🚨 مشکل اصلی
وقتی چندین ربات (مانند Perplexity) در یک گروه هستند، ممکن است تداخل‌هایی ایجاد شود که باعث عدم عملکرد صحیح ربات شما می‌شود.

## ✅ راه‌حل‌های پیاده‌سازی شده

### 1. **بهبود Polling Configuration**
- افزایش interval از 2 ثانیه به 3 ثانیه
- غیرفعال کردن autoStart برای کنترل بهتر
- اضافه کردن retry mechanism برای polling
- محدود کردن updates به `message` و `callback_query`

### 2. **مدیریت خطاهای Conflict**
- تشخیص خطاهای 409 Conflict
- restart خودکار polling در صورت conflict
- exponential backoff برای retry
- مدیریت بهتر rate limiting

### 3. **بهبود Rate Limiting**
- افزایش user rate limit از 1 به 2 ثانیه
- اضافه کردن global rate limiting (500ms)
- کاهش فشار روی Telegram API

### 4. **دستورات جدید برای مدیریت**
- `/restartpolling` - راه‌اندازی مجدد polling
- `/botstatus` - بررسی وضعیت ربات
- `/testadmin` - تست وضعیت ادمین

## 🛠️ نحوه استفاده

### بررسی وضعیت ربات
```
/botstatus
```
این دستور اطلاعات کاملی از وضعیت ربات نمایش می‌دهد.

### راه‌اندازی مجدد polling
```
/restartpolling
```
در صورت مشکل، این دستور polling را مجدداً راه‌اندازی می‌کند.

### تست عملکرد
```
/ping
/testadmin
```
این دستورات برای تست عملکرد ربات استفاده می‌شوند.

## 📊 ویژگی‌های بهبود یافته

### ✅ **Conflict Handling**
- تشخیص خودکار conflicts
- retry mechanism هوشمند
- exponential backoff
- graceful degradation

### ✅ **Rate Limiting**
- User-specific rate limiting
- Global rate limiting
- قابل تنظیم از طریق environment variables

### ✅ **Error Recovery**
- خودکار restart در صورت خطا
- حفظ state در طول restart
- logging بهتر برای debugging

### ✅ **Performance Optimization**
- کاهش frequency polling
- محدود کردن updates
- کش بهتر برای admin checks

## 🔍 عیب‌یابی

### مشکل: ربات کار نمی‌کند
**راه‌حل:**
1. `/botstatus` را اجرا کنید
2. `/restartpolling` را اجرا کنید
3. چند ثانیه صبر کنید
4. دوباره تست کنید

### مشکل: پیام‌های تکراری
**راه‌حل:**
- این مشکل با بهبود duplicate prevention حل شده
- اگر همچنان ادامه دارد، `/restartpolling` اجرا کنید

### مشکل: Slow response
**راه‌حل:**
- این طبیعی است و برای کاهش conflict طراحی شده
- Rate limiting از 2 ثانیه به 1 ثانیه قابل کاهش است

## ⚙️ تنظیمات پیشرفته

### Environment Variables
```bash
# Rate limiting (ثانیه)
RATE_LIMIT_SECONDS=2

# Polling interval (میلی‌ثانیه)
POLLING_INTERVAL=3000

# Bot token
BOT_TOKEN=your_token_here
```

### کاهش Rate Limiting
اگر می‌خواهید ربات سریع‌تر پاسخ دهد:
1. فایل `.env` ایجاد کنید
2. خط زیر را اضافه کنید:
```
RATE_LIMIT_SECONDS=1
```
3. ربات را مجدداً راه‌اندازی کنید

## 📈 نتایج بهبود

### قبل از بهبود:
- ❌ Conflict errors مکرر
- ❌ ربات در گروه‌های چند رباتی کار نمی‌کرد
- ❌ پیام‌های تکراری
- ❌ عدم مدیریت خطاها

### بعد از بهبود:
- ✅ مدیریت خودکار conflicts
- ✅ عملکرد پایدار در گروه‌های چند رباتی
- ✅ جلوگیری از پیام‌های تکراری
- ✅ Error recovery خودکار
- ✅ دستورات مدیریتی
- ✅ Performance بهتر

## 🎯 توصیه‌ها

### برای استفاده بهینه:
1. ربات را ادمین گروه کنید
2. از `/botstatus` برای monitoring استفاده کنید
3. در صورت مشکل، `/restartpolling` اجرا کنید
4. Rate limiting را بر اساس نیاز تنظیم کنید

### برای گروه‌های شلوغ:
- RATE_LIMIT_SECONDS را روی 3 تنظیم کنید
- POLLING_INTERVAL را روی 4000 تنظیم کنید
- از webhook mode استفاده کنید (برای production)

## 🔄 به‌روزرسانی‌های آینده
- پشتیبانی از webhook mode
- بهبود بیشتر conflict detection
- monitoring dashboard
- auto-scaling rate limiting
