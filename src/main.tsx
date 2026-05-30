// GitHub Pages SPA redirect fix
const params = new URLSearchParams(window.location.search);
const redirect = params.get('p');
if (redirect) {
  window.history.replaceState(null, '', redirect);
}
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
