const removeFromArray = function (array, item) {

    function isNotItem(value) {
        return function (item) {
            return value != item;
        }
    }

    return array.filter(isNotItem(item));
};

// Do not edit below this line
module.exports = removeFromArray;
