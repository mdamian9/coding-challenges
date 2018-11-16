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

convert = (word) => {
    let vowCluster = "", conCluster = "";
    for (let i = 0; i < word.length; i++) {
        console.log(word[i]);
        for (let j = 0; j < vowels.length; j++) {
            if (word[i] === vowels[j]) {
                console.log(`${word[i]} = ${vowels[j]}`);
                vowCluster += word[i];
            };
        };
    };

    if (word)

    console.log(vowCluster);

    // return word;
};

// console.log(convert("say"));
console.log(isVowel("t"));
// console.log(convert("english"));
// console.log(convert("smile"));
