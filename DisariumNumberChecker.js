// A number is called a Disarium number if the sum of the powers of its digits equals the sum of the number itself.
// The digits are powered to their positions in the number.
// Example - Input: 135, Output: true. 
// 135 is a Disarium number because it equals to 1^1 + 3^2 + 5^3 (each digit powered to the position in the number).
// Write a program to check if a number is a Disarium number or not.

checkDisarium = (num) => {
    let flag = false;
    const numStr = num.toString();
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        sum += Math.pow(parseInt(numStr[i]), i + 1);
    };
    if (sum === num) {
        flag = true;
    };
    return flag;
};

console.log(checkDisarium(135)); // should output true

for (let i = 0; i <= 10000; i++) {
    if (checkDisarium(i)) {
        console.log(i);
    };
};
