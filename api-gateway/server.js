const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const PORT = 3000;

app.use('/sales', createProxyMiddleware({ target: 'http://127.0.0.1:3001', changeOrigin: true }));
app.use('/products', createProxyMiddleware({ target: 'http://127.0.0.1:3002', changeOrigin: true }));
app.use('/customers', createProxyMiddleware({ target: 'http://127.0.0.1:3003', changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});