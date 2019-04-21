/*
    This function will take in an integer as a parameter and is going to convert it to a roman numeral.
    The function returns a string that is the converted roman numeral.
*/
convertToRoman = (num) => {
    // Initialize new variable convertedNum to an empty string. This will hold our roman numeral.
    let convertedNum = "";
    /*
        Initialize new object. This object will have the roman numerals as properties, each with its
        corresponding numerical value.
    */
    const numerals = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
    /*
        The following for/in loop will loop through the numerals object's properties.
        The while loop will execute as long as the integer passed in to the function is greater or equal to the
        value of the numerals prop at that iteration in the for loop. If this is true, we will add the roman 
        numeral to our string, and subtract the numerical value from "num" to keep constructing our string.
    */
    for (let i in numerals) {
        while (num >= numerals[i]) {
            convertedNum += i;
            num -= numerals[i];
        };
    };
    return convertedNum;
};

console.log(convertToRoman(140));
console.log(convertToRoman(14));
console.log(convertToRoman(9));
console.log(convertToRoman(1442));
