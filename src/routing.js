var express = require('express');
var router = express.Router();
// Ejemplos con expresiones regulares
router.get('/ab?cd', function (req, res) {
  res.send("ab?cd proporciona acceso para las rutas acd o abcd");
});

router.get('/ab+cd', function (req, res) {
  res.send("ab+cd proporciona acceso para las rutas abcd, abbcd, abbbcd, .....");
});

router.get('/ab*cd', function (req, res) {
  res.send("ab*cd proporciona acceso para las rutas abcd, abxcd, abCUALQUERCOSAcd, .....");
});

router.get('/ab(cd)?e', function (req, res) {
  res.send("ab(cd)?e proporciona acceso para las rutas /abe y /abcde");
});

router.get('/*a*/', function (req, res) {
  res.send("a/ proporciona acceso para las rutas que contienen alguna a en su nombre");
});

router.get('/*fly$/', function (req, res) {
  res.send("*fly$/ proporciona acceso para las rutas que acaban en fly, por ejemplo butterfly, pero no para flyman");
});

// Ejemplos con next

router.get('/next', function (req, res, next) {
  console.log("Entro en la primera función");
  next();
}, function (req, res){
  res.send("Esta llamada entra en la primera función, escribe un mensaje en la consola, pasa a la siguente función y devuelve este mensaje")
});

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
}

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
}

var cb2 = function (req, res) {
  res.send('Este ejemplo pasa por un array de funciones de tamaño tres, en las dos primera escribe en la consola, y en la última manda esta respuesta');
}

router.get('/next2', [cb0, cb1, cb2]);


module.exports = router;
