# About Middlewares in Express.js

Express.js is a lightweight web application framework for Node.js. A key feature of Express is the use of **middleware functions**—functions that have access to the `request (req)`, `response (res)`, and `next()` objects in the HTTP lifecycle.

---

## 📌 What is Middleware?

Middleware functions are used to:

* **Modify requests** or responses
* **Control flow** in your application
* **Handle errors**
* **Enhance security**, **log activity**, or **serve static files**

They are essential to any Express-based Node.js application.

---

## Middleware Function Syntax

```js
function (req, res, next) {
  // Your logic here
  next(); // Pass control to the next middleware
}
```

* `req`: Request object – holds data about the HTTP request
* `res`: Response object – used to send data back to the client
* `next`: Callback function to pass control to the next middleware

> ⚠️ If `next()` is not called, the request will hang.

---

## Common Express Middlewares

| Middleware                               | Purpose                                             |
| ---------------------------------------- | --------------------------------------------------- |
| `express.json()`                         | Parses incoming JSON payloads                       |
| `express.urlencoded({ extended: true })` | Parses URL-encoded payloads (like form submissions) |
| `express.static('public')`               | Serves static files like HTML, CSS, images          |
| `cors()`                                 | Enables **CORS** (Cross-Origin Resource Sharing)    |
| `morgan('tiny')`                         | Logs HTTP request details                           |
| `helmet()`                               | Sets HTTP headers for security                      |
| `compression()`                          | Compresses response bodies using Gzip               |

---

## Example: Custom Error Handling Middleware

```js
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
}

app.use(errorHandler);
```

This function logs the error stack trace and sends a 500 response. Place this **after all other route handlers**.

