import React from "react";

class Heading extends React.Component {
  render() {
    return (
      <h1 onClick={() => this.props.handleHeading("hi")}>
        {this.props.header}: {this.props.counter}
      </h1>
    );
  }
}

export default Heading;
