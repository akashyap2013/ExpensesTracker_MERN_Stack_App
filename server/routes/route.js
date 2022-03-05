const routes = require('express').Router();

routes.route('/api/categories')
    .get((req, res) => res.json("Get Request from Categories") );


module.exports = routes;