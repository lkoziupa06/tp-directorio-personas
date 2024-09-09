import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Layout from "./pages/Layout";
import Home from "./App.js";
import Persona from "./pages/Persona.jsx";
import Contacto from "./pages/Contacto.jsx";
import Estadisticas from "./pages/Estadisticas.jsx";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="estadisticas" element={<Estadisticas />} />
          <Route path="persona/:id" element={<Persona />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
