var http = require('http');
var express = require('express');
var app = require('./config/express')();
require('./config/express')(app);
require('./config/passport')();
require('./config/database')('mongodb://localhost/DSWA-Carolina');
const url = 'mongodb+srv://dswa5:dswa5@clusterdswa5.x96ld.mongodb.net/ifsp?retryWrites=true&w=majority';
require('./config/database.js')(url);
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express Server escutando na porta ' + app.get('port'));
    
    });
// http.createServer(app).listen(app.get('port'), function() {
    //console.log('Express Server escutando na porta ' + app.get('port'));
//});