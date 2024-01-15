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
