var registrationService = require('../services/registration-service.js');
var passwordService = require('../services/password-service.js');

module.exports = {
    RenderView : function(req, res){
        res.render('registration', {});
    },
    RegisterNewUser : function(req, res){
        var user = req.body;
        passwordService.GenerateNewPassword(user.password, function(hash){
            user.password = hash;
            registrationService.RegisterNewUser(user, res, function(response){
                res.send(response);
            });
        });
    }
}