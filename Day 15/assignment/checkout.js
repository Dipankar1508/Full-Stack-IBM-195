let order = document.querySelector('.order');
let card = document.createElement('div');
card.classList.add('card');
order.append(card);

function confirmOrder() {
    let parseData = JSON.parse(localStorage.getItem("products")) || [];
    if (parseData.length > 0) {

        let totalPrice = 0;

        let productList = parseData.map((item, index) => {
            let itemPrice = convertToRupee(item.price);
            totalPrice += itemPrice;
            return `<p>${item.name} - ₹${itemPrice}</p>`;
        }).join('');

        console.log(productList)

        card.innerHTML = `
            <h2>Order Summary</h2>
            ${productList}
            <h3>Total: ₹${totalPrice}</h3>
            <label for="payment">Choose a payment method:</label>
            <select required name="payment" id="payment">
                <option value="UPI" selected>UPI Payment</option>
                <option value="CARD">Card Payment</option>
                <option value="COD">Cash on Delivery</option>
            </select>
            <button onclick="placeOrder()">Place Order</button>
        `;

        // Clear previous order summary
        // order.innerHTML = "";
    } else {
        order.innerHTML = "<p>Your cart is empty. Add some products to place an order!</p>";
    }
}


function placeOrder() {
    let paymentMethod = document.querySelector('#payment').value;
    alert(`Order placed successfully! Payment method: ${paymentMethod}`);
    localStorage.removeItem("products");
    container.innerHTML = "<p>Your cart is empty.</p>";
    order.innerHTML = "";
}

