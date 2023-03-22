import React from "react";
import "./App.css";

class Content extends React.Component {
  render() {
    return <main>{this.props.children}</main>;
  }
}

class Header extends React.Component {
  render() {
    return <h1>Header</h1>;
  }
}

class Timer extends React.Component {
  componentWillUnmount() {
    console.log("===============Unmounting Stage================");
    console.log("Timer componentWillUnmount");
  }

  render() {
    return <h1 id="timer">Timer: {this.props.timer}</h1>;
  }
}

class Clock extends React.Component {
  state = {
    time: new Date().toLocaleTimeString(),
  };

  componentDidMount() {
    this._timeInterval = setInterval(() => {
      console.log("updating time...");
      this.setState({
        time: new Date().toLocaleTimeString(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this._timeInterval);
  }

  render() {
    return <p>current time: {this.state.time}</p>;
  }
}

class Layout extends React.Component {
  constructor(props) {
    super(props);
    console.log("Layout constructor");
    this.state = {};
  }

  static getDerivedStateFromProps(props, state) {
    console.log("Layout getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("Layout componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Layout shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("Layout getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("Layout compoentnDidUpdate");
  }

  render() {
    console.log("Layout render");

    return (
      <>
        <Header />
        <Content>{this.props.children}</Content>
      </>
    );
  }
}

class App extends React.Component {
  // initialize the state, bind event handlers
  constructor(props) {
    super(props);
    console.log("===============Mounting Stage================");
    console.log("App constructor");
    this.state = {
      timer: 0,
      showTimer: true,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("===============Mounting/Updating Stage================");
    console.log("App getDerivedStateFromProps");
    return null;
  }

  // access the DOM, API calls
  componentDidMount() {
    console.log("App componentDidMount");
    // console.log(document.getElementById("app"));
  }

  // returns boolean to determine if the component needs to be re-rendered
  shouldComponentUpdate(nextProps, nextState) {
    // if statement
    console.log("App shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate() {
    console.log("App getSnapshotBeforeUpdate");
    return null;
  }

  // do some updates or cleanup
  componentDidUpdate() {
    console.log("App compoentnDidUpdate");
    console.log(document.getElementById("timer")?.innerText);
  }

  // do cleanup before the component unmounts
  componentWillUnmount() {}

  handleTimerUpdate = () => {
    this.setState((prev) => {
      return { ...prev, timer: this.state.timer + 1 };
    });
  };

  handleToggle = () => {
    this.setState((prev) => {
      return { ...prev, showTimer: !this.state.showTimer };
    });
  };

  render() {
    // console.log(document.getElementById("root"));
    // console.log(document.getElementById("app")); // null
    console.log("App render");
    console.log(document.getElementById("timer")?.innerText);

    return (
      <div id="app">
        <Layout>
          <button onClick={this.handleTimerUpdate}>update timer</button>
          <button onClick={this.handleToggle}>toggle clock</button>
          {this.state.showTimer && <Timer timer={this.state.timer} />}
          {this.state.showTimer && <Clock />}
        </Layout>
      </div>
    );
  }
}

export default App;
