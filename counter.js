/**
 * counter.js - Core text analysis and word counting algorithms
 */

function analyzeText(text) {
    if (!text || typeof text !== 'string') {
        return {
            chineseCount: 0,
            englishWordCount: 0,
            digitCount: 0,
            numberCount: 0,
            punctuationCount: 0,
            whitespaceCount: 0,
            totalCharsWithSpaces: 0,
            totalCharsWithoutSpaces: 0,
            lineCount: 0,
            paragraphCount: 0,
            readingTimeMinutes: 0,
            speakingTimeMinutes: 0,
            readingTimeDisplay: '0 秒',
            speakingTimeDisplay: '0 秒',
            densityStats: {
                chinesePercent: 0,
                englishPercent: 0,
                numberPercent: 0,
                otherPercent: 0
            }
        };
    }

    const totalCharsWithSpaces = text.length;
    const totalCharsWithoutSpaces = text.replace(/\s/g, '').length;

    // 1. Chinese Characters (CJK Unified Ideographs + Extension A + Compatibility)
    const chineseRegex = /[\u4e00-\u9fa5\u3400-\u4dbf\uf900-\ufaff]/g;
    const chineseMatches = text.match(chineseRegex) || [];
    const chineseCount = chineseMatches.length;

    // 2. English Words (handles contractions like don't, it's, and hyphens like state-of-the-art)
    const englishWordRegex = /[a-zA-Z]+(?:['’_\-][a-zA-Z]+)*/g;
    const englishWordMatches = text.match(englishWordRegex) || [];
    const englishWordCount = englishWordMatches.length;

    // 3. Numbers (number tokens & individual digits)
    const numberGroupRegex = /\d+(?:\.\d+)?/g;
    const numberMatches = text.match(numberGroupRegex) || [];
    const numberCount = numberMatches.length;

    const digitRegex = /\d/g;
    const digitMatches = text.match(digitRegex) || [];
    const digitCount = digitMatches.length;

    // 4. Punctuation marks (CJK & Latin punctuation)
    const punctuationRegex = /[\u3000-\u303F\uFF01-\uFF0F\uFF1A-\uFF20\uFF3B-\uFF40\uFF5B-\uFF65\u2000-\u206F\u2E00-\u2E7F!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;
    const punctuationMatches = text.match(punctuationRegex) || [];
    const punctuationCount = punctuationMatches.length;

    // 5. Whitespace count
    const whitespaceMatches = text.match(/\s/g) || [];
    const whitespaceCount = whitespaceMatches.length;

    // 6. Lines and Paragraphs
    const physicalLines = text.split(/\r\n|\r|\n/);
    const lineCount = totalCharsWithSpaces === 0 ? 0 : physicalLines.length;

    const nonBlankParagraphs = physicalLines.filter(line => line.trim().length > 0);
    const paragraphCount = nonBlankParagraphs.length;

    // 7. Reading & Speaking Time Estimation
    const readMinutesExact = (chineseCount / 400) + (englishWordCount / 200) + (digitCount / 300);
    const speechMinutesExact = (chineseCount + englishWordCount + digitCount) / 150;

    function formatTime(minutes) {
        if (minutes <= 0) return '0 秒';
        const totalSeconds = Math.ceil(minutes * 60);
        if (totalSeconds < 60) {
            return `${totalSeconds} 秒`;
        }
        const mins = Math.floor(totalSeconds / 60);
        const secs = totalSeconds % 60;
        return secs > 0 ? `${mins} 分 ${secs} 秒` : `${mins} 分钟`;
    }

    // 8. Percentages calculation
    const totalMeaningful = chineseCount + digitCount + (englishWordMatches.join('').length);
    const chinesePercent = totalMeaningful > 0 ? Math.round((chineseCount / totalMeaningful) * 100) : 0;
    const englishPercent = totalMeaningful > 0 ? Math.round(((englishWordMatches.join('').length) / totalMeaningful) * 100) : 0;
    const numberPercent = totalMeaningful > 0 ? Math.round((digitCount / totalMeaningful) * 100) : 0;
    const otherPercent = Math.max(0, 100 - chinesePercent - englishPercent - numberPercent);

    return {
        chineseCount,
        englishWordCount,
        digitCount,
        numberCount,
        punctuationCount,
        whitespaceCount,
        totalCharsWithSpaces,
        totalCharsWithoutSpaces,
        lineCount,
        paragraphCount,
        readingTimeMinutes: Math.round(readMinutesExact * 10) / 10,
        speakingTimeMinutes: Math.round(speechMinutesExact * 10) / 10,
        readingTimeDisplay: formatTime(readMinutesExact),
        speakingTimeDisplay: formatTime(speechMinutesExact),
        densityStats: {
            chinesePercent,
            englishPercent,
            numberPercent,
            otherPercent
        }
    };
}

// Support CommonJS export for testing & browser global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { analyzeText };
}
