import React, { Component } from "react";
import "./Jumbotron.css";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h3>Clicky Game!</h3>
        <p>
          Click on an image to earn points, but don't click on any more than
          once!
        </p>
        <p>Score: {this.props.score}</p>
      </div>
    );
  }
}

export default Jumbotron;
