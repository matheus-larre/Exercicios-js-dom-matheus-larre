function inserirTitulo() {
  const input = document.getElementById('txt-titulo');
  const titulo = document.getElementById('titulo');
  if (!input || !titulo) return;
  const valor = input.value;
  titulo.innerText = valor;
  titulo.style.color = 'blue';
}

console.log('Questão 01: script carregado');
