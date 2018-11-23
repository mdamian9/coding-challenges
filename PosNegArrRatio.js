// Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros.
// Print the decimal value of each fraction on a new line.

calcRatio = (arr) => {
    let pos = 0, neg = 0, zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pos++;
        } else if (arr[i] < 0) {
            neg++;
        } else {
            zero++;
        };
    };
    const posRatio = pos / arr.length, negRatio = neg / arr.length, zeroRatio = zero / arr.length;
    return `Positive = ${posRatio.toFixed(6)}\nNegative = ${negRatio.toFixed(6)}\nZero = ${zeroRatio.toFixed(6)}`;
};

const arrOne = [1, 1, 0, -1, -1];
const arrTwo = [0, 0, 0, 0, 1, -1];
const arrThree = [2, -56, 0, 0, 5, 7, 0, 9, -2, 0];
console.log(calcRatio(arrOne));
console.log(calcRatio(arrTwo));
console.log(calcRatio(arrThree));
