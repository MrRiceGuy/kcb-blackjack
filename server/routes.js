var express = require('express'),
	router = express.Router(),
	registration = require('../controllers/registrationController'),
	login = require('../controllers/loginController');

module.exports = function(app){
	/* render views */
	router.get('/register-new-user', registration.RenderView);

	/* render actions */
	router.post('/register-new-user', registration.RegisterNewUser);
	router.post('/login', login.Login);

	app.use(router);
}