#!/usr/bin/env node

// Host Deployment Check Script
console.log('🔍 بررسی وضعیت deployment روی هاست...\n');

// Check Node.js version
console.log('📋 Node.js Version:', process.version);

// Check environment variables
console.log('\n🔧 Environment Variables:');
console.log('BOT_TOKEN:', process.env.BOT_TOKEN ? '✅ Set' : '❌ Not set');
console.log('ADMIN_IDS:', process.env.ADMIN_IDS ? '✅ Set' : '❌ Not set');
console.log('PORT:', process.env.PORT || '3000 (default)');

// Check required files
const fs = require('fs');
const path = require('path');

const requiredFiles = [
    'index.js',
    'package.json',
    'english_words.json',
    'english_idioms.json',
    'questions.json',
    'quizz.json',
    'songs.json',
    'warnings.json',
    'quiz_results.json'
];

console.log('\n📁 Required Files:');
requiredFiles.forEach(file => {
    const exists = fs.existsSync(file);
    console.log(`${exists ? '✅' : '❌'} ${file}`);
});

// Check node_modules
console.log('\n📦 Dependencies:');
const nodeModulesExists = fs.existsSync('node_modules');
console.log(`${nodeModulesExists ? '✅' : '❌'} node_modules`);

if (nodeModulesExists) {
    try {
        const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
        console.log('📋 Package name:', packageJson.name);
        console.log('📋 Dependencies count:', Object.keys(packageJson.dependencies || {}).length);
    } catch (error) {
        console.log('❌ Error reading package.json:', error.message);
    }
}

// Check JSON files validity
console.log('\n🔍 JSON Files Validation:');
const jsonFiles = [
    'english_words.json',
    'english_idioms.json',
    'questions.json',
    'quizz.json',
    'songs.json',
    'warnings.json',
    'quiz_results.json'
];

jsonFiles.forEach(file => {
    try {
        if (fs.existsSync(file)) {
            const content = fs.readFileSync(file, 'utf8');
            JSON.parse(content);
            console.log(`✅ ${file} - Valid JSON`);
        } else {
            console.log(`❌ ${file} - File not found`);
        }
    } catch (error) {
        console.log(`❌ ${file} - Invalid JSON: ${error.message}`);
    }
});

// Check port availability
console.log('\n🌐 Network Check:');
const port = process.env.PORT || 3000;
console.log(`Port: ${port}`);

// Check memory
console.log('\n💾 Memory Usage:');
const used = process.memoryUsage();
console.log(`RSS: ${Math.round(used.rss / 1024 / 1024 * 100) / 100} MB`);
console.log(`Heap Used: ${Math.round(used.heapUsed / 1024 / 1024 * 100) / 100} MB`);
console.log(`Heap Total: ${Math.round(used.heapTotal / 1024 / 1024 * 100) / 100} MB`);

console.log('\n✅ بررسی کامل شد!');
console.log('\n📋 اگر خطاهایی وجود دارد، راهنمای HOST_DEPLOYMENT_GUIDE.md را مطالعه کنید.');
