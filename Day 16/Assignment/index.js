let cont = document.querySelector(".cont");

let response = [];
async function fetchData() {
    for (let i = 1; i <= 20; i++) {
        let data = await fetch(`https://fakestoreapi.com/products/${i}`);
        response.push(await data.json());
    }
}

/* Function to convert dollar to INR */
function dollarToINR(dollar) {
    return Math.round(dollar * 74.85);
}

/* Function to render items */
async function showItem(data) {
    if (!data.length) return;

    cont.innerHTML = ''; // Clear existing items

    data.forEach((item) => {
        let newItem = document.createElement("div");
        newItem.classList.add("item");
        newItem.innerHTML = `
            <h2>${item.category.toUpperCase()}</h2>
            <img src="${item.image}" alt="${item.title}">
            <p>${item.title}</p>
            <p><b>&#8377;${dollarToINR(item.price)}</b></p>
            <p>Rating: ${item.rating.rate} ⭐</p>
            <button>Add to Cart</button>
            <button>View Details</button>
        `;
        cont.appendChild(newItem);
    });
}

/* Initial data fetch and render */
if (cont) {
    fetchData()
        .then(() => showItem(response))
        .catch(err => console.error(err));
}

/* Filter */
let filter = document.querySelector('#filter');
filter.addEventListener('change', () => {
    let value = filter.value;
    let filteredItems;
    if (value === 'all') {
        filteredItems = response;
    } else {
        filteredItems = response.filter(item => item.category === value);
    }
    showItem(filteredItems);
});

/* Sort */
let sort = document.querySelector('#sort');

sort.addEventListener('change', () => {
    let value = sort.value;
    let sortedItems;
    if (value === 'asc') {
        sortedItems = response.sort((a, b) => a.title.localeCompare(b.title));
    } else {
        sortedItems = response.sort((a, b) => b.title.localeCompare(a.title));
    }
    showItem(sortedItems);
});

/* Price */
let price = document.querySelector('#price');

price.addEventListener('change', () => {
    let value = price.value;
    let filteredItems;
    if (value === 'all') {
        filteredItems = response;
    } else if (value === 'low') {
        filteredItems = response.filter(item => dollarToINR(item.price) <= 5000);
    } else if (value === 'mid') {
        filteredItems = response.filter((item) => dollarToINR(item.price) > 5000 && item.price <= 20000);
    } else if (value === 'high') {
        filteredItems = response.filter((item) => dollarToINR(item.price) > 20000);
    }
    showItem(filteredItems);
});

/* Search */
let search = document.querySelector('#search');

let timeout;
search.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        let query = search.value.toLowerCase();
        let filteredItems = response.filter(item => item.title.toLowerCase().includes(query));
        showItem(filteredItems);
    }, 300); // Adjust delay as needed
});
