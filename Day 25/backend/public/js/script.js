let addToCart = document.querySelector(".addToCart");


addToCart.addEventListener("click", function () {
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
})
let loader = document.querySelector('.skeleton')
let container = document.querySelector('.container')

setTimeout(() => {
    loader.style.display = "none";
    container.style.display = "block";
}, 2000)