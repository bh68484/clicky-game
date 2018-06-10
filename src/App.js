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
    score: 0,
    highScore: 0
  };

  handleClick = (id, clicked) => {
    const shuffleAlbums = this.state.friends;

    if (clicked) {
      shuffleAlbums.forEach((image, index) => {
        shuffleAlbums[index].clicked = false;
      });
      return this.setState({
        image: shuffleAlbums.sort(() => Math.random() * 1),
        score: 0
      });
    } else {
      shuffleAlbums.forEach((image, index) => {
        if (id === image.id) {
          shuffleAlbums[index].clicked = true;
        }
      });

      const { highScore, score } = this.state;
      const newScore = score + 1;
      const newHighScoreScore = newScore > highScore ? newScore : highScore;

      return this.setState({
        image: shuffleAlbums.sort(() => Math.random() * 1),
        score: newScore,
        highScore: newHighScoreScore
      });
    }
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Jumbotron score={this.state.score} highScore={this.state.highScore} />
        <Wrapper>
          {this.state.friends.map(friend => (
            <Gamecard
              key={friend.id}
              id={friend.id}
              clicked={friend.clicked}
              handleClick={this.handleClick}
              image={friend.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
