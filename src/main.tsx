import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import '@/index.css';
import Notion from "./components/Project/Notion";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/projects/main' element={<Notion />} />
      <Route path='/projects/aswdcp' element={<Notion />} />
      <Route path='/projects/ASW-PSMT' element={<Notion />} />
      <Route path='/projects/APSU' element={<Notion />} />
    </Routes>
  </BrowserRouter>
);
