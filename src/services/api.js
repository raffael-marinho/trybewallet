const url = 'https://economia.awesomeapi.com.br/json/all';

async function chamaApi() {
  const resposta = await fetch(url);

  const json = await resposta.json();
  console.log(json);
  return json;
}

export default chamaApi;
