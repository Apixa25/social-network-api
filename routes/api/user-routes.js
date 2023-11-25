// Importing necessary modules
const router = require("express").Router(); // Import the Router from Express.js

// Importing controller functions from the user-controller module
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// Define routes for user-related operations

// /api/users
router
  .route("/")
  .get(getAllUsers) // Handle GET request to retrieve all users
  .post(createUser); // Handle POST request to create a new user

// /api/users/:userId
router
  .route("/:userId")
  .get(getUserById) // Handle GET request to retrieve a user by ID
  .put(updateUser) // Handle PUT request to update a user by ID
  .delete(deleteUser); // Handle DELETE request to delete a user by ID

// /api/users/:userId/friends/:friendId
router
  .route("/:userId/friends/:friendId")
  .post(addFriend) // Handle POST request to add a friend to a user's list
  .delete(deleteFriend); // Handle DELETE request to remove a friend from a user's list

// Export the router to be used in other parts of the application
module.exports = router;
