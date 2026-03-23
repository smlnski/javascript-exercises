const reverseString = function (string) {

    let string_reversed = "";

    for (let i = (string.length - 1); i >= 0; i--) {
        string_reversed += string[i];
    }

    return string_reversed;

};

// Do not edit below this line
module.exports = reverseString;
