const data = [
    [1, 1, 1, 0, 0],
    [1, 1, 0, 1, 1],
    [0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1],
    [0, 1, 0, 1, 0]
];

/*
    Helper function to check adjacent elements in 2-D array. Once a 1 is found, the function turns that 1 and
    all adjacent 1's and subsequent adjacent 1's to 0. If 1 or island of 1's is found, this returns true.
*/
checkAdj = (arr, i, j) => {
    // Returns false by default (if index we're checking is 0, do nothing)
    let flag = false;
    if (arr[i][j] === 1) {
        /* 
            If element is 1, return true (we found an island / part of island). The element will be
            set to zero (to not count extra "islands" when iterating through the loop in checkIsland())
        */
        flag = true;
        arr[i][j] = 0;
        // Check next element in row (right)
        checkAdj(arr, i, j + 1);
        // If a row exists after the one we're checking, check element right under current element (down)
        if (arr[i + 1]) {
            checkAdj(arr, i + 1, j);
        };
        // Check previous element in row (left)
        checkAdj(arr, i, j - 1);
        // If a row exists before the one we're checking, check element right above current element (up)
        if (arr[i - 1]) {
            checkAdj(arr, i - 1, j);
        };
    };
    return flag;
};

checkIsland = arr => {
    // Island counter
    let islands = 0;
    // Loop through data array
    for (let i = 0; i < arr.length; i++) {
        // Loop through sub-array
        for (let j = 0; j < arr[i].length; j++) {
            // If island is found, increments islands by 1
            if (checkAdj(arr, i, j)) {
                islands++;
            };
        };
    };
    return islands;
};

console.log(checkIsland(data));
