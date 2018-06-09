import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Gamecard from "./components/Gamecard";
import friends from "./friends.json";

import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Jumbotron score={this.state.score} />
        <Wrapper>
          {this.state.friends.map(friend => (
            <Gamecard name={friend.name} image={friend.image} />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
