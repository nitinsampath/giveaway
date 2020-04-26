import rafflesReducer from "../reducers/raffles";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

export default () => {
  const store = createStore(
    rafflesReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    applyMiddleware(thunk)
  );
  return store;
};
