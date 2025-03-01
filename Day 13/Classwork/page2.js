let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]
let ans = arr.filter((el, index) => {
    return el % 5 == 0; // filtering element that is divisible by 5
}).map((el, index) => {
    return el * 2;  // multipy all the filtered elements with 2
}).reduce((acc, el) => {
    return acc + el; // sum of all the mapped elements
}, 1)

// console.log(ans);


let arr1 = [5, 9, 1, 7, 3, 2, 1, 9, 10, 48, 12, 65]
// let sorted = arr1.sort((a, b) => { return a - b }) // ascending

let sorted = arr1.sort((a, b) => { return b - a }) // descending
console.log(sorted)

let data = [
    { name: "watch", price: 2000, decs: "Bad Watch", rating: 4 },
    { name: "mobile", price: 60000, decs: "Good Mobile", rating: 5 },
    { name: "shirt", price: 250, decs: "Average Shirt", rating: 3 },
    { name: "book", price: 150, decs: "Old Book", rating: 2 },
    { name: "bag", price: 1000, decs: "Best Bag", rating: 5 },
    { name: "shoes", price: 1200, decs: "High Quality Shoes", rating: 4 },
]

// data.sort((a, b) => {
//     return a.price - b.price;
// })
/*data.sort((a, b) => {
    let nameA = a.name.toUpperCase();
    let nameB = b.name.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }
})
console.log(data)*/

// OR

// data.sort((a, b) => a.name.localeCompare(b.name)); // Dictionary Ordering    
data.sort((a, b) => b.name.localeCompare(a.name)); // Oppsites Dictionary Ordering
console.log(data);