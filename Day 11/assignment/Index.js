// Question 1
const student = {
    name: "Aryan Kumar",
    rollNumber: 101,
    marks: {
        Math: 80,
        Science: 65,
        English: 50,
        History: 70
    },
    getAverageMarks: function () {
        let total = 0;
        let marksValues = Object.values(this.marks); // Get the values of the marks
        for (let i = 0; i < marksValues.length; i++) {
            total += marksValues[i];
        }
        let avg = (total / marksValues.length); // Outputs the average
        return avg;
    },
    checkPassOrFail: function () {
        let avg = this.getAverageMarks();
        if (avg >= 35) {
            console.log("Pass")
        } else {
            console.log("Fail");
        }
    }
};

console.log(student.getAverageMarks()) // Output: 66.25

student.checkPassOrFail(); // Output: Pass

// Question 2
const library = {
    books: {
        "Atomic Habits": { author: "James Clear", availableCopies: 3 },
        "The Alchemist": { author: "Paulo Coelho", availableCopies: 5 },
    },
    borrowBook: function (bookName) {
        if (this.books[bookName] && this.books[bookName].availableCopies > 0) {
            this.books[bookName].availableCopies--;
            console.log(`You've borrowed ${bookName}. There are ${this.books[bookName].availableCopies} copies left.`);
        } else {
            console.log(`Sorry, ${bookName} is not available.`);
        }
    },
    returnBook: function (bookName) {
        if (this.books[bookName]) {
            this.books[bookName].availableCopies++;
            console.log(`You've returned ${bookName}.`);
        }
    }
};
library.borrowBook("Atomic Habits");
console.log(library.books["Atomic Habits"].availableCopies); // Output: 2

// Question 3
// Table of 5
function table(num, limit) {
    for (let i = 1; i <= limit; i++) {
        console.log(`${num} X ${i} =${num * i}`)
    }
}
table(5, 10)

// Question 4
// Fizz Buzz

function FizzBuzz(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("Fizz Buzz")
        } else if (i % 5 === 0) {
            console.log("Buzz")
        } else if (i % 3 === 0) {
            console.log("Fizz")
        } else {
            console.log(i)
        }
    }
}
FizzBuzz(15);

// Question 5
// reverse a  string without revese inbuild function
function reverseStr(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log(`The String was : ${str} and reversed is :${reversed}`);
}

reverseStr("Dipankar")

// Question 6
// remove Duplicate from array

function removeDuplicates(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!uniqueArr.includes(arr[i])) { // Includes check for the element in the Unique array
            uniqueArr.push(arr[i]);
        }
    }
    return uniqueArr;
}
console.log(removeDuplicates([1, 2, 3, 2, 4, 5, 1, 6]));

// Question 7
// Longest Word in the sentence

function longestWord(sentence) {
    let words = sentence.split(" "); // Spilts the sentence in a array 
    let longestWord = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;
}
console.log(longestWord("Coding is amazing and challenging"))
console.log(longestWord("This is a sample sentence with a large Number"));

// Problem 8
//  Implement your own map function
function myMap(arr, callback) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

function myCallback(x) {
    return x * 2;
}

console.log(myMap([1, 2, 3, 4], myCallback));
// Output: [2, 4, 6, 8]

// Problem 9
// Find the First Non-Repeating Character
function firstUniqueCharacter(str) {
    const charCount = {};

    // Count character frequencies
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeating character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; // If no unique character is found
}

console.log(firstUniqueCharacter("aabbcddce")); // Output: "e"

// Problem 10
//  Find Pairs that Sum to a Target
function findPairs(arr, target) {
    let pairs = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }

    return pairs;
}

console.log(findPairs([2, 4, 3, 5, 7, 8, 9], 10));
// Output: [ [3, 7], [2, 8], [5, 5] ]
