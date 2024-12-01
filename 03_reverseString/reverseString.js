const reverseString = function(s) {
    let s2 = "";
    for (const letter of s) {
        s2 = letter + s2;
    }
    return s2;
};

// Do not edit below this line
module.exports = reverseString;
