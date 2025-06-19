const express = require('express');
const Products = require("../models/productModel");


const router = express.Router();


router.post('/add-products', async (req, res) => {
    try {
        const { productname, price, Image1, Image2 } = req.body;

        const newProduct = new Products({ productname, price, Image1, Image2 });
        await newProduct.save();

        res.status(201).json({ message: "Product created successfully", product: newProduct });
    } catch (error) {
        res.status(500).json({ message: "Error creating product", error: error.message });
    }
});


router.get('/get-products', async (req, res) => {
    try {
        const products = await Products.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products", error: error.message });
    }
});

router.get('/get-product/:id', async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});



router.delete('/delete-products/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Products.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting product", error: error.message });
    }
});


module.exports = router;