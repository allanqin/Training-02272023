import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    // console.log(this);
    // console.log(this.state.counter);
    this.setState(
      (prevState) => {
        const newState = { ...prevState };
        newState.counter++;
        return newState;
      },
      () => {
        // console.log("1st setState");
      }
    );
    // console.log(this.state.counter);
    // this.setState(
    //   (prevState) => {
    //     const newState = { ...prevState };
    //     newState.counter++;
    //     return newState;
    //   },
    //   () => {
    //     // console.log("2nd setState");
    //   }
    // );
    this.props.handleCounter(this.state.counter + 1);
  };

  render() {
    // const { handleCounter } = this.props;
    return (
      <>
        <h1>counter: {this.state.counter}</h1>
        <button
          onClick={() => {
            this.handleClick();
            // handleCounter();
          }}
        >
          increment count
        </button>
      </>
    );
  }
}

export default Counter;
