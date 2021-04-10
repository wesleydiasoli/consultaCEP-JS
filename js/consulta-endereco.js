let cep = document.querySelector("#cep");
let rua = document.querySelector("#rua");
let bairro = document.querySelector("#bairro");
let cidade = document.querySelector("#cep");
let estado = document.querySelector("#estado");

cep.value = "01001000";

cep.addEventListener("blur", function (e) {
  let cep = e.target.value;

  let script = document.createElement("script");

  script.scr = "https://viacep.com.br/ws/01001000/json/?callback=popularForm";

  document.appendChild(script);
});

function popularForm(resposta) {
  console.log(resposta);
  rua.value = resposta.logradouro;
  bairro.value = resposta.bairro;
  cidade.value = resposta.localidade;
  estado.value = resposta.uf;
}
