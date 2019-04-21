/*
    This function will take in a string as a parameter and is going to check if it a palindrome.
    The function returns a boolean.
*/
isPalindrome = (str) => {
    let flag = false;
    /* 
        Construct a new string: we will use the array split() method to take away any white spaces
        (if a palindrome phrase is entered). We will then use the join() method to join the characters
        and convert all characters to lowercase.
    */
    const newStr = str.split(" ").join("").toLowerCase();
    /*
        Initialize revStr to an empty string. This will hold our reversed string which will be constructed
        using a for loop.
    */
    let revStr = "";
    for (let i = newStr.length - 1; i >= 0; i--) {
        revStr += newStr[i];
    };
    // If the reversed string is equal to the passed in string, return true.
    if (revStr === newStr)
        flag = true;
    return flag;
};

console.log(isPalindrome("1Taco cat1"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("tacocat"));
console.log(isPalindrome("wellyelly"));
