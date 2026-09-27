import "./style.css";
import { slug } from "./utils.js";

async function iniciar() {
  const res = await fetch(
    "https://api.github.com/repos/nodejs/node"
  );

  const repo = await res.json();

  document.querySelector("#app").innerHTML = `
    <h1>Ficha 01</h1>
    <h2>${slug(repo.name)}</h2>
    <p><strong>Nome:</strong> ${repo.name}</p>
    <p><strong>Estrelas:</strong> ${repo.stargazers_count}</p>
    <p><strong>Linguagem:</strong> ${repo.language}</p>
  `;
}

iniciar();