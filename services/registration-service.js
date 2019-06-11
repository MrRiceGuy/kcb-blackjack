var cruddy = require('cruddy-orm');
var moment = require('moment');
var utility = require('./utility.js');
var emailService = require('./email-service.js');
var url = require('../environment.json').url;

module.exports = {
    RegisterNewUser : function(user, callback){
        if(!(utility.ValidateUser(user)))
            throw "Invalid user entered";

        var userid = generateCode('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
        cruddy.Insert('users', 
            [userid, user.firstName, user.lastName, user.email, user.username, user.birthdate, user.password], 
            ['id', 'first_name', 'last_name', 'email', 'username', 'birthdate', 'password'], 
            function(response){
                console.log(response);
                if(response.success){
                    var confirmationCode = generateCode('xxxxxx');
                    cruddy.Insert('user_code', 
                        [userid, confirmationCode, moment().format('YYYY-MM-DD HH:mm:ss')], 
                        ['account_id', 'code', 'date'], 
                        function(response){
                            if(response.success){
                                emailService.SendEmail(user.email, 'Thank You For Registering', 
                                `To complete your registration, go to http://${url}:3000/confirm-registration and enter code ${confirmationCode}.`)
                            }

                           callback(response);
                        });
                }
        });
    }
}

function generateCode(format){
    return format.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}