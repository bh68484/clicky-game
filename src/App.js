import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Jumbotron from "./components/Jumbotron";
import Gamecard from "./components/Gamecard";
import albums from "./albums.json";
import "./App.css";

class App extends Component {
  // Setting this.state.albums to the albums json array
  state = {
    albums,
    score: 0,
    highScore: 0
  };

  handleClick = (id, clicked) => {
    const shuffleAlbums = this.state.albums;

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

  // Map over this.state.albums and render a albumCard component for each album object
  render() {
    return (
      <div>
        <Jumbotron score={this.state.score} highScore={this.state.highScore} />
        <Wrapper>
          {this.state.albums.map(album => (
            <Gamecard
              key={album.id}
              id={album.id}
              clicked={album.clicked}
              handleClick={this.handleClick}
              image={album.image}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
