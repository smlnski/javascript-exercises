const sumAll = function (a, b) {

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    if (a < 0 || b < 0) {
        return "ERROR";
    }

    let sum = 0;

    if (a > b) {
        [a, b] = [b, a];
    }

    for (int = a; int <= b; int++) {
        sum += int;
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
