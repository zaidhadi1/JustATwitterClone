import React, { Component } from "react";
import axios from 'axios';
import NavBar from './components/navbar/navbar.js'
import NewTweet from './components/newtweet/newtweet.js'
import ProfileCover from './components/profilecover/profilecover.js'
import ProfileInfo from './components/profileinfo/profileinfo.js'
import ProfileStats from './components/profilestats/profilestats.js'
import RightPanel from './components/rightpanel/rightpanel.js'
import TweetCard from './components/tweetcard/tweetcard.js'
import './App.css';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const api = axios.create({
  baseURL: 'http://localhost:5000'
});

class App extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
    this.handleNewTweet = this.handleNewTweet.bind(this);
  }

  state = {
    tweets: [
      // { id: 1, content: "Hello World!!" },
      // { id: 2, content: "Twitter is fun!" }
    ],
    idCounter: 0 //used to set ids for each tweet, only increments on add, no decrements
  }

  componentDidMount() { // performs get request to initialise tweet
    api.get('/').then(res => {
      console.log(res);
      const tweets = res.data;
      this.setState({ tweets })
      this.state.idCounter = this.state.tweets.length
    });
  }

  handleDelete(tweetID) { // deletes tweet and adjusts state to reflect this on front-end
    api.delete('/tweets/' + tweetID)
      .then(res => {
        this.setState(prevState => ({
          tweets: prevState.tweets.filter(tweet => tweet.id !== tweetID)
        }));
      })
      .catch(error => {
        console.error('Error deleting tweet:', error);
      });
  }

  handleNewTweet(newTweetContent) { // adds new tweet and adjusts state to reflect this on front-end
    const tweetId = this.state.idCounter // Generate a unique ID for the tweet
    const content = newTweetContent; // Extract the content from the new tweet

    console.log(tweetId, content);
    // Send the new tweet data to the backend
    api.post('/newtweet', { id: tweetId, content: content })
      .then(res => {
        const newTweet = res.data;
        this.setState(prevState => ({ tweets: [...prevState.tweets, newTweet] }));
        this.state.idCounter++; // increment id Counter
      })
      .catch(error => {
        console.error('Error adding tweet:', error);
      });
  }

  render() {
    return (
      <div id='background'>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <ProfileCover />
        </Row>
        <Row>
          <ProfileStats tweetsCount={this.state.tweets.length} />
        </Row>
        {/* Bottom Component Cluster*/}
        <Row>
          <Col md={4}>
            <ProfileInfo />
          </Col>
          <Col md={5}>
            <Row><NewTweet onNewTweet={this.handleNewTweet} /></Row>
            <Row>{console.log('Tweets:', this.state.tweets)}{this.state.tweets.toReversed().map(tweet => (<TweetCard key={tweet.id} id={tweet.id} name="Kronk" username="@Kronk" date="Jan 21" tweetDesc={tweet.content} onDelete={() => this.handleDelete(tweet.id)} />
            ))}</Row>
          </Col>
          <Col md={3}><RightPanel /></Col>
        </Row>
      </div>
    );
  }

}

export default App;