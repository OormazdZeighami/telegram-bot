#!/usr/bin/env node

/**
 * 🔐 Security Check Script
 * بررسی امنیت کد برای توکن‌های سخت‌کد شده
 */

const fs = require('fs');
const path = require('path');

console.log('🔐 بررسی امنیت کد...\n');

// الگوهای توکن‌های احتمالی
const tokenPatterns = [
  {
    name: 'Telegram Bot Token',
    pattern: /[0-9]{10}:[A-Za-z0-9_-]{35}/g,
    severity: 'CRITICAL'
  },
  {
    name: 'API Key Pattern',
    pattern: /[a-zA-Z0-9]{32,}/g,
    severity: 'HIGH',
    excludePatterns: [
      /questions\.js/, // فایل سوالات ممکن است متن‌های طولانی داشته باشد
      /Chargoggagoggmanchauggagoggchaubunagungamaugg/ // نام مکان خاص
    ]
  },
  {
    name: 'Hardcoded Token',
    pattern: /token\s*=\s*["'][^"']{20,}["']/gi,
    severity: 'HIGH'
  },
  {
    name: 'Hardcoded API Key',
    pattern: /api[_-]?key\s*=\s*["'][^"']{10,}["']/gi,
    severity: 'HIGH'
  }
];

// فایل‌های قابل بررسی
const filesToCheck = [
  'index.js',
  'fetcher.js',
  'questions.js'
];

let totalIssues = 0;

filesToCheck.forEach(filename => {
  const filePath = path.join(__dirname, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️ فایل ${filename} پیدا نشد`);
    return;
  }
  
  const content = fs.readFileSync(filePath, 'utf8');
  console.log(`📁 بررسی فایل: ${filename}`);
  
  tokenPatterns.forEach(pattern => {
    const matches = content.match(pattern.pattern);
    
    if (matches) {
      matches.forEach(match => {
        // بررسی exclude patterns
        let shouldExclude = false;
        if (pattern.excludePatterns) {
          pattern.excludePatterns.forEach(excludePattern => {
            if (excludePattern.test(filename) || excludePattern.test(match)) {
              shouldExclude = true;
            }
          });
        }
        
        if (shouldExclude) {
          console.log(`✅ ${pattern.name} در فایل ${filename} - نادیده گرفته شد (exclude pattern)`);
          return;
        }
        
        // بررسی اینکه آیا در کامنت است
        const lines = content.split('\n');
        let isInComment = false;
        
        lines.forEach((line, index) => {
          if (line.includes(match)) {
            const trimmedLine = line.trim();
            isInComment = trimmedLine.startsWith('//') || trimmedLine.startsWith('*') || trimmedLine.startsWith('/*');
            
            if (!isInComment) {
              console.log(`❌ ${pattern.severity}: ${pattern.name} در خط ${index + 1}`);
              console.log(`   ${match}`);
              totalIssues++;
            } else {
              console.log(`✅ ${pattern.name} در کامنت (خط ${index + 1}) - امن`);
            }
          }
        });
      });
    }
  });
  
  console.log('');
});

// بررسی فایل .env
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  console.log('✅ فایل .env موجود است');
  
  const envContent = fs.readFileSync(envPath, 'utf8');
  
  if (envContent.includes('BOT_TOKEN=') && !envContent.includes('YOUR_BOT_TOKEN_HERE')) {
    console.log('✅ BOT_TOKEN در .env تنظیم شده');
  } else {
    console.log('⚠️ BOT_TOKEN در .env تنظیم نشده یا placeholder است');
    totalIssues++;
  }
  
  if (envContent.includes('ADMIN_IDS=')) {
    console.log('✅ ADMIN_IDS در .env تنظیم شده');
  } else {
    console.log('⚠️ ADMIN_IDS در .env تنظیم نشده');
    totalIssues++;
  }
} else {
  console.log('❌ فایل .env موجود نیست');
  totalIssues++;
}

// نتیجه نهایی
console.log('\n' + '='.repeat(50));
if (totalIssues === 0) {
  console.log('🎉 همه چیز امن است!');
  console.log('✅ هیچ توکن سخت‌کد شده‌ای پیدا نشد');
  console.log('✅ فایل .env موجود و تنظیم شده');
} else {
  console.log(`❌ ${totalIssues} مشکل امنیتی پیدا شد`);
  console.log('🔧 لطفاً مشکلات را برطرف کنید');
}

console.log('\n📋 نکات امنیتی:');
console.log('• توکن‌ها را فقط در فایل .env قرار دهید');
console.log('• فایل .env را در .gitignore قرار دهید');
console.log('• هرگز توکن‌ها را در Git commit نکنید');
console.log('• از توکن‌های مختلف برای محیط‌های مختلف استفاده کنید');
