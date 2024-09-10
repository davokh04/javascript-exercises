const removeFromArray = function(array, remove) {
    let filteredArray = array.filter((item) => item != remove)
    return filteredArray
};

// Do not edit below this line
module.exports = removeFromArray;
