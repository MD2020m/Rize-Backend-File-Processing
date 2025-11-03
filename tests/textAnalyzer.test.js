const { CountWords, LongestWord, CountLines } = require("../src/textAnalyzer");

describe('Should count the number of words in any string', () => {
    test('Should count number of words in a simple string', () => {
        result = CountWords("./data/sample-text.txt");
        expect(result).toBe(207);
    });

    test('Should count number of words in empty string', () => {
        result = CountWords("./data/empty.txt");
        expect(result).toBe(0);
    });
});

describe('Should find the longest word in any string', () => {
    test('Should find longest word in a simple string', () => {
        result = LongestWord('./data/sample-text.txt');
        expect(result).toBe('authentication,');
    });

    test('Should find longest word in empty string', () => {
        result = LongestWord('./data/empty.txt');
        expect(result).toBe('');
    });
});

describe('Should cound how many lines any given file has', () => {
    test('Should count lines in a simple file', () => {
        result = CountLines("./data/quotes.txt");
        expect(result).toBe(10);
    });
});