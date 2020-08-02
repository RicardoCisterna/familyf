import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { Router } from "react-router";
import { createBrowserHistory,History } from "history";
import * as serviceWorker from "./serviceWorker";
import { createStore, combineReducers, applyMiddleware } from "redux";
import * as reducers from "./ducks";
import thunk from "redux-thunk";


const store = createStore(
  combineReducers({
    ...reducers
  })
);

const history: any = createBrowserHistory();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history} >
        <App history={history} />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
