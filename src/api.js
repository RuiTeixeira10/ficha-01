export async function obterUtilizador() {
  const resposta = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  return await resposta.json();
}