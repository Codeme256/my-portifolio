// GitHub Pages SPA redirect fix
const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;
if (redirect && redirect !== location.href) {
  window.history.replaceState(null, '', redirect.replace(window.location.origin, ''));
}

import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);