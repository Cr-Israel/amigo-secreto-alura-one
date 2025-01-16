// Array de nomes
let nomes = [];

// Função para adicionar amigos
function adicionarAmigo() {
  const inputElement = document.getElementById('amigo')
  const input = inputElement.value.trim()
  input == '' ? alert('Por favor, insira um nome.') : nomes.push(input)

  listaDeAmigos()

  inputElement.value = ''
}

// Função para listar amigos
function listaDeAmigos() {
  const ul = document.getElementById('listaAmigos')
  ul.innerHTML = ''

  nomes.forEach(name => {
    const li = document.createElement('li')
    li.textContent = name
    ul.appendChild(li)
  });
}

// Função para sortear amigos
function sortearAmigo() {
  
  if (nomes == [] || nomes.length == 0) {
    alert('Por favor, adicione um nome antes de sortear')
  } else {
    // const amigoSecreto = nomes[Math.floor(Math.random() * nomes.length)]
    const index = Math.floor(Math.random() * nomes.length)
    const amigoSecreto = nomes[index]

    const ul = document.getElementById('resultado')
    ul.innerHTML = ''

    const li = document.createElement('li')
    li.textContent = `Seu amigo secreto sorteado é: ${amigoSecreto}`
    ul.appendChild(li)
  }
}