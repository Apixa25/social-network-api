const moment = require("moment"); // Importing the 'moment' library for date formatting

// Define Mongoose
const { Schema, model } = require("mongoose"); // Importing necessary modules from Mongoose

const reactionSchema = require("./reaction"); // Importing the reaction schema

// Define the shape of the documents within the collection.
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: "A thought is required",
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).format("MMM Do, YYYY [at] hh:mm a"),
      // Using the 'moment' library to format the 'createdAt' date in a human-readable way
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema], // Embedding the 'reactionSchema' for handling reactions associated with a thought
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property `reactionCount` that gets the number of reactions
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// 'Thought' is the name of the model, and 'thoughtSchema' is the schema we are using to create a new instance of the model
const Thought = model("Thought", thoughtSchema);

// Export the Thought model to be used in other parts of the application
module.exports = Thought;
