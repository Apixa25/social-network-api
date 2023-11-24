// Import necessary modules from Mongoose
const { Schema, model } = require("mongoose");

// Import the 'reactionSchema' from the './Reaction' file
const reactionSchema = require("./Reaction");

// Import the 'dateFormat' utility function from the '../utils/dateFormat' file
const dateFormat = require("../utils/dateFormat");

// Define a Mongoose schema for the Thought
const thoughtSchema = new Schema(
  {
    // Define the 'thoughtText' field with specified properties
    thoughtText: {
      type: String,
      required: "You must enter a thought!",
      minlength: 1,
      maxlength: 280,
    },
    // Define the 'createdAt' field as a Date with default value and a custom getter function
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    // Define the 'username' field with specified properties
    username: {
      type: String,
      required: "You must enter a username!",
    },
    // Define the 'reactions' field as an array of objects using the 'reactionSchema'
    reactions: [reactionSchema],
  },
  {
    // Define options for the schema
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Add a virtual property 'reactionCount' to the schema
thoughtSchema.virtual("reactionCount").get(function () {
  // Calculate and return the length of the 'reactions' array
  return this.reactions.length;
});

// Create a Mongoose model named 'Thought' using the defined schema
const Thought = model("Thought", thoughtSchema);

// Export the 'Thought' model
module.exports = { Thought };
