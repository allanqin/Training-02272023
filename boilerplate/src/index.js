// object, build the virtual DOM
// console.log(React);
// object, update real DOM with virtual DOM
// console.log(ReactDOM);

import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home/Home";
import "./index.scss";

class App extends React.Component {
  render() {
    // return <h1>Hi {this.props.name}</h1>;
    return <Home />;
    // return React.createElement("h1", null, "Hi ", this.props.name);
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App name={"nicole"} />);

// root.render(React.createElement(App, { name: "nicole" }));

// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }

// function foo() {
//   for (let i = 0; i < 5; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }
// }
