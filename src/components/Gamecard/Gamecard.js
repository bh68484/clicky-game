import React from "react";
import "./Gamecard.css";

const Gamecard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Gamecard;
