var cruddy = require('../framework/cruddy-main');

module.exports = {
    CruddySelectAll : function(req, res){
        cruddy.Select('people', ['first_name', 'last_name'], null, function(response){
            res.render('cruddy_select', {
                success : response.success,
                results : response.results
            });
        });
    },
    CruddySelectOne : function(req, res){
        cruddy.Select('people', ['first_name', 'last_name'], {
            first_name : 'Robert'
        }, function(response){
            res.render('cruddy_select', {
                success : response.success,
                results : response.results
            });
        });
    }
}