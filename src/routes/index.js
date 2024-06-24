const product = require('./product');
const category = require('./category');
const productColor = require('./productColor');

function routes(app) {
  app.use('/product', product);
  app.use('/category', category);
  app.use('/productColor', productColor);
}

module.exports = routes;