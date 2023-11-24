// Set requirements (Express router and API endpoints) for the user and thought routes
const router = require('express').Router();

// Set requires for the user and thought routes
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');

// Set up the user and thought routes
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

// Export the router for use in other parts of the application
module.exports = router;
