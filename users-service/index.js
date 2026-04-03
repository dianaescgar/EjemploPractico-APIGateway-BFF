const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  res.json({ message: "Hello from Users Service" });
});

app.listen(3001, () => console.log("Users service running on 3001"));