let addToCartButtons = document.querySelectorAll(".addToCart");

addToCartButtons.forEach(button => {
    button.addEventListener("click", function () {
        Toastify({
            text: "Added to Cart",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
        }).showToast();
    });
});
let loader = document.querySelector('.skeleton')
let container = document.querySelector('.container')

setTimeout(() => {
    loader.style.display = "none";
    container.style.display = "block";
}, 2000)

/* Pagimentation */
document.addEventListener("DOMContentLoaded", function () {
    let products = document.querySelectorAll(".col-4"); // Select all product cards
    let loadMoreBtn = document.querySelector(".btn-warning");
    let itemsPerPage = 10; // Show 10 products per page
    let currentIndex = 0; // Tracks the last shown index

    function showProducts() {
        for (let i = currentIndex; i < currentIndex + itemsPerPage && i < products.length; i++) {
            products[i].style.display = "block";
        }
        currentIndex += itemsPerPage;

        // Hide "Load More" button when all products are displayed
        if (currentIndex >= products.length) {
            loadMoreBtn.style.display = "none";
        }
    }

    // Initially hide all products and show only the first 10
    products.forEach(product => product.style.display = "none");
    showProducts();

    // Load More Button Click Event
    loadMoreBtn.addEventListener("click", showProducts);
});
