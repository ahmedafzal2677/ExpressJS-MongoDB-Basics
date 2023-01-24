const mongoose = require('mongoose');
const Product = require('../model/product');


mongoose.connect("mongodb://localhost:27017/mern-db");

const connectDB = async () =>{
    const product = await Product.create({
        title:'iPhone X Pro Max',
        price: 50000,
    })
    await product.save();
}

connectDB();
