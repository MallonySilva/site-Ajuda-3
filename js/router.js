
import { homeTemplate, projetosTemplate, cadastroTemplate } from "./templates.js";

const routes = {
  "/": homeTemplate,
  "/projetos": projetosTemplate,
  "/cadastro": cadastroTemplate,
};

export function navigateTo(path) {
  location.hash = "#" + path;
}

export function renderRoute(rootEl) {
  const hash = location.hash.replace("#", "") || "/";
  const templateFn = routes[hash] || (() => `<h2>404 — Página não encontrada</h2>`);
  rootEl.innerHTML = templateFn();
}
