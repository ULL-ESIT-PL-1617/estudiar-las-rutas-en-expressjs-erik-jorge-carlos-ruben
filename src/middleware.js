var express = require('express');
var app = express();
var router = express.Router();
router.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id);
  next();
}, function (req, res, next) {
  res.send('User Info');
});

router.get('/user/:id', function (req, res, next) {
  res.end(req.params.id);
});

router.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});


module.exports = router;
