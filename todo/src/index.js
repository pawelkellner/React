// Import react
import React from "react";
// Import react dom
import ReactDOM from "react-dom/client";
// Import App
import App from "./App/App"
// Variabele die we koppelen aan het html element root
const root = ReactDOM.createRoot(document.getElementById('root'));
// renderen we die variabele
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);