const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/web', createProxyMiddleware({
  target: 'http://localhost:4001',
  changeOrigin: true
}));

app.use('/mobile', createProxyMiddleware({
  target: 'http://localhost:4002',
  changeOrigin: true
}));

app.listen(5000, () => console.log("API Gateway running on 5000"));