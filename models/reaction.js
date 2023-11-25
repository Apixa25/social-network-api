const moment = require("moment"); // Importing the 'moment' library for date formatting

// Define Mongoose
const { Schema, Types } = require("mongoose"); // Importing necessary modules from Mongoose

// Define the shape of the documents within the collection.
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(), // Generate a new ObjectId as the default value for 'reactionId'
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).format("MMM Do, YYYY [at] hh:mm a"),
      // Using the 'moment' library to format the 'createdAt' date in a human-readable way
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// Export the reaction schema to be used in other parts of the application
module.exports = reactionSchema;
