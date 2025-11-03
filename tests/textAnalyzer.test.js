const { CountWords, LongestWord, CountLines } = require("./src/textAnalyzer");

describe('Should count the number of words in any string', () => {
    test('Should count number of words in a simple string', () => {
        result = CountWords("Hello world test");
        expect(result).toBe(3);
    });

    test('Should count number of words in empty string', () => {
        result = CountWords('');
        expect(result).toBe(0);
    });

    test('Should count number of words with extra spaces', () => {
        result = CountWords('   Hello   World  Test');
        expect(result).toBe(3);
    });
});

describe('Should find the longest word in any string', () => {
    test('Should find longest word in a simple string', () => {
        result = LongestWord('A word is supercalifragilisticexpialidocious');
        expect(result).toBe('supercalifragilisticexpialidocious');
    });

    test('Should find longest word in empty string', () => {
        result = LongestWord('');
        expect(result).toBe('');
    });
});

describe('Should cound how many lines any given file has', () => {
    test('Should count lines in a simple file', () => {
        result = CountLines("./data/quotes.txt");
        expect(result).toBe(10);
    });

    test('Should count zero lines in empty file', () => {
        result = CountLines("./data/empty.txt");
        expect(result).toBe(0);
    });

})