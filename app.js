#!/usr/bin/env node
var express = require('express');
var path = require('path');
var port_iaas = 8080;
var app = express();

// HEROKU
app.set('port', (process.env.PORT || 5000));

app.get('/', function(pet, res){
  res.sendfile(__dirname + 'public/_book/index.html');
});

app.use(express.static(path.resolve('gh-pages')));

app.listen(app.get('port'));
//app.listen(port_iaas);
