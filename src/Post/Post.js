import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';
import axios from 'axios'

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }
  collectPosts(){
    // Defining a reference to the current state for the promise
    let state = this;
    // Getting the JSON data from Reddit.com
    axios.get('http://www.reddit.com/r/'+ this.props.subreddit +'/.json')
      .then(function(response) {
        state.setState({posts: response.data.data.children});
      })
      .catch(function(error) {
        console.log(error);
      })
  }
  render(){
    this.collectPosts();
    if(this.state.posts.length > 0){
      return(
        <div className="App-wrapper title">
          {this.state.posts.map(post =>
            <a href={'http://www.reddit.com/'+post.data.permalink}>
            <Panel>
              <Panel.Heading>
                <Panel.Title componentClass="h3">
                  <div className="panelTitle">
                    {post.data.author} posted on r/{post.data.subreddit}
                  </div>
                </Panel.Title>
              </Panel.Heading>
              <Panel.Body>
                {post.data.title}
              </Panel.Body>
            </Panel>
            </a>
          )}
        </div>
      );
    } else {
      return(
        <h5>Loading posts from /r/{this.props.subreddit}...</h5>
      );
    }
  }
}

export default Post;
