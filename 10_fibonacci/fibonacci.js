const fibonacci = function(n) {
    let a = 1;
    let b = 1;
    let s = 0; 
    if (n < 0) return "OOPS"
    if (n == 0) return 0;
    if (n < 3) return a; 
    for (i = 3; i <= n; i++){
        s = a + b;
        a = b;
        b = s;
    }
    return s;
};

// Do not edit below this line
module.exports = fibonacci;
