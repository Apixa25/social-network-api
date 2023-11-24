// Import necessary modules from Mongoose
const { Schema, Types } = require("mongoose");

// Import the 'dateFormat' utility function from the '../utils/dateFormat' file
const dateFormat = require("../utils/dateFormat");

// Define a Mongoose schema for the Reaction
const reactionSchema = new Schema(
  {
    // Define the 'reactionId' field as an ObjectId with a default value
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    // Define the 'reactionBody' field with specified properties
    reactionBody: {
      type: String,
      required: "You must enter a reaction!",
      minlength: 1,
      maxlength: 280,
    },
    // Define the 'username' field with specified properties
    username: {
      type: String,
      required: "You must enter a username!",
    },
    // Define the 'createdAt' field as a Date with default value and a custom getter function
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
  },
  {
    // Define options for the schema
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Export the 'reactionSchema'
module.exports = reactionSchema;
