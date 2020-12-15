const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(createProxyMiddleware('/credentials', { target : 'http://localhost:3001' }));
    app.use(createProxyMiddleware('/games', { target : 'http://localhost:3002' }));
    app.use(createProxyMiddleware('/history', { target : 'http://localhost:3003' }));
};