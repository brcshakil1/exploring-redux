// Multiple reducer
// middleware

const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// constants

const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCT = "GET_PRODUCT";
const ADD_CART = "ADD_CART";
const GET_CART = "GET_CART";

// Products state

const initialProductsState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

const initialCartsState = {
  cart: ["salt"],
  numberOfCartProducts: 1,
};

// products action

const getProduct = () => {
  return {
    type: GET_PRODUCT,
  };
};

const addProduct = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// carts action
// const addCart = (product) => {
//   return {
//     type: ADD_CART,
//     payload: product,
//   };
// };

// const getCart = () => {
//   return {
//     type: GET_CART,
//   };
// };

// products reducer

const productReducer = (state = initialProductsState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };
    case GET_PRODUCT:
      return {
        ...state,
      };

    default:
      return state;
  }
};
// cart reducer
// const cartReducer = (state = initialCartsState, action) => {
//   switch (action.type) {
//     case ADD_CART:
//       return {
//         cart: [...state.cart, action.payload],
//         numberOfCartProducts: state.numberOfCartProducts + 1,
//       };
//     case GET_CART:
//       return {
//         ...state,
//       };

//     default:
//       return state;
//   }
// };

// products store - getState(), dispatch(), subscribe();

// combine multiple reducers

// const rootReducer = combineReducers({
//   productR: productReducer,
//   cartR: cartReducer,
// });

const store = createStore(productReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

// store.dispatch(getCart());
// store.dispatch(addCart("banam"));
store.dispatch(getProduct());
store.dispatch(addProduct("nut"));

// cart state
