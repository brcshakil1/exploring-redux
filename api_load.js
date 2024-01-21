// /**
//  * 1. async action - api calling
//  * 2. api url - https://jsonplaceholder.typicode.com/todos
//  * 3. middleware - redux thunk
//  * 4. axios api
//  */

// Redux middleware thunk

const { default: axios } = require("axios");
const { applyMiddleware } = require("redux");
const { createStore } = require("redux");
const { thunk } = require("redux-thunk");

// constants
const GET_TODOS_FAILED = "GET_TODOS_FAILED";
const GET_TODOS_REQUEST = "GET_TODOS_REQUEST";
const GET_TODOS_SUCCESS = "GET_TODOS_SUCCESS";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

// state
const initialTodosState = {
  todos: [],
  isLoading: false,
  error: null,
};

// action
const getTodosRequest = () => {
  return {
    type: GET_TODOS_REQUEST,
  };
};

const getTodosFailed = (error) => {
  return {
    type: GET_TODOS_FAILED,
    payload: error,
  };
};

const getTodosSuccess = (todos) => {
  return {
    type: GET_TODOS_SUCCESS,
    payload: todos,
  };
};
// reducers
const todosReducer = (state = initialTodosState, action) => {
  switch (action.type) {
    case GET_TODOS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case GET_TODOS_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case GET_TODOS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };

    default:
      return state;
  }
};

const fetchData = () => {
  return (dispatch) => {
    dispatch(getTodosRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const titles = todos?.map((todo) => todo.title);
        dispatch(getTodosSuccess(titles));
      })
      .catch((error) => {
        dispatch(getTodosFailed(error.message));
      });
  };
};

// store
const store = createStore(todosReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
