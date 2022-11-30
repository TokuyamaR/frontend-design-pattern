import React from "react";
import withLoader from "./withLoader";
import withHover from "./withHover";

function DogImages(props) {
  return (
    <div {...props}>
      {props.isHover && <div id="hover">Hovering!</div>}
      <div id="list">
        {props.data.message.map((dog, i) => (
          <img src={dog} key={i} alt="Dog" />
        ))}
      </div>
    </div>
  );
}

export default withHover(
  withLoader(DogImages, "https://dog.ceo/api/breed/labrador/images/random/6")
);
