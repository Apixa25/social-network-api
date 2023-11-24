// Require Thoughts and Users models
const { Thoughts, Users } = require('../models');

// Create the Thought Controller object
const thoughtController = { 
    // Get all thoughts
    getAllThoughts(req, res) {
        Thoughts.find({})
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .sort({_id: -1})
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    // Get one thought by id
    getThoughtById({ params }, res) {
        Thoughts.findOne({ _id: params.id })
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .then(dbThoughtsData => {
            // If no thought is found, send 404
            if (!dbThoughtsData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            // Else, return the thought
            res.json(dbThoughtsData);
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        });
    },
    // Create a thought
    createThought({ body }, res) {
        Thoughts.create(body)
        .then(({ _id }) => {
            return Users.findOneAndUpdate(
                { _id: body.userId },
                { $push: { thoughts: _id }},
                { new: true }
            );
        })
        .then(dbThoughtsData => {
            // If no user is found, send 404
            if (!dbThoughtsData) {
                res.status(404).json({ message: 'No user found with this id!' });
                return;
            }
            // Else, return the user
            res.json(dbThoughtsData);
        })
        .catch(err => res.json(err));
    },
    // Update a thought by id
    updateThought({ params, body }, res) {
        Thoughts.findOneAndUpdate({ _id: params.id }, body, { new: true, runValidators: true })
        .then(dbThoughtsData => {
            // If no thought is found, send 404
            if (!dbThoughtsData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            // Else, return the thought
            res.json(dbThoughtsData);   
        }    
        )       
        .catch(err => res.status(400).json(err));
    }
    ,
    // Delete a thought by id
    deleteThought({ params }, res) {
        Thoughts.findOneAndDelete({ _id: params.id })
        .then(dbThoughtsData => {
            // If no thought is found, send 404
            if (!dbThoughtsData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            // Else, return the thought
            res.json(dbThoughtsData);
        })
        .catch(err => res.status(400).json(err));
    },  
    // Create a reaction
    createReaction({ params, body }, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.thoughtId },
            { $push: { reactions: body }},
            { new: true, runValidators: true }
        )
        .then(dbThoughtsData => {
            // If no thought is found, send 404
            if (!dbThoughtsData) {
                res.status(404).json({ message: 'No thought found with this id!' });
                return;
            }
            // Else, return the thought
            res.json(dbThoughtsData);
        })
        .catch(err => res.json(err));
    },
    // Delete a reaction
    deleteReaction({ params }, res) {
        Thoughts.findOneAndUpdate(
            { _id: params.thoughtId },
            { $pull: { reactions: { reactionId: params.reactionId }}},
            { new: true }
        )
        .then(dbThoughtsData => res.json(dbThoughtsData))
        .catch(err => res.json(err));
    }
};

// Export the Thought Controller object
module.exports = thoughtController;

