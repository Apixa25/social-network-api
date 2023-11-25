// Importing necessary modules
const express = require("express"); // Import the Express.js framework
const db = require("./config/connection"); // Import the database connection object (likely using Mongoose)
const routes = require("./routes"); // Import the routes for the API

// Setting up constants
const PORT = process.env.PORT || 3001; // Set the port for the server (use environment variable or default to 3001)

// Creating an Express application
const app = express(); // Initialize the Express application

// Middleware setup
app.use(express.urlencoded({ extended: true })); // Parse incoming requests with URL-encoded payloads (support complex objects)
app.use(express.json()); // Parse incoming requests with JSON payloads
app.use(routes); // Mount the API routes onto the application

// Check for successful database connection and start the server
db.once("open", () => {
  // Event triggered once when the MongoDB connection is successfully established
  app.listen(PORT, () => {
    // Start the Express server on the specified port
    console.log(`😀👍 API server running on port ${PORT}!`); // Log a message to the console when the server is running
  });
});
