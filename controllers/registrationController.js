module.exports = {
    RenderView : function(req, res){
        res.render('registration', {});
    },
    RegisterNewUser : function(req, res){

        // fake successful response
        var dummyResponse = {
            success : true,
            exceptions : undefined,
            messages : ['successfully hit register end point'],
            results : [req.body]
        }

        // sending back dummy response for testing ajax posts
        res.send(dummyResponse);
    }
}