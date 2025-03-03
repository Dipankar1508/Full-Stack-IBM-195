// Higher Order Functions

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

// forEach loop
arr.forEach((el, index) => { // (1st : element of the array ; 2nd Index of the array)
    console.log(el, index)
});

// Map loop
let ans = arr.map((el, index) => {
    return el;
    // return [el + index];
})

console.log(ans)


// Filter
let output = arr.filter((el, index) => {
    return el % 2 == 0 && el % 4 !== 0;
    // return typeof el == 'string';
})
console.log(output)

// Reduce
let solution = arr.reduce((el, acc) => { // Sum of all element of the array and plus the accumulator
    return acc + el;
}, 1)

console.log(solution)