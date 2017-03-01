var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Petición GET en el directorio raiz');
});

app.post('/', function(req, res){
  res.send('Petición POST en el directorio raiz');
});

app.put('/user', function (req, res) {
  res.send('Petición PUT en /user');
});

app.delete('/user', function (req, res) {
  res.send('Petición DELETE en /user');
});

app.listen(3000, function () {
  console.log('Escuchando en el puerto 3000');
});
