import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App";
import { LocaleProvider } from "@/lib/i18n/context";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocaleProvider>
      <App />
    </LocaleProvider>
  </React.StrictMode>
);
