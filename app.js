#!/usr/bin/env node
var express = require('express');
var path = require('path');
var port_iaas = 8080;
var app = express();
var basic = require('./src/basic');
var routing = require('./src/routing');
// HEROKU
app.set('port', (process.env.PORT || 5000));
// Servidor para libro
app.get('/', function(pet, res){
  res.sendfile(__dirname + '/public/index.html');
});

app.use(express.static(path.resolve('public')));

// Carga de los módulos de los códigos de ejemplo
app.use('/basic', basic);
app.use('/routing', routing);

// Establecer puerto de escucha
app.listen(app.get('port'));
//app.listen(port_iaas);
