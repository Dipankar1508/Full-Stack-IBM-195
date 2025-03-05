// MacroTask -- setTimeout, setInterval, setImmediate
// MicroTask -- Promise, queueMicrotask
// MicroTask > MacroTask -- MicroTask will be executed first

/*let name = "Sync";
console.log(name);

setTimeout(() => {
    console.log("syncronising Staement 3");
}, 5000);

let surname = "Code";
console.log(surname);

queueMicrotask(() => {
    console.log("MicroTask 1");
});

setTimeout(() => {
    console.log("Syncronising Staement 1");
}, 3000);

setTimeout(() => {
    console.log("syncronising Staement 2");
}, 4000);

console.log(name, surname);


for (var i = 0; i < 10; i++) {
    console.log(i);
    setTimeout(() => {
        console.log(i);
    }, 2000)
}*/


// Promises
/*let myPromise = new Promise((resolve, reject) => {
    let flag = true;
    if (flag) {
        resolve("Promise is resolved with green flag ");
    } else {
        reject("Promise is rejected with red flag");
    }
})

console.log(myPromise);*/

async function fetchData() {
    let data = await fetch('https://fakestoreapi.com/Users/1');
    let response = await data.json();
    console.log(response);
    console.log(response.address);
}

fetchData();