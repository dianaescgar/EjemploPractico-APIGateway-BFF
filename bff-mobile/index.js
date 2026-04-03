const express = require('express');
const axios = require('axios');

const app = express();

app.get('/dashboard', async (req, res) => {
  try {
    const users = await axios.get('http://localhost:3001/users');

    res.json({
      platform: "mobile",
      users: users.data
    });
  } catch (error) {
    res.status(500).json({
      error: "Error connecting to services",
      details: error.message
    });
  }
});

app.listen(4002, () => {
  console.log("BFF Mobile running on port 4002");
});