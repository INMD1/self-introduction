import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import '@/index.css';
import Notion from "./components/Project/Notion";
import { projects } from "./data/projects";
const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      {projects.map(project => (
        <Route key={project.id} path={`/projects/${project.id}`} element={<Notion />} />
      ))}
    </Routes>
  </BrowserRouter>
);
