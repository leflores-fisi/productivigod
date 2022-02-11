import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from 'react-redux';
import App from "./App";
import AppReducer from "./redux/AppReducer";
import "./index.scss";
import "./normalize.css";

const store = createStore(
  AppReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// Getting the state

const renderApp = () => ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
  
renderApp();

store.subscribe(() => {
  console.log('New store value:', store.getState());
  renderApp();
});

const getScreenSize = () => { //eslint-disable-line
  // Document
  //document.body.scrollHeight;
  //document.body.scrollWidth;
  // Screen
  //screen.height;
  //screen.width;
}

