// Import necessary components from the 'mongoose' library
const { connect, connection } = require('mongoose');

// Define the MongoDB connection string, using the environment variable if available
const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/social-network-api';

// Connect to the MongoDB database using Mongoose
connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

// Event listener for the 'connected' event on the Mongoose connection
connection.on('connected', () => {
    console.log('Mongoose connected successfully.');
});

// Event listener for the 'error' event on the Mongoose connection
connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
});

// Export the Mongoose connection object
module.exports = connection;
