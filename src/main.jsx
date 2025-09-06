import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/index.css";

// DI + services
import { register } from "./app/di";
import fetchClient from "./services/http/fetchClient";
import { createRagService } from "./services/rag";  // resolves to services/rag/index.js
import { createSdvService } from "./services/sdv";  // resolves to services/sdv/index.js

const baseUrl = import.meta.env.VITE_API_URL; // e.g., "http://localhost:8000"
const deps = { fetchClient, baseUrl };

// Register providers once (composition root)
register("rag:openai", createRagService("openai", deps));
register("rag:claude", createRagService("claude", deps));
register("sdv:local", createSdvService("local", deps));
register("sdv:api", createSdvService("api", deps));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
