module.exports = {
    RenderView : function(req, res){
        res.render('registration', {});
    },
    RegisterNewUser : function(req, res){
        res.send({
            message : 'received new user info',
            user : req.body
        });
    }
}