const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    link: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
});

const Product = mongoose.model('Product', prodSchema);

module.exports = Product;