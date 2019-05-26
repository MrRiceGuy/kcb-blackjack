var cruddy = require('cruddy-orm');
var moment = require('moment');
var utility = require('./utility.js');

module.exports = {
    RegisterNewUser : function(user, callback){
        if(!(utility.ValidateUser(user)))
            throw "Invalid user entered";
        
        var userid = generateCode('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx');
        cruddy.Insert('users', 
            [userid, user.firstName, user.lastName, user.email, user.username, user.birthdate, user.password], 
            ['id', 'first_name', 'last_name', 'email', 'username', 'birthdate', 'password'], 
            function(response){
                if(response.success){
                    cruddy.Insert('user_code', 
                        [userid, generateCode('xxxxxx'), moment().format('YYYY-MM-DD HH:mm:ss')], 
                        ['account_id', 'code', 'date'], 
                        function(response){
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