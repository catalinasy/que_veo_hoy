//paquetes necesarios para el proyecto
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var controlador = require("./controladores/controlador")
var app = express();
var path = require('path');
var generos = require("./controladores/generos");
var info = require("./controladores/info");

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../cliente')));

//seteamos el puerto en el cual va a escuchar los pedidos la aplicación

var puerto = '8080';

app.listen(puerto, function () {
  console.log( "Escuchando en el puerto " + puerto );
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, '../cliente/html/index.html'))
})

app.get('/info.html', function(req, res){
  res.sendFile(path.join(__dirname, '../cliente/html/info.html'))
})

app.get('/error.html', function(req, res){
  res.sendFile(path.join(__dirname, '../cliente/html/error.html'))
})

app.get('/peliculas', function (req, res) {
  controlador(req, res);
});

app.get("/peliculas/:id", function(req, res){
  info(req, res);
})

app.get('/generos', function(req, res){
  generos(req, res);
})

