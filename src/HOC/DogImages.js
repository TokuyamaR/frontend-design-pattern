import React from "react";
import useDogImages from "./useDogImages";
import withLoader from "./withLoader";

function DogImages(props) {
  return props.data.message.map((dog, i) => (
    <img src={dog} key={i} alt="Dog" />
  ));
}

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);
