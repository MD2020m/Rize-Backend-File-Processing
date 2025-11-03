const fs = require('fs');

// Counts the number of words in a string
function CountWords(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length == 0){
            words.splice(i, 1);
        }
    }

    return words.length;
}

// Finds longest word in a string
function LongestWord(str) {
    let words = str.split(' ');
    let longest = '';
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

// Counts number of lines in a file
function CountLines(filename) {
    let content = fs.readFileSync(filename, 'utf8');
    let lines = content.split('\n');

    return lines.length;
}

module.exports = {
    CountWords,
    LongestWord,
    CountLines
}

content = fs.readFileSync("./data/sample-text.txt");

console.log(CountWords("Hello world test"));
console.log(LongestWord("Hi All, Antiquity"));
console.log(CountLines("./data/quotes.txt"))