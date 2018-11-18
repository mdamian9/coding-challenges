const vowels = ["a", "e", "i", "o", "u", "y"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];

isVowel = (letter) => {
    let flag = false;
    for (let i = 0; i < vowels.length; i++) {
        if (letter === vowels[i]) {
            flag = true;
        };
    };
    return flag;
};

isConsonant = (letter) => {
    let flag = false;
    for (let i = 0; i < consonants.length; i++) {
        if (letter === consonants[i]) {
            flag = true;
        };
    };
    return flag;
};

convert = (word) => {

    let vowCluster = "", conCluster = "", pigLatinWord = "";

    if (isVowel(word[0])) {
        pigLatinWord = word + "yay";
    } else if (isConsonant(word[0])) {

    };

    // console.log(vowCluster);
    return pigLatinWord;
};

// console.log(convert("say"));
console.log(convert("english"));
// console.log(convert("smile"));
console.log(convert("airdrop"));
console.log(convert("under"));

// console.log(convert("smile"));
