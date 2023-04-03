import { createStore } from 'redux'
//view action reducer store

//reducer: function receives previous state and action, return new state
//action: object has type prop(string), message of how to update state

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export let store = createStore(counterReducer);

//closure: myCreateStore






// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

//read store
store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
//write store
/* store.dispatch({ type: 'counter/incremented' }); //1
// {value: 1}
store.dispatch({ type: 'counter/incremented' }); //2
// {value: 2}
store.dispatch({ type: 'counter/decremented' }); //1
// {value: 1} */


