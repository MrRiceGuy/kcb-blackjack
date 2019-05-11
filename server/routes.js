var express = require('express'),
	router = express.Router(),
	registration = require('../controllers/registrationController'),
	cruddy = require('../controllers/cruddyController');

module.exports = function(app){
	/* render views */
	router.get('/', registration.RenderView);

	/* cruddy select testing */
	router.get('/test-cruddy-select-all', cruddy.CruddySelectAll);
	router.get('/test-cruddy-select-one', cruddy.CruddySelectOne);

	app.use(router);
}