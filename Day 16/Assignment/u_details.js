let tent = JSON.parse(localStorage.getItem("house") || []);
// console.log("Tent items:", tent);


function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the product ID from the URL
const userID = getQueryParam('id');

if (userID) {
    viewDetails(userID);
} else {
    console.log("No product ID found in URL");
}

async function viewDetails(userID) {
    try {
        let data = await fetch(`https://fakestoreapi.com/users/${userID}`);
        let user = await data.json();
        console.log(user);

        document.querySelector('.user-details').innerHTML = `
            <img src="https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg" alt="office">
            <h3>${user.name.firstname.toUpperCase() + ' ' + user.name.lastname.toUpperCase()}</h3>
            <p>Username :${user.username}</p>
            <p>E-mail :${user.email}</p>
            <p>Phone No :${user.phone}</p>
            <p>Address: ${user.address.city}, ${user.address.street} , ${user.address.zipcode}</p>
            <button onclick="window.location.href='user.html'">Back to User List</button>
        `
    } catch (err) {
        console.error("Error fetching product details:", err);
    }
}
