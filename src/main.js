import "./style.css";
import { obterUtilizador } from "./api.js";

async function iniciar() {
  const utilizador = await obterUtilizador();

  document.querySelector("#app").innerHTML = `
    <h1>Ficha 01</h1>
    <h2>Utilizador obtido de uma API pública</h2>
    <p><strong>Nome:</strong> ${utilizador.name}</p>
    <p><strong>Email:</strong> ${utilizador.email}</p>
    <p><strong>Cidade:</strong> ${utilizador.address.city}</p>
  `;
}

iniciar();
