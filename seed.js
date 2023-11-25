// This is going to be a file that we run every time we want to seed our database with some data.
const mongoose = require('mongoose');
const Users = require('./models/users');
const Thoughts = require('./models/thoughts');
const Reaction = require('./models/reactions');


mongoose.connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/social-networkDB", {
});

const usersSeed = [
    {
        username: 'lernantino',
        email: 'email@email.com',
        thoughts: [],
        friends: []
    },
    {
        username: 'George',
        email: 'email2@email.com',
        thoughts: ['You know why wouldn/t you just use a for loop?'],
        friends: ['lernantino']
    },
    {
        username: 'Steven',
        email: 'stevensills2@gmail.com',
        thoughts: ['I am really liking to learn about MongoDB'],
        friends: ['lernantino', 'user2']
    },
    {
        username: 'Magnus',
        email: 'magnus@gmail.com',
        thoughts: ['Some times I want to write a blog about windmills'],
        friends: ['lernantino', 'user2', 'user3']
    },
    {
        username: 'Trinity',
        email: 'trinity@gmail.com',
        thoughts: ['Sometimes I need a friend to come fishing with me'],
        friends: ['lernantino', 'user2', 'user3', 'user4']
    },
    {
        username: 'John',
        email: 'john@gmail.com',
        thoughts: ['I am a great friend to have'],
        friends: ['lernantino']
    },
    {
        username: 'Sally',
        email: 'sally@gmail.com',
        thoughts: ['I dont think very much'],
        friends: ['lernantino', 'user2']
    },
    {
        username: 'Lilly',
        email: 'lilly@gmail.com',
        thoughts: ['I like to bake'],
        friends: ['user2', 'user3']
    },
    {
        username: 'Mark',
        email: 'mark@gmail.com',
        thoughts: ['I like to play video games'],
        friends: ['user3', 'user4']
    },
    {
        username: 'Ken Brock',
        email: 'ken@gmail.com',
        thoughts: ['My car is fast'],
        friends: ['user4', 'user5']
    },

];

const thoughtsSeed = [
    {
        thoughtText: 'I like to play video games',
        username: 'Mark',
        reactions: []
    },
    {
        thoughtText: 'I like to bake',
        username: 'Lilly',
        reactions: []
    },
    {
        thoughtText: 'I dont think very much',
        username: 'Sally',
        reactions: []
    },
    {
        thoughtText: 'I am a great friend to have',
        username: 'John',
        reactions: []
    },
    {
        thoughtText: 'Sometimes I need a friend to come fishing with me',
        username: 'Trinity',
        reactions: []
    },
    {
        thoughtText: 'Some times I want to write a blog about windmills',
        username: 'Magnus',
        reactions: []
    },
    {
        thoughtText: 'I am really liking to learn about MongoDB',
        username: 'Steven',
        reactions: []
    },
    {
        thoughtText: 'You know why wouldn/t you just use a for loop?',
        username: 'George',
        reactions: []
    },
    {
        thoughtText: 'I am a great friend to have',
        username: 'John',
        reactions: []
    },
    {
        thoughtText: 'I like to play video games',
        username: 'Mark',
        reactions: []
    },
];

const reactionSeed = [
    {
        reactionId: 1,
        reactionBody: 'I like to play video games',
        username: 'Mark',
        createdAt: new Date(),
    },
    {
        reactionId: 2,
        reactionBody: 'I like to bake',
        username: 'Lilly',
        createdAt: new Date(),
    },
    {
        reactionId: 3,
        reactionBody: 'I dont think very much',
        username: 'Sally',
        createdAt: new Date(),
    },
    {
        reactionId: 4,
        reactionBody: 'I am a great friend to have',
        username: 'John',
        createdAt: new Date(),
    },
    {
        reactionId: 5,
        reactionBody: 'Sometimes I need a friend to come fishing with me',
        username: 'Trinity',
        createdAt: new Date(),
    },
    {
        reactionId: 6,
        reactionBody: 'Some times I want to write a blog about windmills',
        username: 'Magnus',
        createdAt: new Date(),
    },
    {
        reactionId: 7,
        reactionBody: 'I am really liking to learn about MongoDB',
        username: 'Steven',
        createdAt: new Date(),
    },
    {
        reactionId: 8,
        reactionBody: 'You know why wouldn/t you just use a for loop?',
        username: 'George',
        createdAt: new Date(),
    },
    {
        reactionId: 9,
        reactionBody: 'I am a great friend to have',
        username: 'John',
        createdAt: new Date(),
    },
    {
        reactionId: 10,
        reactionBody: 'I like to play video games',
        username: 'Mark',
        createdAt: new Date(),
    },
];

const seedAll = async () => {
    // await users.deleteMany();
    // await Thoughts.deleteMany();
    // await reactions.deleteMany();

    await Users.insertMany(usersSeed);
    await Thoughts.insertMany(thoughtsSeed);
    await Reactions.insertMany(reactionSeed);

    process.exit(0);
};

seedAll();

// Now that we have our models and seeds defined, we can create a file that will run all of the seeds at once. We'll call this file seeds/index.js. This file will import all of the individual seed files and run them all at once. We'll also add a function that will drop the database before seeding it to ensure that we don't have any duplicate data.

// // Import the necessary modules
// const seedUsers = require('./users');
// const seedThoughts = require('./thoughts');
// const seedReactions = require('./reactions');
//
// // Import the connection to the database
// const sequelize = require('../config/connection');
//  
// // Define a function that will seed all of the models
// const seedAll = async () => {
//     // Connect to the database
//     await sequelize.sync({ force: true });

//     // Seed the database
//     await seedUsers();
//     await seedThoughts();
//     await seedReactions();

//     // Exit the process
//     process.exit(0);
// };

// // Invoke the function
// seedAll();
// Now that we have our seeds defined, we can run them by executing the following command in the terminal:

// node seeds/index.js

// This will drop the database, create the tables, and seed the data.

