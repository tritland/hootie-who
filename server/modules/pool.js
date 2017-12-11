var pg = require('pg');

var config = {
	database: 'hootie_who', 
	host: 'localhost', 
	port: 5432, 
	max: 10, 
	idleTimeoutMillis: 30000 
};


module.exports = pg.Pool(config);