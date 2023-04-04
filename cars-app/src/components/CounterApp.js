import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Component } from "react";
import { useContext } from "react";
import { CounterContext } from "../CounterContext";
import { store } from "../redux/redux";
import {useSelector, useDispatch, connect} from "react-redux"
import { decrement, increment, incrementByAmount, initCounter } from "../redux/store";

const thunkFunction = async (dispatch, getState) => {
  // logic here that can dispatch actions or read state
  console.log("inside thunk function");
  await fetch("...")
  dispatch({type:"counter/incremented"})
}
const CounterApp = () => {
    //const { counter, increment } = useContext(CounterContext);
    /* const [counter, setCounter] = useState(store.getState().value)
    useEffect(()=>{
      store.subscribe(() => {
        const {value} = store.getState();
        setCounter(value)
      })
    }, []); */
    const counter = useSelector(state=>state.counter.value);
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(initCounter())
    },[])

    const handleIncrement = () => {
      //put request
      //update redux store
      dispatch(increment())
    }
    const handleDecrement = () => {
      dispatch(decrement())
    }

    const incrementByTwo = () => {
      dispatch(incrementByAmount(3))
    }
    return (
        <div>
            <h1>Counter</h1>
            <div>{counter}</div>

            <button onClick={handleIncrement}>increment</button>
            <button onClick={handleDecrement}>decrement</button>
            <button onClick={incrementByTwo}>increment by 2</button>
        </div>
    );
};

//connect: function(mapStateToProps, mapDispatchToProps) return HOC

// export class CounterApp extends Component {

//     render() {
//         return (
//             <div>
//                 <h1>Counter</h1>
//                 <div>{this.props.counter}</div>

//                 <button onClick={this.props.increment}>increment</button>
//                 <button onClick={this.props.decrement}>increment</button>
//             </div>
//         );
//     }
// }

// const mapStateToProps = (state) => ({
//   counter: state.value,
// })

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // dispatching plain actions
//     increment: () => dispatch({ type: 'counter/incremented' }),
//     decrement: () => dispatch({ type: 'counter/decremented' }),
//   }
// }
 //export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
 export default CounterApp;