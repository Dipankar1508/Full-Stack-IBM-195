require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Product = require("./models/productSchema.js");

const app = express();
const port = process.env.PORT || 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Enable JSON parsing
app.use(express.static(path.join(__dirname, "public")));

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});


app.get('/', (req, res) => {
    res.send('Welcome')
});

app.get("/product", (req, res) => {
    res.render("product")
})

app.post("/product", async (req, res) => {
    let { productName, link, description, category, price } = req.body;
    try {
        let product = new Product({
            productName,
            link,
            description,
            category,
            price,
        });
        await product.save(); // Save to MongoDB
        console.log("Product saved:", product);
        res.send("Product added successfully");
    } catch (err) {
        console.error("Error adding product:", err);
        res.status(500).send("Error adding product");
    }
});

app.get("/renderProduct", async (req, res) => {
    let products = await Product.find({});
    res.render("renderProd", { products });
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});