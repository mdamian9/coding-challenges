// Write a program that has 2 separate functions that will find the smallest and largest elements in an array.
// Example - arr = [1, 2, 3, 4], findSmallest(arr) outputs 1 and findLargest(arr) outputs 4.

findSmallest = (arr) => {
    let smallest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i];
        };
    };
    return smallest;
};

findLargest = (arr) => {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]
        };
    };
    return largest;
};

const arrOne = [1, 2, 3, 4];
console.log(findSmallest(arrOne));
console.log(findLargest(arrOne));
