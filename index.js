var express = require('express'),
    config = require('./server/configure'),
    app = express();

app = config(app);

app.set('port', process.env.PORT || 3000);

app.set('views', __dirname + '/views');

app.listen(app.get('port'), function(){
    console.log('KCB-Blackjack up and running on port  ' + app.get('port'));
});