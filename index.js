/**
 * 1. State - count
 * 2. Action - increment, decrement, reset
 * 3. Reducer
 * 4. store
 */

const { createStore } = require("redux");

// CONSTANTS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// state
const initialState = {
  counter: 0,
};

// action

const incrementCounterAction = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounterAction = () => {
  return {
    type: DECREMENT,
  };
};

const resetCounterAction = () => {
  return {
    type: RESET,
  };
};

//  create Reducer

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case RESET:
      return {
        ...state,
        counter: 0,
      };
    default:
      state;
  }
};

// store - getState(), dispatch(), subscribe()

const store = createStore(counterReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());
