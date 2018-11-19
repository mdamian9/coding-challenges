gapfulNumCheck = (number) => {
    let flag = false;
    var numStr = number.toString();
    if (numStr.length >= 3) {
        const divisor = parseInt(numStr[0] + numStr[numStr.length - 1]);
        // console.log(divisor);
        if (number % divisor === 0) {
            flag = true;
        };
    };
    return flag;
};

console.log(gapfulNumCheck(583));

for (let i = 0; i <= 1000; i++) {
    if (gapfulNumCheck(i)) {
        console.log(i);
    };
};