gapfulNumCheck = (number) => {
    var numStr = number.toString();
    const divisor = parseInt(numStr[0] + numStr[numStr.length - 1]);
    console.log(divisor);
};

gapfulNumCheck(1929);