let cont = document.querySelector(".cont");

let office = [];
async function fetchData() {
    for (let i = 1; i <= 20; i++) {
        let data = await fetch(`https://fakestoreapi.com/users/${i}`);
        office.push(await data.json());
    }
}
// console.log(office);


/* Function to render office */
async function showperson(data) {
    if (!data.length) return;

    cont.innerHTML = ''; // Clear existing office

    data.forEach((person) => {
        let newperson = document.createElement("div");
        newperson.classList.add("newperson");
        newperson.innerHTML = `
            <img src="https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg" alt="office">
            <h3>${person.name.firstname.toUpperCase() + ' ' + person.name.lastname.toUpperCase()}</h3>
            <p>Username :${person.username}</p>
            <p><b>E-mail :${person.email}</b></p>
            <p>Address: ${person.address.city}, ${person.address.street}</p>
            <button>View Details</button>
        `;

        cont.appendChild(newperson);
    });
}

/* Initial data fetch and render */
if (cont) {
    fetchData()
        .then(() => showperson(office))
        .catch(err => console.error(err));
}

/* Filter */
let filter = document.querySelector('#filter');
filter.addEventListener('change', () => {
    let value = filter.value;
    let filteredoffice;
    if (value === 'all') {
        filteredoffice = office;
    } else {
        filteredoffice = office.filter(person => person.category === value);
    }
    showperson(filteredoffice);
});

/* Sort */
let sort = document.querySelector('#sort');

sort.addEventListener('change', () => {
    let value = sort.value;
    let sortedoffice;
    if (value === 'asc') {
        sortedoffice = office.sort((a, b) => a.title.localeCompare(b.title));
    } else {
        sortedoffice = office.sort((a, b) => b.title.localeCompare(a.title));
    }
    showperson(sortedoffice);
});

/* Price */
let price = document.querySelector('#price');

price.addEventListener('change', () => {
    let value = price.value;
    let filteredoffice;
    if (value === 'all') {
        filteredoffice = office;
    } else if (value === 'low') {
        filteredoffice = office.filter(person => dollarToINR(person.price) <= 5000);
    } else if (value === 'mid') {
        filteredoffice = office.filter((person) => dollarToINR(person.price) > 5000 && person.price <= 20000);
    } else if (value === 'high') {
        filteredoffice = office.filter((person) => dollarToINR(person.price) > 20000);
    }
    showperson(filteredoffice);
});

/* Search */
let search = document.querySelector('#search');

let timeout;
search.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        let query = search.value.toLowerCase();
        let filteredoffice = office.filter(person => person.title.toLowerCase().includes(query));
        showperson(filteredoffice);
    }, 300); // Adjust delay as needed
});
