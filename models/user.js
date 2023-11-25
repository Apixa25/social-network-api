// Define Mongoose
const { Schema, model } = require("mongoose"); // Importing necessary modules from Mongoose

// Define the shape of the documents within the collection.
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Must match an email address!"],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount` that gets the amount of friends
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// 'User' is the name of the model, and 'userSchema' is the schema we are using to create a new instance of the model
const User = model("User", userSchema);

// Export the User model to be used in other parts of the application
module.exports = User;
