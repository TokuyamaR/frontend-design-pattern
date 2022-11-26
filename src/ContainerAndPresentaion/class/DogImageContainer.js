import React from "react";
import DogImages from "./DogImages";

export default class DogImageContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: [],
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breed/labrador/images/random/6")
      .then((response) => response.json())
      .then(({ message }) => {
        this.setState({ dogs: message });
      });
  }

  render() {
    <DogImages dogs={this.state.dogs} />;
  }
}
