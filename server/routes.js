var express = require('express'),
	router = express.Router(),
	registration = require('../controllers/registrationController');

module.exports = function(app){
	router.get('/', registration.RenderView);

	app.use(router);
}