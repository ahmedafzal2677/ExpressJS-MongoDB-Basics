const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    title : {
        type: String,
        required: true,
    },
    price : {
        type:Number,
        min : 1,
    },
});

const Product = mongoose.model('Product', productSchema);

module.exports  = Product;