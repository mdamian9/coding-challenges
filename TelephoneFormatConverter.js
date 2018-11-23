// Write a program that converts an integer input to a telephone number format.
// Example - Input: 1234567890, Output: (123) 456-7890. Input: 37494455172, Output: (+374) 94-455-172.

convertTelFormat = (num) => {
    numStr = num.toString();
    let convertedNum;
    if (numStr.length === 10) {
        convertedNum = `(${numStr.slice(0, 3)}) ${numStr.slice(3, 6)}-${numStr.slice(6)}`;
    } else if (numStr.length === 11) {
        convertedNum = `(+${numStr.slice(0, 3)}) ${numStr.slice(3, 5)}-${numStr.slice(5, 8)}-${numStr.slice(8)}`;
    } else {
        convertedNum = "Please enter a valid phone number to format.";
    };
    return convertedNum;
};

console.log(convertTelFormat(1234567890));
console.log(convertTelFormat(37494455172));
console.log(convertTelFormat(12345678));
