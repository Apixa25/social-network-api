// Require express and mongoose
const express = require("express");
const mongoose = require("mongoose");

// Create an Express application
const app = express();

// Define the port to listen on, using process.env.PORT or defaulting to 3000
const PORT = process.env.PORT || 3000;

// Middleware to parse incoming requests with urlencoded or JSON payloads
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static("public"));

// Connect to MongoDB using Mongoose, with the default database named "social-network-api"
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social-network-api", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,  // * this is code that was add to fix a deprecation warning
  useFindAndModify: false,
});

// Log Mongoose queries to the console for debugging purposes
mongoose.set("debug", true);

// Import and use the routes defined in the "./routes" directory
app.use(require("./routes"));

// Start the Express server and listen on the specified port
app.listen(PORT, () => {
  console.log(`🌍 Connected on localhost:${PORT}`);
});
