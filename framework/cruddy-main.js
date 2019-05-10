var mysql = require('mysql'),
    utility = require('./cruddy-utility'),
    sqlConstants = require('./cruddy-constants'),
    env = require('../environment.json');

module.exports = {
    Select : function(table, values, constraints, callback){
        var sql = `${sqlConstants.Select} ${values.join(',')} ${sqlConstants.From} ${table}`;

        if(utility.IsValid(constraints)){
            var constraintArray = [];
            var values = [];
            for (var key in constraints){
                constraintArray.push(`${key} = ?`);
                values.push(constraints[key]);
            }

            if(constraintArray.length > 0){
                sql += ` ${sqlConstants.Where} ${constraintArray.join(` ${sqlConstants.And} `)}`;
                sql = mysql.format(sql, values);
            }
        }
        
        sql += ';';

        try{
            GetConnection(function(connection){
                connection.query(sql, function(exception, results){
                    connection.end();
                    callback(CreateSqlResponse(exception 
                        ? sqlConstants.Error : sqlConstants.Success, exception, results));
                });
            });
        }catch(exception){
            callback(CreateSqlResponse(sqlConstants.Error, exception));
        }
    }
}

function GetConnection(callback){

    var connection = mysql.createConnection({
            host : env.url,
            user : env.user,
            password : env.password,
            database : env.database
    });
    
    connection.connect(function(exception){
        if(exception){
            throw exception;
        }
    });

    callback(connection);
}

function CreateSqlResponse(status, exceptions, results){
    return {
        status : status,
        exceptions : exceptions,
        results : results
    }
}