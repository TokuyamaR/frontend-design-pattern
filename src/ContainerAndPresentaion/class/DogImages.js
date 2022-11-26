import React from "react";
export default function DogImages({ dogs }) {
  return dogs.map((dog, i) => <img src={dog} key={i} alt={`${dog}_${i}`} />);
}
