// Require User Model
const { User, users } = require('../models');

// Create the User Controller object
const userController = {

    // Get all users   
    getAllUsers(req, res) {
        User.find({})
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .sort({_id: -1})
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

    },

    // Get one user by id
    getUserById({ params }, res) {
        User.findOne({ _id: params.id })
        .populate({
            path: 'thoughts',
            select: '-__v'
        })
        .populate({
            path: 'friends',
            select: '-__v'
        })
        .select('-__v')
        .then(dbUserData => {
            // If no user is found, send 404
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            // Else, return the user
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });

    },

    // Create a user
    createUser({ body }, res) {
        User.create(body)
        .then(dbUserData => res.json(dbUserData))
        .catch(err => res.json(err));

    },

    // Update a user by id
    updateUser({ params, body }, res) {
        users.findOneAndUpdate({__id: params.id}, body, {new: true, runValidators: true})
        .then(dbUserData => {
            // If no user is found, send 404
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            // Else, return the user
            res.json(dbUserData);
        })
        .catch(err => res.json(err));

    },

    // Delete a user by id
    deleteUser({ params }, res) {
        users.findOneAndDelete({__id: params.id})
        .then(dbUserData => {
            // If no user is found, send 404
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            // Else, return the user
            res.json(dbUserData);
        })
        .catch(err => res.json(err));

    },

    // Add a friend to a user's friend list
    addFriend({ params }, res) {
        users.findOneAndUpdate(
            {__id: params.id},
            {$push: {friends: params.friendId}},
            {new: true}
        )
        .then(dbUserData => {
            // If no user is found, send 404
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            // Else, return the user
            res.json(dbUserData);
        })
        .catch(err => res.json(err));

    },

    // Remove a friend from a user's friend list
    removeFriend({ params }, res) {
        users.findOneAndUpdate(
            {__id: params.id},
            {$pull: {friends: params.friendId}},
            {new: true}
        )
        .then(dbUserData => {
            // If no user is found, send 404
            if (!dbUserData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            // Else, return the user
            res.json(dbUserData);
        })
        .catch(err => res.json(err));

    }
};

// Export the user controller
module.exports = userController;


