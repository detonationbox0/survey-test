const express = require('express');
const app = express();
require('dotenv').config()

// Load port from .env, otherwise set to 3001 by default
const port = process.env.PORT || 3001;

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

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
