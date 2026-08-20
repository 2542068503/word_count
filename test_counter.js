// test_counter.js - Unit tests for word counter core algorithms
const assert = require('assert');
const { analyzeText } = require('./counter.js');

console.log('Running Word Counter Unit Tests...\n');

// Test 1: Pure Chinese Text
{
    const text = '你好，世界！这是一个字数统计测试。';
    const result = analyzeText(text);
    assert.strictEqual(result.chineseCount, 14, `Expected 14 Chinese characters, got ${result.chineseCount}`);
    assert.strictEqual(result.englishWordCount, 0, `Expected 0 English words, got ${result.englishWordCount}`);
    assert.strictEqual(result.punctuationCount, 3, `Expected 3 punctuation marks, got ${result.punctuationCount}`);
    console.log('✓ Test 1: Pure Chinese Text passed');
}

// Test 2: Pure English Text with Contractions & Hyphens
{
    const text = "Hello world! This is a state-of-the-art word counter, and it's fast.";
    const result = analyzeText(text);
    assert.strictEqual(result.chineseCount, 0, `Expected 0 Chinese characters, got ${result.chineseCount}`);
    assert.strictEqual(result.englishWordCount, 11, `Expected 11 English words, got ${result.englishWordCount}`);
    console.log('✓ Test 2: English Text with Hyphens/Contractions passed');
}

// Test 3: Mixed Chinese, English, Numbers, and Multi-line Paragraphs
{
    const text = `第一段：Apple 发布了 3 款新产品。\n\n第二段：iPhone 16 Pro Max is amazing! 售价 $999 起。`;
    const result = analyzeText(text);
    assert.strictEqual(result.chineseCount, 16, `Expected 16 Chinese characters, got ${result.chineseCount}`);
    assert.strictEqual(result.englishWordCount, 6, `Expected 6 English words (Apple, iPhone, Pro, Max, is, amazing), got ${result.englishWordCount}`);
    assert.strictEqual(result.paragraphCount, 2, `Expected 2 paragraphs, got ${result.paragraphCount}`);
    assert.strictEqual(result.numberCount, 3, `Expected 3 number tokens (3, 16, 999), got ${result.numberCount}`);
    console.log('✓ Test 3: Mixed Language & Paragraphs passed');
}

// Test 4: Empty string
{
    const result = analyzeText('');
    assert.strictEqual(result.chineseCount, 0);
    assert.strictEqual(result.englishWordCount, 0);
    assert.strictEqual(result.totalCharsWithSpaces, 0);
    assert.strictEqual(result.totalCharsWithoutSpaces, 0);
    assert.strictEqual(result.lineCount, 0);
    assert.strictEqual(result.paragraphCount, 0);
    assert.strictEqual(result.readingTimeMinutes, 0);
    console.log('✓ Test 4: Empty string passed');
}

console.log('\nAll 4 Test Suites Passed Successfully! 🎉');
