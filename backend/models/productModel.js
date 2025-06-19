const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productname: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    Image1: {
        type: String,
        required: true
    },
    Image2:{
        type:String,
        required:true
    }
});

const Products = mongoose.model("Products",productSchema);

module.exports = Products;