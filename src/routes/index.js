const product = require('./product');

function routes(app) {
  app.use('/product', product);
}

module.exports = routes;