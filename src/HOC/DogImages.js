import React from "react";
import withLoader from "./withLoader";
import withHover from "./withHover";
import useHover from "./hooks/useHover";

function DogImages(props) {
  const [hoverRef, isHover] = useHover();
  return (
    <div ref={hoverRef} {...props}>
      {isHover && <div id="hover">Hovering!</div>}
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
