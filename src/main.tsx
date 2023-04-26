import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux"; //@ts-ignore
import configureStore from "./store/store.js";
import { BrowserRouter } from "react-router-dom";

const domNode = document.getElementById("root")!;
const root = ReactDOM.createRoot(domNode);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={configureStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
