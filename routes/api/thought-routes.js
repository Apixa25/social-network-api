// Importing necessary modules
const router = require('express').Router();  // Import the Router from Express.js

// Importing controller functions from the thought-controller module
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thought-controller');

// Define routes for thought-related operations

// /api/thoughts
router.route('/')
  .get(getAllThoughts)  // Handle GET request to retrieve all thoughts
  .post(createThought); // Handle POST request to create a new thought

// /api/thoughts/:thoughtId
router.route('/:thoughtId')
  .get(getThoughtById)   // Handle GET request to retrieve a thought by ID
  .put(updateThought)    // Handle PUT request to update a thought by ID
  .delete(deleteThought); // Handle DELETE request to delete a thought by ID

// /api/thoughts/:thoughtId/reactions
router.route('/:thoughtId/reactions')
  .post(createReaction); // Handle POST request to create a reaction for a thought

// /api/thoughts/:thoughtId/reactions/:reactionId
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction); // Handle DELETE request to delete a reaction from a thought

// Export the router to be used in other parts of the application
module.exports = router;
