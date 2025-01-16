//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Array de nomes
let names = [];

// Função para adicionar esses nomes
function adicionarAmigo() {
  const inputElement = document.getElementById('amigo')
  const input = inputElement.value
  input.value == '' ? alert('Por favor, insira um nome.') : names.push(input)
  
  listaDeAmigos()
  
  inputElement.value = ''
  console.log(names)
}

function listaDeAmigos() {
  const ul = document.getElementById('listaAmigos')
  ul.innerHTML = ''
  
  names.forEach(name => {
    const li = document.createElement('li')
    li.textContent = name
    ul.appendChild(li)
  });
}