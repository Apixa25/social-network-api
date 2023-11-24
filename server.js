// Require express and mongoose
const express = require("express");
const mongoose = require("mongoose");

// Create an Express application
const app = express();

// Define the port to listen on, using process.env.PORT or defaulting to 3306
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming requests with urlencoded or JSON payloads
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static("public"));

// Import and use the routes defined in the "./routes" directory
app.use(require("./routes"));

// Connect to MongoDB using Mongoose, with the default database named "social-networkDB"
mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-networkDB", {
});

// Log Mongoose queries to the console for debugging purposes
mongoose.set("debug", true);

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Your Connected but is it real? on localhost:${PORT}`);
});
