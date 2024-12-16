const express = require("express");
const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/ProductController");

const router = express.Router();

// Route to create a product
router.post("/products", createProduct);

// Route to get all products
router.get("/products", getAllProducts);

// Route to get a single product by ID
router.get("/products/:id", getProductById);

// Route to update a product
router.put("/products/:id", updateProduct);

// Route to delete a product
router.delete("/products/:id", deleteProduct);

module.exports = router;
