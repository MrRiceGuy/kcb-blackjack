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
                if(selectResponse.success && selectResponse.results.length > 0){
                    var user = selectResponse.results[0];
                    passwordService.CheckPassword(req.body.password, user.password, function(validPassword){
                        if(validPassword)
                            res.send(selectResponse);
                        else   
                            res.send(utility.CreateErrorResponse("Invalid Credentials"));
                    });
                }else{
                    res.send(utility.CreateErrorResponse("Invalid Credentials"));
                }
            });
        }
        catch(exception){
            res.send(utility.CreateErrorResponse(exception));
        }
    }
}