var cruddy = require('cruddy-orm');
var utility = require('./utility.js');

module.exports = {
    RegisterNewUser : function(user, res, callback){
        if(!(utility.ValidateUser(user)) || !utility.IsValid(res))
            throw "Invalid user entered";
        
        cruddy.Insert('users', 
            [generateUserId(), user.firstName, user.lastName, user.email, user.username, user.password], 
            ['id', 'first_name', 'last_name', 'email', 'username', 'password'], 
            function(response){
                callback(response);
        });
    }
}

function generateUserId(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}