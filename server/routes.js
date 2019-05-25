var express = require('express'),
	router = express.Router(),
	registration = require('../controllers/registrationController'),
	login = require('../controllers/loginController'),
	cruddy = require('../controllers/cruddyController');

module.exports = function(app){
	/* render views */
	router.get('/', registration.RenderView);

	/* render actions */
	router.post('/register-new-user', registration.RegisterNewUser);
	router.post('/login', login.Login);

	/* cruddy select testing */
	router.get('/test-cruddy-select-all', cruddy.CruddySelectAll);
	router.get('/test-cruddy-select-one', cruddy.CruddySelectOne);

	/* cruddy insert testing */
	router.get('/test-cruddy-insert', cruddy.CruddyInsert);

	/* cruddy update/delete testing */
	router.post('/test-cruddy-update', cruddy.CruddyUpdate);
	router.post('/test-cruddy-delete', cruddy.CruddyDelete);

	app.use(router);
}