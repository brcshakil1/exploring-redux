//  DEFINING CONSTANTS
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state
const initialCounterState = {
  count: 0,
};
const initialUsersState = {
  users: [{ name: "Bayazid" }],
};

// action - object: type, payload

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

const addUser = () => {
  return {
    type: ADD_USER,
    payload: { name: "Shakil" },
  };
};

// create reducer for counter

const decrementCounter = (state = initialCounterState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count - 1
      }
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      }
  
    default:
      state;
  }
}

// 1. state
// 2. dispatch action
// 3. reducer (will work based on action type)
// 4. store
