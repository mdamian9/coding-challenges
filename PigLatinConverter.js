const vowels = ["a", "e", "i", "o", "u", "y"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"];

convert = (word) => {

    let isVowel, isConsonant, vowCluster = "", conCluster = "", pigLatinWord = "";
    for (let i = 0; i < vowels.length; i++) {
        if (word[0] === vowels[i]) {
            isVowel = true;
        };
    };

    for (let i = 0; i < consonants.length; i++) {
        if (word[0] === consonants[i]) {
            isConsonant = true;
        };
    };

    if (isVowel) {
        pigLatinWord = word + "yay";
    } else if (isConsonant) {
        for (let i = 0; i < word.length; i++) {
            for (let j = 0; j < consonants.length; j++) {
                if (word[i] === consonants[j]) {
                    console.log(word[i]);
                };
            };
        };
        console.log(conCluster);
    };

    // console.log(vowCluster);
    return pigLatinWord;
};

// console.log(convert("say"));
// console.log(convert("english"));
// console.log(convert("smile"));
// console.log(convert("airdrop"));
// console.log(convert("under"));

console.log(convert("smile"));
