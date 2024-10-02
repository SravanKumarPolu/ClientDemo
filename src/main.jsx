import React from "react"; // Import React
import { createRoot } from "react-dom/client"; // Import React DOM for rendering
import { BrowserRouter } from "react-router-dom"; // Import BrowserRouter for routing
import App from "./App"; // Main App component
import "./index.css"; // Styles

// Create root element where React app will be mounted
const root = createRoot(document.getElementById("root"));

// Render the App within StrictMode and BrowserRouter
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
