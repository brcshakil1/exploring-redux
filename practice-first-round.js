const { createStore } = require("redux");

// CONSTANTS

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
const ADD_USER = "ADD_USER";

// state

const initialState = {
  user: ["Shakil"],
  count: 0,
};

// action

const incrementUser = (value) => {
  return {
    type: ADD_USER,
    payload: value,
  };
};

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

const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

// reducer

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };
    case ADD_USER:
      return {
        ...state,
        count: state.count + 1,
        user: [...state.user, action.payload],
      };
    default:
      return state;
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
store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(15));
store.dispatch(incrementUser("Bayazid"));
store.dispatch(incrementUser("Arif"));
store.dispatch(incrementUser("Shahid"));
store.dispatch(incrementUser("Emon"));
