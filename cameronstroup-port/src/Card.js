import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`../images/${props.img}`} className="card--image" />
      <p>{props.location}</p>
      <h2 className="mainTitle">{props.imgTitle}</h2>
      <h3>{props.date}</h3>
      <p>{props.description}</p>
    </div>
  );
}

function onClick() {
  onclick (thingsElement.push "Thing " + numToString(thingsElement.length+1) );
}
