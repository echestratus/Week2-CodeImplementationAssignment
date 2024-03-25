// Palindrome detection
function palindromeDetection(string) {
    if (typeof (string) !== "string") {
        return "Please input string data type!!!";
    } else {
        string = string.toLowerCase();
        let temp = "";
        for (let i = string.length - 1; i >= 0; i--) {
            temp += string[i];
        }
        if (temp === string) {
            return "String is palindrome";
        } else {
            return "String is not a palindrome";
        }
    }

}
let string = "Kasur Rusak";
console.log("Title: Palindrome Detection\n" + string + " " + palindromeDetection(string) + "\n");

// Reverse Words
let reverseWord = function (words) {
    if (typeof (words) !== "string") {
        return "Please input string data type!!!";
    } else {
        let reversed = words.split(" ").reverse().join(" ");
        return reversed;
    }

}

let words = "Javascript belajar Saya";
console.log("Title: Reverse Words\n" + words + "\nReversed = " + reverseWord(words));


