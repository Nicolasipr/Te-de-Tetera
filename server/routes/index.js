const express = require('express');
const app = express();



// Creating routes for each one
app.use(require('./login'));
app.use(require('./usuario'));
app.use(require('./products.route'));




module.exports = app;