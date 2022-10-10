import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/app.scss";
import App from "./App";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);