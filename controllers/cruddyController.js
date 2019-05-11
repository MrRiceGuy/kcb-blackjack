var cruddy = require('../framework/cruddy-main');

module.exports = {
    CruddySelectAll : function(req, res){
        cruddy.Select('people', ['id', 'first_name', 'last_name'], null, function(response){
            res.render('cruddy_test', {
                success : response.success,
                results : response.results
            });
        });
    },
    CruddySelectOne : function(req, res){
        cruddy.Select('people', ['id', 'first_name', 'last_name'], {
            first_name : 'Robert'
        }, function(response){
            res.render('cruddy_test', {
                success : response.success,
                results : response.results
            });
        });
    },
    CruddyInsert : function(req, res){
        cruddy.Insert(
            'people', 
            [`first-${Math.floor(Math.random() * 1000) + 1}`, `last-${Math.floor(Math.random() * 1000) + 1}`], 
            ['first_name', 'last_name'], 
            function(response){
                if(response.success){
                    console.log('success');
                }else{
                    console.log('something went wrong');
                }
                res.redirect('/test-cruddy-select-all');
        });
    },
    CruddyDelete : function(req, res){
       cruddy.Delete('people', {
           id : req.body.id
        }, function(response){
            res.send(response);
        });
    },
    CruddyUpdate : function(req, res){
        cruddy.Update('people', {
            first_name : req.body.firstName,
            last_name : req.body.lastName
        }, {
            id : req.body.id
        },function(response){
            res.send(response)
        });
    }
}