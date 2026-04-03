const express = require('express');
const app = express();

app.get('/products', (req, res) => {
  res.json({ message: "Hello from Products Service" });
});

app.listen(3002, () => console.log("Products service running on 3002"));