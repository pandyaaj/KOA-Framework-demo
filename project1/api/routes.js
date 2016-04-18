var superagent = require('superagent');
var data = require('./data');

module.exports = function (app) {
	app.get('/api', function (req, res) {

		console.log(req.query)
		superagent
			.get('http://api.tvmaze.com/search/shows?q=' + req.query.number)
			//.query({filter: 'summary:' + req.query.summary})
			.query({ format: "json" })  // check y format
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}

				if (req.query.save) {
					data.saveFact(response.body, function (err, saved) {
						response.body.saved = saved;
						
						res.json(response.body);
					});
				} else { 
					res.json(response.body);
					
				
				}
			});
			});

	app.get('/api/shows/:id', function (req, res) {

		console.log(req.query)
		superagent
			.get('http://api.tvmaze.com/shows/'+req.params.id+'?embed=cast')
			.query({ format: "json" })  // check y format
			.end(function (err, response) {
				if (err) {
					return res.send(err);
				}

				if (req.query.save) {
					data.saveFact(response.body, function (err, saved) {
						response.body.saved = saved;
						
						res.json(response.body);
					});
				} else { 
					res.json(response.body);
					
				
				}
			});

	});
}