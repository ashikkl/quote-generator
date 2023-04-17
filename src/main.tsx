import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";//@ts-ignore
import configureStore from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bookmarks from "./components/Bookmarks";

const router = createBrowserRouter([
  {
    path: "*",
    element: <App />,
  },
  {
    path: "bookmarks",
    element: <Bookmarks />,
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={configureStore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
