// Given three integer values, check if a triangle can be constructed with those values of given length.
// Example: arr = [3, 4, 5], output: true. arr = [10, 2, 9], output true. arr = [7, 9, 1], output: false.

checkTriangle = (a, b, c) => {
    let flag = false;
    if (a + b > c && b + c > a && c + a > b) {
        flag = true;
    };
    return flag;
};

console.log(checkTriangle(3, 4, 5));
console.log(checkTriangle(10, 2, 9));
console.log(checkTriangle(7, 9, 1));
