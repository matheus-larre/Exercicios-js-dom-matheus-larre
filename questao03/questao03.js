function cadastrarUsuario() {
  const nome = document.getElementById('nome')?.value || '';
  const dataNasc = document.getElementById('dataNasc')?.value || '';
  const rua = document.getElementById('rua')?.value || '';
  const numero = document.getElementById('numero')?.value || '';
  const cidade = document.getElementById('cidade')?.value || '';
  const estado = document.getElementById('uf')?.value || '';

  const resultadoEl = document.getElementById('resultado');
  if (!resultadoEl) return;

  const frase = `${nome} nasceu no dia ${dataNasc} e mora na rua ${rua}, número ${numero}, na cidade ${cidade} do estado ${estado}.`;
  resultadoEl.innerText = frase;
  resultadoEl.style.color = 'green';
  resultadoEl.style.fontSize = '24px';
}

console.log('Questão 03: script carregado');
