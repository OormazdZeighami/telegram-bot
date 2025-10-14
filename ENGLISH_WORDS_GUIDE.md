# 📚 راهنمای کلمات انگلیسی و دستورات جدید

## ✅ ویژگی‌های اضافه شده

### 1. **پایگاه داده کلمات انگلیسی**
- فایل `english_words.json` با تمام کلمات ارائه شده توسط شما
- شامل **300+ کلمه** انگلیسی با ترجمه فارسی
- دسته‌بندی‌های مختلف: معماری، احساسات، آب و هوا، سفر، پزشکی، و غیره

### 2. **دستورات جدید**

#### **📚 `/words` - نمایش کلمات انگلیسی**
```
/words
```
**عملکرد:**
- نمایش تعداد کل کلمات موجود
- نمایش 20 کلمه اول به عنوان نمونه
- راهنمای اضافه کردن کلمه جدید

**خروجی نمونه:**
```
📚 کلمات انگلیسی موجود: 300+ کلمه

نمونه کلمات:
1. Architecture = معماری
2. Temple = معبد
3. Cathedral = کلیسای جامع
4. Happiness = خوشبختی، شادی
5. Courage = شجاعت
...

💡 برای اضافه کردن کلمه جدید از فرمت زیر استفاده کنید:
/addword کلمه انگلیسی = معنی فارسی
```

#### **➕ `/addword` - اضافه کردن کلمه جدید**
```
/addword کلمه انگلیسی = معنی فارسی
```

**مثال:**
```
/addword Computer = کامپیوتر
```

**خروجی:**
```
✅ کلمه جدید اضافه شد:

Computer = کامپیوتر

📊 تعداد کل کلمات: 301
```

### 3. **بهبود دستور `/translate`**

حالا دستور `/translate` به ترتیب زیر کار می‌کند:

1. **اصطلاحات انگلیسی** - از `english_idioms.json`
2. **کلمات انگلیسی** - از `english_words.json` 
3. **گوگل ترنسلیت** - برای کلمات جدید

**مثال:**
```
/translate Architecture
```
**خروجی:**
```
📖 کلمه انگلیسی Architecture:

🇮🇷 معماری

🔊 تلفظ Architecture
```

## 📊 دسته‌بندی‌های کلمات موجود

### **🏛️ معماری و ساختمان**
- Architecture, Temple, Cathedral, Mosque, Palace, Castle, Bridge, Tower, Monument, Pyramid

### **😊 احساسات و حالات**
- Happiness, Courage, Knowledge, Wisdom, Patience, Anxiety, Relief, Frustration, Compassion

### **🌍 طبیعت و بلایا**
- Volcano, Earthquake, Hurricane, Flood, Avalanche, Drought, Tsunami, Landslide, Wildfire, Blizzard

### **🗣️ اصطلاحات روزمره**
- "are you crazy?", "zip it up", "drop it", "Just a second", "How come?", "What's wrong?"

### **🌤️ آب و هوا**
- Weather, Temperature, Storm, Foggy, Humid, Spring, Fall, Winter, Summer, Forecast

### **✈️ سفر و حمل و نقل**
- Destination, Journey, Adventure, Passport, Luggage, Tourist, Airplane, Airport, Ticket

### **🏥 پزشکی**
- Anesthesia, Pathology, Pharmacology, Immunology, Cardiology, Neurology, Oncology

### **⚖️ قانون و حقوق**
- Law, Court, Judge, Trial, Contract, Evidence, Crime, Penalty, Witness, Rights

### **🚗 خودرو و مکانیک**
- Engine, Steering wheel, Brake, Gear, Tire, Fuel, Windshield, Headlight, Mechanic

### **🏠 خانه و مبلمان**
- Wing chair, End table, Carpet, Curtains, Blinds, Iron, Kettle, Air conditioner

## 🎯 تست دستورات

### **مرحله 1: تست `/words`**
```
/words
```
**انتظار**: نمایش لیست کلمات با تعداد کل

### **مرحله 2: تست `/translate` با کلمات موجود**
```
/translate Architecture
/translate Happiness
/translate Weather
```

### **مرحله 3: تست `/addword`**
```
/addword Computer = کامپیوتر
```

### **مرحله 4: تست `/translate` با کلمه جدید**
```
/translate Computer
```

## 🔍 عیب‌یابی

### **اگر "کلمات انگلیسی موجود: 0 کلمه" نمایش داده می‌شود:**
1. بررسی کنید که `english_words.json` وجود دارد
2. Console را برای "Loaded English words database" بررسی کنید
3. اگر خطا است، ربات را restart کنید

### **اگر `/addword` کار نمی‌کند:**
1. فرمت صحیح را استفاده کنید: `/addword کلمه = معنی`
2. بین "=" و کلمات فاصله بگذارید
3. کلمات را بدون علامت خاص وارد کنید

## 📱 دستورات منوی ربات

ربات حالا این دستورات را در منو دارد:
- `/newgame` - شروع بازی گروهی
- `/quizz` - آزمون انفرادی  
- `/translate` - ترجمه کلمه
- `/words` - لیست کلمات انگلیسی ⭐ **جدید**
- `/addword` - اضافه کردن کلمه ⭐ **جدید**
- `/idioms` - اصطلاحات انگلیسی
- `/cancelgame` - لغو بازی
- `/cancelquizz` - لغو آزمون

## 🎊 نتیجه

بعد از این اضافه شدن:
- ✅ پایگاه داده کامل کلمات انگلیسی (300+ کلمه)
- ✅ دستور `/words` برای نمایش کلمات
- ✅ دستور `/addword` برای اضافه کردن کلمات جدید
- ✅ بهبود دستور `/translate` برای استفاده از پایگاه داده
- ✅ دستورات جدید در منوی ربات
- ✅ قابلیت مدیریت و گسترش دایره واژگان

## 🚀 تست کنید!

### **دستورات تست:**
1. `/words` - نمایش کلمات موجود
2. `/translate Architecture` - ترجمه از پایگاه داده
3. `/addword Test = تست` - اضافه کردن کلمه جدید
4. `/translate Test` - ترجمه کلمه جدید

**ربات شما حالا یک فرهنگ لغت کامل انگلیسی-فارسی دارد که قابل گسترش است!** 🎉📚
