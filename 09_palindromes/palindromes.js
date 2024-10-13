const palindromes = function (s) {
    let s2 = "";
    s = s.toLowerCase();
    for (const letter of s) {
        if (letter >= 'a' && letter <= 'z' || letter >= '0' && letter <= '9') {
            s2 += letter;
        }
    }
    const reversedS2 = s2.split("").reverse().join("");
    console.log(reversedS2);
    return s2 === reversedS2;
};

console.log(palindromes("Animal loots foliated detail of stool lamina."));
// Do not edit below this line
module.exports = palindromes;
