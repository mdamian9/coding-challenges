// Given an array of integers, find the sum of its elements.
// Example, if an array arr = [1, 2, 3], 1 + 2 + 3 = 6, so return 6.

sumArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    };
    return sum;
};

const arrOne = [2, 4, 6, 8, 10];
const arrTwo = [11, 23, 7, 9, 10];
const arrThree = [1, 2, 5, -3, 9];

console.log(sumArr(arrOne));
console.log(sumArr(arrTwo));
console.log(sumArr(arrThree));