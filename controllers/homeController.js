module.exports = {
    RenderView : function(req, res){
        if(req.session.logged){
            res.render('home', {});
        }else{
            res.redirect('/login');
        }
    }
}