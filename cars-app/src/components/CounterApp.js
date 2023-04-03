import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Component } from "react";
import { useContext } from "react";
import { CounterContext } from "../CounterContext";
import { store } from "../redux/redux";
import {useSelector, useDispatch, connect} from "react-redux"

// const CounterApp = () => {
//     //const { counter, increment } = useContext(CounterContext);
//     /* const [counter, setCounter] = useState(store.getState().value)
//     useEffect(()=>{
//       store.subscribe(() => {
//         const {value} = store.getState();
//         setCounter(value)
//       })
//     }, []); */
//     const counter = useSelector(state=>state.value);
//     const dispatch = useDispatch();

//     const handleIncrement = () => {
//       dispatch({type:"counter/incremented"})
//     }
//     const handleDecrement = () => {
//       dispatch({type:"counter/decremented"})
//     }
//     return (
//         <div>
//             <h1>Counter</h1>
//             <div>{counter}</div>

//             <button onClick={handleIncrement}>increment</button>
//             <button onClick={handleDecrement}>decrement</button>
//         </div>
//     );
// };

//connect: function(mapStateToProps, mapDispatchToProps) return HOC

export class CounterApp extends Component {

    render() {
        return (
            <div>
                <h1>Counter</h1>
                <div>{this.props.counter}</div>

                <button onClick={this.props.increment}>increment</button>
                <button onClick={this.props.decrement}>increment</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  counter: state.value,
})

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'counter/incremented' }),
    decrement: () => dispatch({ type: 'counter/decremented' }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
