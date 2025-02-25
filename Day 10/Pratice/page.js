const arr = [1, 2, 3, 4, 5];
let slicedArr1 = arr.slice(1, 3);
console.log(slicedArr1); // Output: [2, 3]
console.log(arr); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)const arr = [1, 2, 3, 4, 5];
let slicedArr = arr.slice(1, 3);
console.log(slicedArr); // Output: [2, 3]
console.log(arr); // Output: [1, 2, 3, 4, 5] (original array remains unchanged)const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'a', 'b');
console.log(arr); // Output: [1, 'a', 'b', 4, 5]

// Remove elements without adding new ones
arr.splice(1, 2);
console.log(arr); // Output: [1, 4, 5]

// Add elements without removing any
arr.splice(1, 0, 'x', 'y');
console.log(arr); // Output: [1, 'x', 'y', 4, 5]const arr = [1, 2, 3, 4, 5];
arr.splice(1, 2, 'a', 'b');
console.log(arr); // Output: [1, 'a', 'b', 4, 5]

// Remove elements without adding new ones
arr.splice(1, 2);
console.log(arr); // Output: [1, 4, 5]

// Add elements without removing any
arr.splice(1, 0, 'x', 'y');
console.log(arr); // Output: [1, 'x', 'y', 4, 5]