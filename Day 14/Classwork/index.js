let arr = [3, 6, 9, 2, 56, 34, 98, 56, 23, 12, 90]
// Bubble Sort
for (let i = 0; i < arr.length - 1; i++) {
    let flag = false;
    for (let j = 0; j < arr.length - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
            let temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            flag = true;
        }
        if (flag) {
            break;
        }
    }
}
console.log(arr);