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
                        if(validPassword){
                            req.session.regenerate(function(error){
                                if(error)
                                    throw error;
                                
                                req.session.logged = true;
                                req.session.user = user;

                                res.send(selectResponse);
                            });
                        }
                        else   
                        res.send(utility.CreateErrorResponse("incorrect password entered"));
                    });
                }else{
                    res.send(utility.CreateErrorResponse(`no user found with name ${req.body.username}`));
                }
            });
        }
        catch(exception){
            res.send(utility.CreateErrorResponse(exception));
        }
    }
}