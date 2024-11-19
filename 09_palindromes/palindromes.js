const palindromes = function (word) {
    word = word.split('').filter(char => /^[a-zA-Z0-9]+$/.test(char)).join('').toLowerCase();
    let reversedWord = word.split('').filter(char => /^[a-zA-Z0-9]+$/.test(char)).reverse().join('').toLowerCase();
    if (word == reversedWord) {
        return true;
    } return false;
};

// Do not edit below this line
module.exports = palindromes;
