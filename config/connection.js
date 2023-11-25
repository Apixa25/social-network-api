const mongoose = require('mongoose');  // Import the Mongoose library

mongoose.set('strictQuery', true);  // Set strictQuery to true for Mongoose (enforces stricter query behavior)

// Wrap Mongoose around local connection to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/socialnetworkDB', {
  // process.env.MONGODB_URI: Use the MongoDB URI from the environment variable if available
  // If not available, use the default local connection URI
});

// Export the MongoDB connection
module.exports = mongoose.connection;
