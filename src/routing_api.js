var express = require('express');
var router = express.Router();

router.get('/heyThereFirstRoute', function(req, res) {
	res.end('what is going on!');
});
/*
	No podemos acceder a localhost:8080/myFirstRoute/heyThereFirstRoute

	app.get('/heyThereFirstRoute', function(req, res) {
		res.end('what is going on!');
	});
*/
router.get('/heyThereFirstRouteAgain', function(req, res) {
	res.end('what is going on!, this is a bit different');
});
/**
	No podemos acceder a localhost:8080/myFirstRoute/heyThereFirstRouteAgain

	app.get('/heyThereFirstRouteAgain', function(req, res) {
		res.end('what is going on!, this is a bit different');
	});
*/
module.exports = router;
