const product = require('./product');
const category = require('./category');

function routes(app) {
  app.use('/product', product);
  app.use('/category', category);
}

module.exports = routes;