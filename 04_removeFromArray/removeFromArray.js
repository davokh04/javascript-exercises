const removeFromArray = function(array, ...remove) {
    let filteredArray = array.filter((num) => !remove.includes(num));
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
