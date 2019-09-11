/*
    Write a function in JavaScript that accepts an array of integers and a number X as parameters, when invoked, returns an array
    of unique indices of two numbers whose sum is equal to X.

    For example: [1, 3, 4, 5, 6, 8, 10, 11, 13], Sum: 14
    Pairs of indices: [0, 8], [1, 7], [2, 6], [4, 5]
*/

const arr = [1, 3, 4, 5, 6, 8, 10, 11, 13];

const checkIndices = (arr, x) => {

    // Checking for errors
    if (arr === undefined) {
        throw 'Error: No arguments were passed to the function';
    } else if (arr.length === undefined) {
        throw 'Error: First argument is not an array';
    } else if (arr.length < 1) {
        throw 'Error: Array is empty';
    } else if (x === undefined) {
        throw 'Error: No integer (sum) was passed to function';
    } else if (typeof x !== 'number') {
        throw 'Error: Second argument is not an integer'
    };

    // If all checks passed, execute function
    let indices = [];
    // Loop through elements in array
    for (let i = 0; i < arr.length; i++) {
        // Loop through rest of elements after i
        for (let j = i + 1; j < arr.length; j++) {
            // If arr[i] and arr[j] add up to x, push indices
            if (arr[j] === (x - arr[i])) {
                indices.push([i, j]);
            };
        };
    };
    return indices;
};

try {
    console.log(checkIndices(arr, 14));
} catch (err) {
    console.log(err);
};
