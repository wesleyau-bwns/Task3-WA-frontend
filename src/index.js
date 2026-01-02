import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { BASENAME } from "./config";
import { AuthProvider } from "./contexts/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename={BASENAME}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
