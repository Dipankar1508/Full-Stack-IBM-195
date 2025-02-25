// Conditions

/*let a = 10;
let b = 20;
if (a > b) {
    console.log(`${a} is greater than ${b}`)
} else if (a == b) {
    console.log(`${a} is equal to ${b}`)
} else {
    console.log(`${b} is greater than ${a}`)
}*/

// Fixx Buzz
/*let num = 10
if (num % 3 == 0 && num % 5 == 0) {
    console.log("Fizz Buzz")
} else if (num % 5 == 0) {
    console.log("Buzz")
} else if (num % 3 == 0) {
    console.log("Fizz")
} else {
    console.log("Not a multiple")
}*/

// For Loop
/*let num = 10;
for (i = 0; i < num; i++) {
    console.log(i);
}*/

// let arr = [4, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16, 17]

/*for (let i = 0; i < arr.length; i++) {
    console.log([arr[i], i]);
}*/

/*let str = "We have successfully created a new Object ";
for (let i = 0; i < str.length; i++) {
    console.log("a" + str[i]);
}*/

/*for (let i of arr) {
    console.log(i);
}*/

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 == 0) {
        console.log(arr1[i], "is even");
    } else {
        console.log(arr1[i], "is odd");
    }
}

