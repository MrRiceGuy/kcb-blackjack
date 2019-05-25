var bcrypt = require('bcrypt');
var saltRounds = 10;

module.exports = {
    GenerateNewPassword : function(password, callback){
        bcrypt.genSalt(saltRounds, function(err, salt) {
            if(err)
                throw err;
            bcrypt.hash(password, salt, function(err, hash) {
                if(err)
                    throw err;

                callback(hash);
            });
        })  
    },
    CheckPassword : function(password, dbEnteredPassword, callback){
        bcrypt.compare(password, dbEnteredPassword, function(err, res) {
            if(err)
                throw err;
            callback(res);
        });
    }
}