var express = require('express');
var app = express();
var router = express.Router();
var port = 8080;

app.use('myFirstRoute', router);

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

app.listen(port, function() {
	console.log('I\'m listening...');
})
