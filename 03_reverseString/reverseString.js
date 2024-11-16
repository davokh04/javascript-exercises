const reverseString = function(string) {
    let reversedString = '';
    let reversedChars = string.split('');
    while (reversedChars.length > 0) {
        reversedString += reversedChars.pop();
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
