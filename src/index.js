import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./contexts/AuthContext";

const BASENAME = "/ws6/BPSP-DEMO/frontend/build";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={BASENAME}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
