// Section 1: Data Types & Length

// 1. Output explanation
let z = "5";
let y = 5;
console.log(z == y);  // true (loose equality)
console.log(z === y); // false (strict equality)

// 2. Longest word length
const words = ["JavaScript", "Programming", "Function", "Hoisting"];
function longestWordLength(arr) {
    return arr.reduce((max, word) => Math.max(max, word.length), 0);
}

// Section 2: let, const, var & Scope

// 3. Scope demonstration
function testScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
    }
    console.log(a); // 10
    console.log(b); // ReferenceError
    console.log(c); // ReferenceError
}

// 4. Fixed function with const
const name = "John";
function greet() {
    if (true) {
        const message = "Hello " + name;
    }
    console.log(message); // ReferenceError
}

// Section 3: Traditional Function vs. Arrow Function

// 5. Arrow function conversion
const multiply = (a, b) => a * b;

// 6. Output explanation with arrow function
const obj = {
    name: "Alice",
    sayHello: function () {
        setTimeout(() => {
            console.log("Hello, " + this.name);
        }, 1000);
    }
};

// Section 4: Hoisting

// 7. Hoisting example
console.log(a); // undefined
var a = 10;
console.log(b); // ReferenceError
let b = 20;

// 8. Fixed function order
console.log(square(5)); // 25
function square(n) { return n * n; }

var double = function (n) { return n * 2; };
console.log(double(4)); // 8

// Section 5: Operators

// 9. Output of expressions
console.log(5 + "5"); // "55"
console.log(5 - "3"); // 2
console.log(5 * "2"); // 10
console.log("10" / 2); // 5
console.log(10 % "3"); // 1

// 10. Shorthand assignment
let x = 10;
x += 5;
x *= 2;
x -= 3;
x /= 2;

// Section 6: Function Parameters vs Arguments

// 12. Default parameters
function sum(a, b, c = 5) { return a + b + c; }
console.log(sum(2, 3));  // 10
console.log(sum(2, 3, 10)); // 15

// 13. Sum of any number of arguments
function sumAll(...args) {
    return args.reduce((acc, val) => acc + val, 0);
}

// Bonus Challenges

// 14. Fixed closure function
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}

// Number reversal
function reverseNumber(num) {
    let str = String(num);
    let reversed = str.split('').reverse().join('');
    return parseInt(reversed) * Math.sign(num);
}

// Custom length function
function customLength(str) {
    let count = 0;
    for (let char of str) count++;
    return count;
}

// Hoisting fix
function add(a, b) { return a + b; }
function multiply(a, b) { return a * b; }

// Counter with closures
function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}