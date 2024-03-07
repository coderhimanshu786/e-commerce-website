const express = require('express');
const app = express();

app.use(express.json());


//import all routes
// Import the product route
const productRoute = require('./routes/product');

// Use the product route middleware
app.use('/api/v1/products', productRoute);


module.exports = app;
