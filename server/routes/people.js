var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js')

router.post('/', function(req, res){
	console.log('employee POST was hit!');
	pool.connect(function(errorConnectingToDatabase, client, done){
		if(errorConnectingToDatabase) {
			console.log('Error connecting to database', errorConnectingToDatabase);
			res.sendStatus(500);
		} else {
            client.query('INSERT INTO people (full_name, image_URL) VALUES ($1, $2);', 
            [req.body.name, req.body.image], function(errorMakingQuery, result) {
				done();
				if(errorMakingQuery) {
					console.log('Error making database query', errorMakingQuery);
					res.sendStatus(500);
				} else {
					res.sendStatus(201);
				}
			});
		};
	});
});


module.exports = router;