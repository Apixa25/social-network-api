// Import the 'Router' class from the 'express' library
const router = require('express').Router();

// Import the API routes from the './api' module
const apiRoutes = require('./api');

// Use the API routes under the '/api' path
router.use('/api', apiRoutes);

// Middleware for handling 404 errors (if no route is matched)
router.use((req, res) => {
    // Respond with a 404 status and end the response
    res.status(404).end();
});

// Export the router for use in other parts of the application
module.exports = router;
