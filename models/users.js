// Import the necessary modules from Mongoose
const { Schema, model } = require('mongoose');

// Define a Mongoose schema for the User
const UserSchema = new Schema(
    {
        // Define the 'username' field with specified properties
        username: {
            type: String,
            unique: true,
            required: 'Username is required!',
            trim: true
        },
        // Define the 'email' field with specified properties
        email: {
            type: String,
            unique: true,
            required: 'Email address is required!',
            match: [/.+@.+\..+/]
        },
        // Define the 'thoughts' field as an array of ObjectIds, referencing the 'Thought' model
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought'
            }
        ],
        // Define the 'friends' field as an array of ObjectIds, referencing the 'User' model
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        // Define options for the schema
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

// Create a Mongoose model named 'User' using the defined schema
const User = model('User', UserSchema);

// Add a virtual property 'friendCount' to the schema
UserSchema.virtual('friendCount').get(function() {
    // Calculate and return the length of the 'friends' array
    return this.friends.length;
});

// Export the 'User' model
module.exports = User;
