import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  // BrowserRouter는 브라우저의 현재 주소를 감지하고 저장하는 역할을 함
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
