import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/theme.css";
import { currentSlug, locale } from "./i18n";
import { PAGES } from "./content/pages";
import { Home } from "./pages/Home";
import { ContentPage } from "./pages/ContentPage";
import { NotFound } from "./pages/NotFound";
import { BUILT_NEWS } from "./content/news/meta";
import { articleDoc } from "./pages/blocks/News";

/* Enrutado por URL: `/` y `/en/` → home; `/slug/` y `/en/slug/` → página de contenido o noticia; el resto → 404. */
function App() {
  if (currentSlug === "") return <Home />;
  const page = PAGES[currentSlug];
  if (page) return <ContentPage key={currentSlug} doc={page[locale]} />;
  if (BUILT_NEWS.includes(currentSlug)) return <ContentPage key={currentSlug} doc={articleDoc(currentSlug)} />;
  return <NotFound />;
}

createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
