var express = require('express'),
	router = express.Router(),
	registration = require('../controllers/registrationController'),
	login = require('../controllers/loginController');
	home = require('../controllers/homeController');

module.exports = function(app){
	/* render views */
	router.get('/', home.RenderView);
	router.get('/register-new-user', registration.RenderView);
	router.get('/login', login.RenderView);

	/* render actions */
	router.post('/register-new-user', registration.RegisterNewUser);
	router.post('/login', login.Login);

	app.use(router);
}