var registrationService = require('../services/registration-service.js');

module.exports = {
    RenderView : function(req, res){
        res.render('registration', {});
    },
    RegisterNewUser : function(req, res){
        registrationService.RegisterNewUser(req.body, res);
    }
}