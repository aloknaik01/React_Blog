import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
