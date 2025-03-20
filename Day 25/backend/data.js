require("dotenv").config();
const mongoose = require('mongoose');
const Product = require("./models/productSchema.js")


mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});
let sampleData = [
    {
        productName: "Wireless Bluetooth Headphones",
        link: "https://img.clevup.in/16980/rd-bh202-onear-headphone-with-fm-and-memory-card-s-1702018681276_SKU-0202_0.jpg?width=600&format=webp",
        description: "High-quality wireless Bluetooth headphones with excellent sound and long battery life.",
        category: "Electronics",
        price: 4154.17
    },
    {
        productName: "Gaming Mouse",
        link: "https://m.media-amazon.com/images/I/71fEUcsDDEL.jpg",
        description: "Ergonomic gaming mouse with high precision and customizable RGB lighting.",
        category: "Electronics",
        price: 2489.17
    },
    {
        productName: "Mechanical Keyboard",
        link: "https://rukminim2.flixcart.com/image/850/1000/xif0q/keyboard/desktop-keyboard/w/l/6/gaming-keyboard-with-87-keys-rgb-backlit-with-suspension-keys-original-imagzcgwtrabgjna.jpeg?q=90&crop=false",
        description: "Durable mechanical keyboard with tactile switches and RGB lighting.",
        category: "Electronics",
        price: 6639.17
    },
    {
        productName: "Smartwatch",
        link: "https://www.gonoise.com/cdn/shop/files/Carousel-500x500-1_5079e67e-c1ae-48f3-bf9a-d8a4c6a57e74.png?v=1697711374",
        description: "Feature-packed smartwatch with fitness tracking and notifications.",
        category: "Wearable",
        price: 9658.17
    },
    {
        productName: "Running Shoes",
        link: "https://assets.ajio.com/medias/sys_master/root/20230906/39JF/64f8e275ddf7791519bad18b/-473Wx593H-469496383-black-MODEL.jpg",
        description: "Comfortable running shoes designed for maximum performance.",
        category: "Fashion",
        price: 4979.17
    },
    {
        productName: "Leather Wallet",
        link: "https://m.media-amazon.com/images/I/61-LnuaRONS._AC_SL1000_.jpg",
        description: "Premium leather wallet with multiple card slots and compartments.",
        category: "Fashion",
        price: 1659.17
    },
    {
        productName: "Digital Camera",
        link: "https://pyxis.nymag.com/v1/imgs/ac2/ecc/356e919cdf152299805e6b22e0042a1fbd-1----.2x.h473.w710.jpg",
        description: "High-resolution digital camera for capturing stunning images.",
        category: "Electronics",
        price: 29049.17
    },
    {
        productName: "Backpack",
        link: "https://icon.in/cdn/shop/files/1_28c80d52-0741-4d5e-9661-010607b51977.jpg?v=1735286540&width=1200",
        description: "Durable backpack with ample storage and ergonomic design.",
        category: "Accessories",
        price: 3319.17
    },
    {
        productName: "Sunglasses",
        link: "https://www.soigne.co.in/product-images/DSC04482.1.jpg/583024000001329033/600x600",
        description: "Stylish UV-protected sunglasses for all-day comfort.",
        category: "Fashion",
        price: 2074.17
    },
    {
        productName: "Water Bottle",
        link: "https://glossier-prod.imgix.net/files/glossier-waterbottle-carousel-01_89aca6a5-75ef-471f-8e03-1197e2aeb13a.png?auto=compress,format&cs=srgb&w=1374",
        description: "Eco-friendly water bottle with insulated design.",
        category: "Home & Kitchen",
        price: 1244.17
    }, {
        productName: "Smartphone Stand",
        link: "https://www.hikerstore.in/cdn/shop/files/1_8aeda71b-0f07-4dde-9eb4-7c6b437dd221.jpg?v=1688425676&width=2048",
        description: "Adjustable stand for smartphones and tablets.",
        category: "Accessories",
        price: 999  // (12.05 USD ≈ 999 INR)
    },
    {
        productName: "Wireless Keyboard & Mouse Combo",
        link: "https://evmzone.com/pub/media/catalog/product/cache/4f1c65941b707303bdd6b89dd211f928/w/i/wireless_keyboard_mouse_wlmk_045_a_image_1.jpg",
        description: "Ergonomic wireless keyboard and mouse set.",
        category: "Electronics",
        price: 2999  // (36.14 USD ≈ 2999 INR)
    },

];


async function insertData(products) {
    try {
        await Product.deleteMany({}); // Clear old data
        const insertedProducts = await Product.insertMany(products);
        console.log("Inserted Products:", insertedProducts);
    } catch (error) {
        console.error("Error inserting data:", error);
    }
}
insertData(sampleData);
