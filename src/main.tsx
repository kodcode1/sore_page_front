import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./features/index.ts";
import { Provider } from "react-redux";

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
