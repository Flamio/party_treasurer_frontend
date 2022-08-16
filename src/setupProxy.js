const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/party-treasurer',
    createProxyMiddleware({
      target: 'http://v1295395.hosted-by-vdsina.ru/party_treasurer/',
      changeOrigin: true,
    })
  );
};