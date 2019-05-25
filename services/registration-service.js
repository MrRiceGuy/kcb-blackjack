var cruddy = require('cruddy-orm');

module.exports = {
    RegisterNewUser : function(user, res){
        if(!(validateUser(user)) || !isValid(res))
            throw "Invalid user entered";
        
        cruddy.Insert('users', 
            [generateUserId(), user.firstName, user.lastName, user.email, user.username, user.password], 
            ['id', 'first_name', 'last_name', 'email', 'username', 'password'], 
            function(response){
                res.send(response);
        });
        
    }
}

function validateUser(user){
    return isValid(user) 
        && isValid(user.firstName) 
        && isValid(user.lastName) 
        && isValid(user.email) 
        && isValid(user.password) 
        && isValid(user.username);
}

function isValid(data){
    return data !== null && data !== undefined && data !== "";
}

function generateUserId(){
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}