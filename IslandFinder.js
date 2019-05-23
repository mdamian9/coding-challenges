const data = [
    // [1, 1, 1, 0, 0],
    // [1, 1, 0, 0, 0],
    [0, 0, 0, 1, 0],
    // [1, 1, 0, 0, 0],
    // [1, 1, 0, 0, 1]
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

checkAdj = (arr, i, j) => {

    let flag = false;

    if (arr[i][j] === 1) {
        arr[i][j] = 0;
        flag = true;

        // checkAdj(arr, i, j + 1);
    };

    return flag;

};

checkIsland = arr => {
    let islands = 0;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            // console.log(checkAdj(arr, i, j));
            if (checkAdj(arr, i, j)) {
                console.log('true');
                islands++;
            };
        };
    };
    return islands;

};

console.log(checkIsland(data));
