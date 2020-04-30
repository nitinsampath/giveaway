import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import firebase from "firebase/app";
import { logInUser } from "./actions/users";

const store = configureStore();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    store.dispatch(logInUser());
  }
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
