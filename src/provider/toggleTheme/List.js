import React from "react";
import ListItem from "./ListItem";

export default function List() {
  return (
    <ul className="list">
      {new Array(10).map((x, i) => (
        <ListItem key={i} />
      ))}
    </ul>
  );
}
