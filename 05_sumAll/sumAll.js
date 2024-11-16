const sumAll = function(firstNum, secondNum) {
    let result;
    if (firstNum > 0 && secondNum > 0 && Number.isInteger(firstNum) && Number.isInteger(secondNum)) {
        if (secondNum > firstNum) {
            return (secondNum * (secondNum + 1) / 2) - (firstNum * (firstNum + 1) / 2) + 1;
        } else {
            return (firstNum * (firstNum + 1) / 2) - (secondNum * (secondNum + 1) / 2) + 1;
        }
    } return 'ERROR';
};

// Do not edit below this line
module.exports = sumAll;
