import React from "react";

import ReactDOM from "react-dom/client";

import "./i18n";

import { Provider } from "react-redux";
import { store } from "./redux/store";

import App from "./modules/App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
