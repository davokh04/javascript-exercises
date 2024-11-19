const fibonacci = function(pos) {
    if (pos == 0) {
        return 0;
    } else if (pos < 0) {
        return 'OOPS';
    }
    let numbers = [0, 1];
    for (let i = 2; i < parseInt(pos) + 1; i++) {
        numbers.push(numbers[i - 1] + numbers[i - 2]);
    }
    return numbers.pop();
};

// Do not edit below this line
module.exports = fibonacci;
