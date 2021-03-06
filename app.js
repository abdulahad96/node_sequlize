const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// This will be our application entry. We'll setup our server here.
const http = require('http');
// Set up the express app
const app = express();
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./swagger_output.json')

// Log requests to the console.
app.use(logger('dev'));
// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
// Setup a default catch-all route that sends back a welcome message in JSON format.
require('./routes')(app)
app.get('*', (req, res) => res.status(200).send({
message: 'Welcome to the beginning of nothingness.',
}));
const port = parseInt(process.env.PORT, 10) || 8000;
console.log(port)
app.set('port', port);
const server = http.createServer(app);
server.listen(port);
module.exports = app;