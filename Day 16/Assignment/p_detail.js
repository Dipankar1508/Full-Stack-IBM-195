let cart = JSON.parse(localStorage.getItem("market")) || [];
// console.log("Cart items:", cart);

// Function to get query parameters
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Get the product ID from the URL
const productId = getQueryParam('id');

if (productId) {
    viewDetails(productId);
} else {
    console.log("No product ID found in URL");
}

// Fetch and display product details
async function viewDetails(productId) {
    try {
        let data = await fetch(`https://fakestoreapi.com/products/${productId}`);
        let product = await data.json();

        // Render product details
        document.querySelector(".product-details").innerHTML = `
            <h2>${product.category.toUpperCase()}</h2>
            <img src="${product.image}" alt="${product.title}">
            <p>${product.title}</p>
            <p><b>Price: &#8377;${dollarToINR(product.price)}</b></p>
            <p>Rating: ${product.rating.rate} ⭐</p>
            <p>Description: ${product.description}</p>
            <button onclick="window.location.href='index.html'">Back to Product List</button>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
    } catch (error) {
        console.error("Error fetching product details:", error);
    }
}


// Convert dollar to INR
function dollarToINR(dollar) {
    return Math.round(dollar * 74.85);
}

// Add to cart
function addToCart(productId) {
    if (!cart.includes(productId)) {
        cart.push(productId);
        localStorage.setItem("market", JSON.stringify(cart));
        alert("Product added to cart!");
    } else {
        alert("Product already in cart!");
    }
}
