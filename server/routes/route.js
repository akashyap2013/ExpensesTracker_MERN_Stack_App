const routes = require('express').Router();
const controller = require('../controller/controller');

routes.route('/api/categories')
    .post(controller.create_Categories)
    .get(controller.get_Categories)

routes.route('/api/transaction')
    .post(controller.create_Transaction)
    .get(controller.get_Transaction)
    .delete(controller.delete_Transaction)

routes.route('/api/labels')
    .get(controller.get_Labels)

module.exports = routes;