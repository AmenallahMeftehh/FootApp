// import d'express mongoose bodyparser er morgan
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
//creation de la connexion vers mongo db
var db = mongoose.connect('mongodb://localhost/bdfoot');
//import du model Book
var Foot = require('./models/FootModel');
//express
var app = express();
//debugs package
app.use(morgan('dev'));
//definir un port pour notre serveur
var port = process.env.PORT || 3000;
//utilisation de body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//import de router
bookRouter = require('./routes/footRoutes')(Foot);
//uilisation de l'api
app.use('/api/foots', bookRouter);

app.use(express.static(__dirname));

app.get('/', function(req, res){
	res.sendFile(__dirname+'/app/index.html');
});

app.listen(port, function(){
	console.log("Server is running on port "+port);
});
