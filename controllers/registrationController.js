var registrationService = require('../services/registration-service.js');
var passwordService = require('../services/password-service.js');
var utility = require('../services/utility.js');

module.exports = {
    RenderView : function(req, res){
        res.render('registration', {});
    },
    RegisterNewUser : function(req, res){
        try{
            var user = req.body;
            passwordService.GenerateNewPassword(user.password, function(hash){
                user.password = hash;
                registrationService.RegisterNewUser(user, function(response){
                    res.send(response);
                });
            });
        }
        catch(exception){
            res.send(utility.CreateErrorResponse(exception));
        }
    }
}