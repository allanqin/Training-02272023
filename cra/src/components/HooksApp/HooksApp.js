import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";

/* 
  state management(this.state, useState):
    unidirectional dataflow, from parent child, props, callback
    props drilling, state lift()

  global state management: context API, Redux(3rd party library)
    




*/

/*
component 1 -> counter 0
click alert button
click add one -> rerender
component 2 -> counter 1
*/
// let curCounter = 0;

const fetchCounter = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(100);
    }, 2000);
  });
};

// custom hook
const useCounter = (initialCounterState = 0) => {
  const [counter, setCounter] = useState(initialCounterState);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // console.log(document.querySelector("section.hooks-app"));
    setIsLoading(true);
    fetchCounter()
      .then((data) => {
        // console.log(data);
        setCounter(data);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return [counter, isLoading, setCounter];
};

export const HooksApp = () => {
  // const result = useState(0);
  // const counter = result[0];
  // const setCounter = result[1];

  // const [isMouting, setIsMounting] = useState(true);

  // const [counterObj, setCounterObj] = useState({
  //   counter: 0,
  //   isLoading: false
  // });

  const [counter, isLoading, setCounter] = useCounter();
  const [toggleValue, setToggleValue] = useState(true);

  const counterRef = useRef(counter);
  counterRef.current = counter;

  const foo = useCallback(() => {
    // 100000000 loops
    return 2;
  }, []);

  const functionRef = useRef(foo);
  console.log("function ref:", foo === functionRef.current);
  // curCounter = counter;

  const obj = useMemo(() => {
    return {
      name: toggleValue ? "nicole" : "adam",
    };
  }, [toggleValue]);

  useEffect(() => {
    console.log("obj changed");
  }, [obj]);

  // console.log(document.querySelector("section.hooks-app")); // null

  // didMount | didUpdate
  // side effects

  // useEffect(() => {
  //   if (isMouting) {
  //     console.log("mounting...");
  //     setIsMounting(false);
  //   } else {
  //     console.log("updating...");
  //   }
  // }, [isMouting]);

  return (
    <section className="hooks-app">
      <h1>Hooks App</h1>
      {isLoading ? <h4>Loading...</h4> : <h4>Counter: {counter}</h4>}
      <button onClick={() => setCounter(counter + 1)}>Add One</button>
      <button
        onClick={() => {
          setTimeout(() => {
            alert(counterRef.current);
          }, 3000);
        }}
      >
        Alert in 3s
      </button>
      <button onClick={() => setToggleValue(!toggleValue)}>Toggle Value</button>
    </section>
  );
};

export const withCounter = (WrappedComponent) =>
  class NewComponent extends React.Component {
    state = {
      counter: 0,
      isLoading: false,
    };

    handleAdd = () => {
      this.setState({ counter: this.state.counter + 1 });
    };

    componentDidMount() {
      console.log(document.querySelector("section.class-app"));
      this.setState({ isLoading: true });
      fetchCounter()
        .then((data) => {
          // console.log(data);
          this.setState({
            counter: data,
          });
        })
        .finally(() => {
          this.setState({
            isLoading: false,
          });
        });
    }

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.state}
          handleAdd={this.handleAdd}
        />
      );
    }
  };

export const HooksApp2 = (props) => {
  // const result = useState(0);
  // const counter = result[0];
  // const setCounter = result[1];

  // const [counter, setCounter] = useState(0);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isMouting, setIsMounting] = useState(true);
  const { counter, isLoading, handleAdd } = props;
  // const [counterObj, setCounterObj] = useState({
  //   counter: 0,
  //   isLoading: false
  // });

  const counterRef = useRef(counter);
  counterRef.current = counter;

  // curCounter = counter;

  console.log(document.querySelector("section.hooks-app")); // null

  // didMount | didUpdate
  // side effects
  // useEffect(() => {
  //   // console.log(document.querySelector("section.hooks-app"));
  //   setIsLoading(true);
  //   fetchCounter()
  //     .then((data) => {
  //       // console.log(data);
  //       setCounter(data);
  //     })
  //     .finally(() => setIsLoading(false));
  // }, []);

  // useEffect(() => {
  //   if (isMouting) {
  //     console.log("mounting...");
  //     setIsMounting(false);
  //   } else {
  //     console.log("updating...");
  //   }
  // }, [isMouting]);

  return (
    <section className="hooks-app">
      <h1>Hooks App</h1>
      {isLoading ? <h4>Loading...</h4> : <h4>Counter: {counter}</h4>}
      <button onClick={handleAdd}>Add One</button>
      <button
        onClick={() => {
          setTimeout(() => {
            alert(counterRef.current);
          }, 3000);
        }}
      >
        Alert in 3s
      </button>
    </section>
  );
};

export const WrappedHooksApp = withCounter(HooksApp2);

export class ClassApp extends React.Component {
  // state = {
  //   counter: 0,
  //   isLoading: false,
  // };
  render() {
    const { counter, isLoading, handleAdd } = this.props;
    console.log(document.querySelector("section.class-app")); // null
    return (
      <section className="class-app">
        <h1>Class App</h1>
        {isLoading ? <h4>Loading...</h4> : <h4>Counter: {counter}</h4>}
        <button onClick={handleAdd}>Add One</button>
        <button
          onClick={() => {
            let prevCounterState = counter;
            setTimeout(() => {
              alert(prevCounterState);
            }, 3000);
          }}
        >
          Alert in 3s
        </button>
      </section>
    );
  }

  // componentDidMount() {
  //   console.log(document.querySelector("section.class-app"));
  //   this.setState({ isLoading: true });
  //   fetchCounter()
  //     .then((data) => {
  //       // console.log(data);
  //       this.setState({
  //         counter: data,
  //       });
  //     })
  //     .finally(() => {
  //       this.setState({
  //         isLoading: false,
  //       });
  //     });
  // }
}

export const WrappedClassApp = withCounter(ClassApp);

// const withTest = () => {
//   return null;
// };
