var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('Petición GET en el directorio raiz');
});

router.post('/', function(req, res){
  res.send('Petición POST en el directorio raiz');
});

router.put('/user', function (req, res) {
  res.send('Petición PUT en /user');
});

router.delete('/user', function (req, res) {
  res.send('Petición DELETE en /user');
});

module.exports = router;
