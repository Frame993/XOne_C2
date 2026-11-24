import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/theme.css";
import { Styleguide } from "./pages/Styleguide";

createRoot(document.getElementById("root")!).render(<StrictMode><Styleguide /></StrictMode>);
