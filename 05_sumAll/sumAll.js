const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0) return "ERROR";
    else if (!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    if (num1 > num2) return sumAll(num2, num1);
    let s = 0;
    for (i = num1; i <= num2; i++){
        s += i;
    }
    return s;
};

// Do not edit below this line
module.exports = sumAll;
