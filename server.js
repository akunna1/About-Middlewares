// Importing required modules
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');

// Initializing the Express application
const app = express();

// Middleware to parse incoming JSON request bodies
app.use(express.json());

// Middleware to parse incoming URL-encoded request bodies (e.g., form submissions)
app.use(express.urlencoded({ extended: true }));

// Middleware to serve static files from the 'public' directory
app.use(express.static('public'));

// Middleware to enable Cross-Origin Resource Sharing (CORS)
app.use(cors());

// Middleware to log HTTP requests and responses
app.use(morgan('tiny'));

// Middleware to set various HTTP headers for security
app.use(helmet());

// Middleware to compress responses using gzip or deflate
app.use(compression());

// Defining a route for demonstration
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Defining a route to serve static files (for example, from the 'public' directory)
app.get('/static', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // Serving 'index.html' from the 'public' directory
});

// Custom error-handling middleware
function errorHandler(err, req, res, next) {
  console.error(err.stack); // Logging the error stack trace
  res.status(500).send('Something went wrong!'); // Sending a 500 status and error message
}

// Using the custom error-handling middleware
app.use(errorHandler);

// Defining the port and starting the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
