// Importing necessary modules
const router = require("express").Router(); // Import the Router from Express.js

// Importing user and thought routes
const userRoutes = require("./user-routes"); // Import the user-related routes
const thoughtRoutes = require("./thought-routes"); // Import the thought-related routes

// Mounting user and thought routes under specific endpoints

// /api/users
router.use("/users", userRoutes); // Mount user routes under the '/users' endpoint

// /api/thoughts
router.use("/thoughts", thoughtRoutes); // Mount thought routes under the '/thoughts' endpoint

// Export the router to be used in other parts of the application
module.exports = router;
