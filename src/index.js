import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
<<<<<<< HEAD
import "./styles/global.css"; // index.js에서 global stylesheet을 import하면 전역적으로 스타일이 적용돼요
=======
import "./styles/global.css";
>>>>>>> React-정혜연-sprint6

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
