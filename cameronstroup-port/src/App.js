import React from "react";
import Card from "./Card";
import travelObject from "./travelData";
import Navbar from "./Navbar";

console.log(travelObject);

export default function App() {
  const cards = travelObject.map((data) => {
    return <Card {...data} />;
  });
  return (
    <div>
      <Navbar />
      <section className="cards-list">{cards}</section>
    </div>
  );
}
