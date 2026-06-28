import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import "./styles/variables.css";
import "./styles/global.css";
import "./styles/components.css";
import "./styles/join.css";
import "./styles/chat.css";
import "./styles/message.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);