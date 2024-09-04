import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <div className="flex flex-col bg-zinc-100 min-h-screen m-0 justify-center items-center">
      <App />
    </div>
    
  </StrictMode>
);
