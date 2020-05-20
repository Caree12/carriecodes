const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World from my server!');
});

app.get('/test', (req, res) => {
	res.set('X-Custom-header', 'I am a custom header');
	res.status(418);
	res.send('header and status set on test')
})

app.listen(port, () => 	console.log(`Listening on port ${port}`));


