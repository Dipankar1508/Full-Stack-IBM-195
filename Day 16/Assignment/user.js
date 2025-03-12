let cont = document.querySelector(".cont");

let office = [];
async function fetchData() {
    for (let i = 1; i <= 10; i++) {
        let data = await fetch(`https://fakestoreapi.com/users/${i}`);
        office.push(await data.json());
    }
}
// console.log(office);


/* Function to render office */
async function showperson(data) {
    if (!data.length) return;
    document.querySelector(".loader-cont").style.display = 'none';
    cont.innerHTML = '';

    data.forEach((person) => {
        let newperson = document.createElement("div");
        newperson.classList.add("newperson");
        newperson.innerHTML = `
            <img src="https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg" alt="office">
            <h3>${person.name.firstname.toUpperCase() + ' ' + person.name.lastname.toUpperCase()}</h3>
            <p>Username :${person.username}</p>
            <p><b>E-mail :${person.email}</b></p>
            <p>Address: ${person.address.city}, ${person.address.street}</p>
            <button onclick="viewDetails(${person.id})">View Details</button>
        `;
        // console.log(person.name)
        cont.appendChild(newperson);
    });
}


/* Initial data fetch and render */
if (cont) {
    fetchData().then(() => {
        setTimeout(() => {
            showperson(office);
        }, 300)
    }).catch((err) => {
        console.error(err);
    })
}


/* Sort */
let sort = document.querySelector('#sort');

sort.addEventListener('change', () => {
    let value = sort.value;
    let sortedoffice;
    if (value === 'asc') {
        sortedoffice = office.slice().sort((a, b) => a.name.firstname.localeCompare(b.name.firstname));
    } else if (value === 'des') {
        sortedoffice = office.slice().sort((a, b) => b.name.firstname.localeCompare(a.name.firstname));
    } else if (value === 'all') {
        sortedoffice = office; // Show the original array as it is
    }
    showperson(sortedoffice);

});


/* Search */
/* Search */
let search = document.querySelector('#search');

let timeout;
search.addEventListener('input', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        let query = search.value.toLowerCase();
        let filteredoffice = office.filter(person => {
            let fullName = (person.name.firstname || '') + ' ' + (person.name.lastname || '');
            return fullName.toLowerCase().includes(query);
        });
        showperson(filteredoffice);
    }, 300); // Adjust delay as needed
});

/* View Details */
let selectedPeople = JSON.parse(localStorage.getItem('house')) || [];

function viewDetails(personId) {
    if (!selectedPeople.includes(personId)) {
        selectedPeople.push(personId);
        localStorage.setItem("house", JSON.stringify(selectedPeople));
        alert("Person added to the list!");
    } else {
        alert("Person is already in the list!");
    }
    window.location.href = `u_details.html?id=${personId}`;
}

/* Dark Mode */

function darkMode() {
    let element = document.body;
    let darkBtn = document.getElementById("dark");
    element.classList.toggle("dark-mode");

    // Update button text/icon
    if (element.classList.contains("dark-mode")) {
        darkBtn.innerHTML = `<i class="fa-solid fa-sun"></i>&nbsp; Light`;
    } else {
        darkBtn.innerHTML = `<i class="fa-solid fa-moon"></i>&nbsp; Dark`;
    }
}
