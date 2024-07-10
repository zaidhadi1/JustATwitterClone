// Server to handle the tweet contents

require('dotenv').config();
const uri = process.env.MONGODB_URI;

const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

// Using json to parse newtweet data, CORS needed to connect to front-end's port
app.use(cors({ origin: 'http://localhost:3000' }))
app.use(bodyParser.json());

// mongoose setup
const mongoose = require('mongoose');
mongoose.connect(uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

// Define the Tweets schema
const TweetsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    content: {
        type: String
    }
});

// Create the Tweets model
const Tweets = mongoose.model('Tweets', TweetsSchema);
module.exports = Tweets;

/*----------------------------------------------------*/

app.get('/', async (req, res) => {
    try {
        console.log("Get Tweets Recieved");
        const tweets = await Tweets.find();
        res.json(tweets);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// parses json to add data into database
app.post('/newtweet', async (req, res) => {
    console.log("New Tweets Received");
    console.log(req.body);
    const newTweet = new Tweets({
        id: req.body.id,
        content: req.body.content
    });

    newTweet.save()
        .then(() => {
            console.log("Added new tweet " + newTweet);
            res.status(200).json(newTweet)
        })
        .catch(err => {
            console.error('Error adding tweet:', err);
            res.status(500).send("Error Adding Tweet");
        });

});


// takes in id (specified and schema) and deletes entry from database
app.delete('/tweets/:id', async (req, res) => {
    console.log("Delete Tweets Received");
    console.log(req.params.id);

    Tweets.findOneAndDelete({id: req.params.id})
        .then(tweet =>{
            if(!tweet)
                {
                    return res.status(404).send({ error: 'Tweet not found' });
                }
            res.status(200).send("Delete Successful");
        })
        .catch(err =>{
            console.error('Error deleting tweet:', err);
            res.status(500).send("Error deleting Tweet");
        })
});


// Listener that notifies when it's on port 5000
app.listen(5000, function () {
    console.log('Listening on port 5000');
});