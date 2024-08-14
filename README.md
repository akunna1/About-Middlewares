#### About-Middlewares
- Express is the framework for node.js
- Middleware functions are crucial for handling HTTP requests and responses
-  Middlewares are used to modify requests, handle responses, and control the flow of the application
-  They can be built-in, third-party, or custom, and are essential for performing tasks such as parsing data, logging, handling CORS, and managing errors
- These functions have access to the request (req), response (res), and the next function in the application's request-response cycle
  

Function components:
function (req, res, next) {
  // Middleware logic here
  next();
}

- req: The request object, which contains data about the HTTP request
- res: The response object, which allows one to send a response to the client
- next: A function that passes control to the next middleware in the stack. If not called, the request will hang


Examples of node.js middleware that work with the express framework:
- app.use(express.json()); --> Parses incoming JSON request bodies
- app.use(express.urlencoded({ extended: true })); --> Parses incoming URL-encoded request bodies (form submissions)
- app.use(express.static('public')); --> Serves static files from a directory
- app.use(cors()); --> Enables Cross-Origin Resource Sharing
- app.use(morgan('tiny')); --> HTTP request logger middleware (records details about incoming HTTP requests and their responses)
- app.use(helmet()); --> Helps secure Express apps by setting various HTTP headers (to protect your application from common web vulnerabilities)
- app.use(compression()); --> Gzip compression middleware for responses (to reduce the size of the data being transmitted over the network)

Another example:
- error handling middleware
function errorHandler(err, req, res, next) {
  console.error(err.stack); // Logging error stack trace
  res.status(500).send('Something went wrong!');
}

app.use(errorHandler);
