import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from './store/index';
// import { axios } from 'axios';
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
