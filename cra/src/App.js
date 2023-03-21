import React from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "counter app",
      header: "my header",
      counter: 0,
    };

    // this.handleClick = this.handleClick.bind(this);
  }

  // state = {
  //   title: "counter app",
  // };

  // handleClick = () => {
  //   // console.log(this);
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  //   this.setState({
  //     counter: this.state.counter + 1,
  //   });
  // };

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
        console.log("1st setState");
      }
    );
    // console.log(this.state.counter);
    this.setState(
      (prevState) => {
        const newState = { ...prevState };
        newState.counter++;
        return newState;
      },
      () => {
        console.log("2nd setState");
      }
    );
  };

  handleCounter = (newCounter) => {
    this.setState({
      title: "counter app",
      header: "my header",
      counter: newCounter,
    });
  };

  handleHeading = (msg) => {
    alert(msg);
  };

  render() {
    return (
      <>
        <Header
          header={this.state.header}
          handleHeading={this.handleHeading}
          counter={this.state.counter}
        />
        <Counter handleCounter={this.handleCounter} />
      </>
    );
  }
}

export default App;
