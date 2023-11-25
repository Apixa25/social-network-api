// Importing necessary module
const router = require("express").Router(); // Import the Router from Express.js

// Importing API routes
const apiRoutes = require("./api"); // Import the API routes module

// Mounting API routes under the '/api' endpoint
router.use("/api", apiRoutes); // Use the '/api' endpoint for all routes defined in the 'apiRoutes' module

// Handling undefined routes
router.use((req, res) => {
  return res.send("Wrong route"); // Send a response of 'Wrong route' for any undefined route
});

// Export the router to be used in other parts of the application
module.exports = router;
