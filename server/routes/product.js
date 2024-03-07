const express = require('express');
const router = express.Router();

const { getProducts } = require('../controllers/productController');

// Define route for GET request to '/api/v1/products'
router.route('/').get(getProducts);

module.exports = router;
