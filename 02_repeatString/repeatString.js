const repeatString = function(word, repetition) {
    if (repetition == 0) {
        return ""
    } else if (repetition < 0) {
        return "ERROR"
    }
    let i = 0;
    let text = ""
    do {
        text += word
        i++
    } while (i < repetition);
    return text
};

// Do not edit below this line
module.exports = repeatString;
