var cruddy = require('cruddy-orm');
var utility = require('./utility.js');

module.exports = {
    RegisterNewUser : function(user, callback){
        if(!(utility.ValidateUser(user)))
            throw "Invalid user entered";
        
        cruddy.Insert('users', 
            [generateUserId(), user.firstName, user.lastName, user.email, user.username, user.birthdate, user.password], 
            ['id', 'first_name', 'last_name', 'email', 'username', 'birthdate', 'password'], 
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