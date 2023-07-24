import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppContext } from "./Context/ContextApi.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContext>
  </React.StrictMode>
);
