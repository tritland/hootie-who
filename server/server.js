var express = require ('express');
var app = express();
var bodyParser = require('body-parser');
var people = require('./routes/people')
var port = 5000;

app.use(express.static('./server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/people', people);

app.listen(port, function(){
    console.log('listening on port', port);
});