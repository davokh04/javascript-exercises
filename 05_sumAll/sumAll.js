const sumAll = function(a, b) {
    
    while ((a > 0) && (b > 0) && Number.isInteger(a) && Number.isInteger(b)) {
        if (a > b) {
            let c = b - 1
            let result = (a * (a + 1) / 2) - (c * (c + 1) / 2)
            return result
        } else {
            let c = a - 1
            let result = (b * (b + 1) / 2) - (c * (c + 1) / 2)
            return result
        }
    }
    return "ERROR"
};npm test 05_sumAll/sumAll.spec.js 

// Do not edit below this line
module.exports = sumAll;
