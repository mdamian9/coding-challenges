// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it.
// For example: if num = 4, then your program should return (4 * 3 * 2 * 1) = 24. The range will be between 1 and 18.
// Input will always be an integer.

firstFactorial = (num) => {
    let val;
    if (num < 1 || num > 18) {
        val = "Not within valid range.";
    } else {
        if (num === 1) {
            val = 1;
        } else {
            val = num * (firstFactorial(num - 1));
        };    
    };
    return val;
};

console.log(firstFactorial(4));
console.log(firstFactorial(19));
console.log(firstFactorial(0));
