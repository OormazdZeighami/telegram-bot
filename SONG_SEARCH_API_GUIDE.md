# 🎵 راهنمای تست سیستم جستجوی آهنگ با API های جدید

## ✅ بهبودهای جدید اعمال شده

### 🔧 **حل مشکل 403 Forbidden:**
- **API های رایگان** به عنوان منبع اصلی
- **Header های بهتر** برای دسترسی
- **سیستم جایگزین** چندمنبعه
- **Timeout های مناسب** برای جلوگیری از انتظار طولانی

### 🌐 **منابع جدید جستجو:**

#### **1. API های رایگان (اولویت اول):**
- **Lyrics.ovh API** - رایگان و قابل اعتماد
- **Some Random API** - API جایگزین رایگان
- **Lyrist API** - API مدرن و سریع

#### **2. جستجوی وب (اولویت دوم):**
- **Genius.com** - منبع اصلی (اگر API ها موفق نبودند)
- **Google Search** - جستجوی مستقیم در سایت‌های lyrics
- **سایت‌های مختلف** - استخراج از منابع متعدد

#### **3. پایگاه داده محلی (پشتیبان نهایی):**
- **songs.json** - آهنگ‌های ذخیره شده محلی

## 🧪 تست سیستم جدید

### **مراحل تست:**

#### **1. تست آهنگ‌های معروف:**
```
/song Imagine John Lennon
/song Yesterday Beatles
/song Bohemian Rhapsody Queen
```

#### **2. تست آهنگ‌های مدرن:**
```
/song Shape of You Ed Sheeran
/song Perfect Ed Sheeran
/song See You Again Wiz Khalifa
```

#### **3. تست آهنگ‌های مختلف:**
```
/song Hotel California Eagles
/song Wonderwall Oasis
/song Closer Chainsmokers
```

### **چک کردن لاگ‌های جدید:**

در ترمینال، این پیام‌ها را دنبال کنید:

#### **✅ موفقیت API های رایگان:**
```
 Trying free APIs first...
🎵 Trying Lyrics.ovh API...
✅ Found lyrics from Lyrics.ovh API
```

#### **✅ موفقیت API جایگزین:**
```
 Trying another free API...
✅ Found lyrics from Some Random API
```

#### **✅ موفقیت Lyrist API:**
```
 Trying Lyrist API...
✅ Found lyrics from Lyrist API
```

#### ** جستجوی وب:**
```
 Free APIs failed, trying Genius...
🔍 Searching for song: "نام آهنگ"
🌐 Search URL: https://genius.com/search?q=...
```

## 🔧 عیب‌یابی مشکلات جدید

### **مشکل 1: "API های رایگان موفق نبودند"**

#### **علل احتمالی:**
- API ها در دسترس نیستند
- نام آهنگ نادرست
- محدودیت‌های API

#### **راه‌حل:**
1. نام آهنگ را دقیق‌تر وارد کنید
2. نام هنرمند را اضافه کنید
3. از آهنگ‌های معروف استفاده کنید

### **مشکل 2: "همه منابع شکست خوردند"**

#### **علل احتمالی:**
- مشکل اتصال اینترنت
- محدودیت‌های IP
- سایت‌ها در دسترس نیستند

#### **راه‌حل:**
1. اتصال اینترنت را بررسی کنید
2. چند دقیقه صبر کنید و دوباره تلاش کنید
3. از آهنگ‌های محلی استفاده کنید

### **مشکل 3: "متن آهنگ خالی یا ناقص"**

#### **علل احتمالی:**
- API متن کامل را برنمی‌گرداند
- Selector های HTML تغییر کرده
- آهنگ فقط در بخش پولی موجود است

#### **راه‌حل:**
1. آهنگ دیگری امتحان کنید
2. از آهنگ‌های محلی استفاده کنید
3. چند دقیقه صبر کنید

## 📊 منابع جستجو (جدید)

### **1. Lyrics.ovh API:**
- **مزایا:** رایگان، سریع، قابل اعتماد
- **محدودیت‌ها:** ممکن است آهنگ‌های جدید نداشته باشد
- **استفاده:** `https://api.lyrics.ovh/v1/{songName}`

### **2. Some Random API:**
- **مزایا:** رایگان، پایگاه داده بزرگ
- **محدودیت‌ها:** ممکن است محدودیت دسترسی داشته باشد
- **استفاده:** `https://some-random-api.ml/lyrics?title={songName}`

### **3. Lyrist API:**
- **مزایا:** مدرن، سریع، API RESTful
- **محدودیت‌ها:** ممکن است آهنگ‌های خاص نداشته باشد
- **استفاده:** `https://lyrist.vercel.app/api/{songName}`

## 🎯 بهترین روش‌های استفاده (جدید)

### **برای بهترین نتایج:**

#### **1. نام‌گذاری دقیق:**
```
✅ /song Imagine John Lennon
✅ /song Bohemian Rhapsody Queen
✅ /song Shape of You Ed Sheeran
```

#### **2. آهنگ‌های معروف:**
- آهنگ‌های کلاسیک
- آهنگ‌های پاپ معروف
- آهنگ‌های راک مشهور

#### **3. صبر و حوصله:**
- جستجو ممکن است 5-15 ثانیه طول بکشد
- ترجمه نیز زمان می‌برد
- صبر کنید تا کامل شود

## 🚀 تست کامل سیستم جدید

### **مراحل تست جامع:**

#### **مرحله 1: تست API های رایگان**
```
/song Imagine John Lennon
/song Yesterday Beatles
/song Bohemian Rhapsody Queen
```

#### **مرحله 2: تست آهنگ‌های مدرن**
```
/song Shape of You Ed Sheeran
/song Perfect Ed Sheeran
/song Despacito Luis Fonsi
```

#### **مرحله 3: تست آهنگ‌های مختلف**
```
/song Hotel California Eagles
/song Wonderwall Oasis
/song Closer Chainsmokers
```

#### **مرحله 4: تست آهنگ‌های جدید**
```
/song [نام آهنگ جدید]
/song [نام هنرمند جدید]
```

## 💡 نکات مهم (جدید)

### **برای کاربران:**
- نام آهنگ را دقیق وارد کنید
- نام هنرمند را نیز اضافه کنید
- از آهنگ‌های معروف استفاده کنید
- صبر کنید تا جستجو کامل شود

### **برای توسعه‌دهندگان:**
- لاگ‌ها را بررسی کنید
- API های جدید اضافه کنید
- Error handling بهبود دهید
- Performance monitoring اضافه کنید

## 🎊 نتیجه

سیستم جستجوی آهنگ بهبود یافته شامل:
- ✅ **API های رایگان** (Lyrics.ovh, Some Random API, Lyrist)
- ✅ **جستجوی وب** (Genius, Google Search)
- ✅ **پایگاه داده محلی** (songs.json)
- ✅ **لاگ‌گذاری کامل** برای عیب‌یابی
- ✅ **مدیریت خطای بهتر**
- ✅ **Timeout های مناسب**
- ✅ **سیستم پشتیبان‌گیری** چندمنبعه

**حالا سیستم جستجوی آهنگ باید بهتر کار کند!** 🎵✨

**برای تست، آهنگ‌های معروف را امتحان کنید و لاگ‌ها را در ترمینال بررسی کنید.** 🔍📊

**اگر هنوز مشکل دارید، لاگ‌های ترمینال را بررسی کنید تا ببینیم کجا مشکل است!** 🛠️🔧

## 🔍 مثال لاگ موفق:

```
 Trying free APIs first...
🎵 Trying Lyrics.ovh API...
✅ Found lyrics from Lyrics.ovh API
 Song: Imagine - Artist: Unknown Artist
 Raw lyrics length: 1234
📋 Processed 45 lyrics lines
 Translated 45 lines to Persian
✅ Song lyrics sent successfully
```

## ❌ مثال لاگ ناموفق:

```
 Trying free APIs first...
🎵 Trying Lyrics.ovh API...
❌ Lyrics.ovh API failed: Request failed with status code 404
 Trying another free API...
❌ Some Random API failed: Request failed with status code 500
 Trying Lyrist API...
❌ Lyrist API failed: Request failed with status code 429
 Free APIs failed, trying Genius...
🔍 Searching for song: "نام آهنگ"
🌐 Search URL: https://genius.com/search?q=...
❌ Error searching song online: Request failed with status code 403
🔄 Falling back to local database...
✅ Found song in local database
```
