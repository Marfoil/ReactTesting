const createServer = require('http').createServer;
const express = require('express');

const { PORT = 3000 } = process.env;

const app = express();

app.use(express.static('dist'));

const server = createServer(app);

server.listen(PORT, () => {
	console.log(`Application running on port ${PORT}`);
});
