import React, { Component } from 'react';
import Navigationbar from "./Navigationbar/Navigationbar.js";
import Post from "./Post/Post.js";
import { Jumbotron } from 'react-bootstrap';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      subreddits: [],

      newSubreddit: '',
      completeData: []
    }

    this.posts = [];
    this.removeSub = this.removeSub.bind(this);
    this.addSub = this.addSub.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  removeSub(i){
    // Removing the proper subreddit
    this.setState({subreddits: this.state.subreddits.splice(i, 1)});
    localStorage.setItem("subreddits", JSON.stringify(this.state.subreddits));
    //window.location.reload();
  }

  addSub(){
    // Adding every input for now
    if(localStorage.getItem("subreddits")){
      this.state.subreddits = [...this.state.subreddits, this.state.newSubreddit];
      localStorage.setItem("subreddits", JSON.stringify(this.state.subreddits));
    } else {
      //First entry
      localStorage.setItem("subreddits", JSON.stringify([this.state.newSubreddit]));
    }
  }

  handleChange(event){
    // Called when someone submits a new subreddit from the navbar
    this.setState({newSubreddit: event.target.value});
    console.log(this.state.newSubreddit);
  }

  render() {
    // Check to see if we have anything stored
    if(localStorage.getItem("subreddits")){
      this.state.subreddits =  JSON.parse(localStorage.getItem("subreddits"));
    }

    if(this.state.subreddits.length > 0){
      return (
        <div className="App-wrapper title">
          <Navigationbar
            subreddits={this.state.subreddits}
            newSubreddit={this.state.newSubreddit}
            removeSub={this.removeSub.bind(this)}
            addSub={this.addSub.bind(this)}
            handleChange={this.handleChange.bind(this)}
          />
          <div className="panelContainer">
            {this.state.subreddits.map(subreddit =>
              <Post subreddit={subreddit}/>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="App-wrapper title">
          <Navigationbar
            subreddits={this.state.subreddits}
            newSubreddit={this.state.newSubreddit}
            removeSub={this.removeSub.bind(this)}
            addSub={this.addSub.bind(this)}
            handleChange={this.handleChange.bind(this)}
          />
          <Jumbotron>
            <h1>Hi there friend</h1>
            <p>It looks like you have no subreddits, oh nooo!!! Add one up above :)</p>
            <p>For now enjoy the /r/news below</p>
          </Jumbotron>
          <div className="panelContainer">
            <Post subreddit={'news'}/>
          </div>
        </div>
      );
    }
  }
}

export default App;
