const fs = require('fs');

// Counts the number of words in a string
function CountWords(filename) {
    const str = fs.readFileSync(filename, 'utf8');
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        if (words[i].length == 0){
            words.splice(i, 1);
        }
    }

    return words.length;
}

// Finds longest word in a string
function LongestWord(filename) {
    const str = fs.readFileSync(filename, 'utf8');
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

filename = "./data/sample-text.txt";

console.log(CountWords(filename));
console.log(LongestWord(filename));
console.log(CountLines(filename));