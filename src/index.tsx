import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/theme.css";
import { currentSlug, locale } from "./i18n";
import { PAGES } from "./content/pages";
import { Home } from "./pages/Home";
import { ContentPage } from "./pages/ContentPage";
import { NotFound } from "./pages/NotFound";

/* Enrutado por URL: `/` y `/en/` → home; `/slug/` y `/en/slug/` → página de contenido; el resto → 404. */
function App() {
  if (currentSlug === "") return <Home />;
  const page = PAGES[currentSlug];
  return page ? <ContentPage key={currentSlug} doc={page[locale]} /> : <NotFound />;
}

createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
