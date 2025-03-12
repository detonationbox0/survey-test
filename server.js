const express = require('express');
const app = express();

// Temporarily load data
// const response = require('./docs/response.json');

// JSON Middleware
app.use(express.json());

app.post('/ss', (req, res) => {
	// Body of the request...
	console.log(req.body);

	// Send status 200
	res.status(200).send('OK');

});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
