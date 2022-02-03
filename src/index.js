import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import appReducer from "./redux/appReducer";
import { createStore } from "redux";
import { Provider } from 'react-redux';

import "./index.scss";
import "./styles/normalize.css";

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// Getting the state

const rerender = () => ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
  
rerender();

store.subscribe(() => {
  console.log('A', store.getState());
  rerender();
});

