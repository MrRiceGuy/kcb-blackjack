var cruddy = require('cruddy-orm');
var utility = require('./utility.js');

module.exports = {
    Login : function(userData, callback){
        if(!utility.IsValid(userData.username) || !utility.IsValid(userData.password))
            throw "Invalid User Data Entered";

        cruddy.Select('users', ['*'], {
            'username' : userData.username
        }, callback);
    }
}