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
        let breakLoop = false;
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < vowels.length; j++) {
                if (word[i] === vowels[j]) {
                    breakLoop = true;
                    vowCluster = word.slice(i);
                    conCluster = word.slice(0, i);
                    break;
                };
            };
            if (breakLoop) {
                break;
            };
        };
        pigLatinWord = vowCluster + conCluster + "ay";
        console.log(vowCluster);
        console.log(conCluster);
    };
    return pigLatinWord;
};

console.log(convert("say"));
console.log(convert("croatia"));
console.log(convert("english"));
console.log(convert("smile"));
console.log(convert("airdrop"));
console.log(convert("under"));
console.log(convert("smile"));
