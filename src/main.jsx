import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RegisterProvider } from "./context/RegisterContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RegisterProvider>
      <App className="font-body antialiased" />
    </RegisterProvider>
  </StrictMode>
);
