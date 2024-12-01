const repeatString = function(s, num) {
    if (num < 0) return "ERROR";
    let s2 = "";
    for (i = 1; i <= num; i++){
        s2 += s;
    }
    return s2;
};

// Do not edit below this line
module.exports = repeatString;
