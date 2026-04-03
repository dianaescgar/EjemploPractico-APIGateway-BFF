const express = require('express');
const axios = require('axios');

const app = express();

app.get('/dashboard', async (req, res) => {
  try {
    const users = await axios.get('http://localhost:3001/users');
    const products = await axios.get('http://localhost:3002/products');

    res.json({
      platform: "web",
      users: users.data,
      products: products.data
    });
  } catch (error) {
    res.status(500).json({
      error: "Error connecting to services",
      details: error.message
    });
  }
});

app.listen(4001, () => {
  console.log("BFF Web running on port 4001");
});