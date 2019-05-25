var loginService = require('../services/login-service.js');
var passwordService = require('../services/password-service');
var utility = require('../services/utility.js');

module.exports = {
    RenderView : function(req, res){
        res.render('login', {});
    },
    Login : function(req, res){
        try{
            loginService.Login(req.body, function(selectResponse){
                var user = selectResponse.results[0];
                passwordService.CheckPassword(req.body.password, user.password, function(isUser){
                    if(isUser)
                        res.send(selectResponse);
                    else   
                        res.send(utility.CreateErrorResponse("Invalid Credentials"));
                });
            });
        }
        catch(exception){
            res.send(utility.CreateErrorResponse(exception));
        }
    }
}