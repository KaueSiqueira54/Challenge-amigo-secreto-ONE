//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
  let adicionarAmigos = document.querySelector("input").value.trim();

  if (adicionarAmigos == "") {
    alert("Por favor, digite um nome.");
  } else if (/\d/.test(adicionarAmigos)) {
    alert("Você digitou um valor numérico! Somente letras são permitidas.");
  } else if (verificarAmigoRepetido(adicionarAmigos)) {
    alert("Este nome já está na lista!");
  } else {
    amigos.push(adicionarAmigos);
    percorrerLista();
  }
  limparCampo();
}

function verificarAmigoRepetido(nome) {
  return amigos.some((amigo) => amigo.toLowerCase() === nome.toLowerCase());
}

function percorrerLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  for (let i = 0; i < amigos.length; i++) {
    lista.innerHTML += `<li>${amigos[i]}</li>`;
    console.log(amigos[i]);
  }
}

function limparCampo() {
  let campo = document.querySelector("input");
  campo.value = "";
}

function sortearAmigo() {
  if (amigos.length == 0) {
    alert("Não há amigos na lista!");
  } else if (amigos.length == 1) {
    alert("É preciso mais amigos para sortear.");
  }
  let resultado = document.getElementById("resultado");
  let sortearNumero = parseInt(Math.random() * amigos.length);
  resultado.innerHTML = `<li>Amigo sorteado: ${amigos[sortearNumero]}</li>`;
}

function limparNomes() {
  if (amigos.length == 0) {
    alert("A lista já está vazia!");
  } else {
    limparCampo();
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    alert("Lista de amigos apagada com sucesso!");
  }
}
