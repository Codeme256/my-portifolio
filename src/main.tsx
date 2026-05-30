const redirect = sessionStorage.getItem('redirect');
if (redirect && redirect !== '/') {
  sessionStorage.removeItem('redirect');
  window.history.replaceState(null, '', '/my-portifolio/' + redirect.replace(/^\//, ''));
} else {
  sessionStorage.removeItem('redirect');
}

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);