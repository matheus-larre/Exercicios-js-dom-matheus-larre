function validarFormulario() {
  const nome = document.getElementById('nome')?.value.trim() || '';
  const cpf = document.getElementById('cpf')?.value.trim() || '';
  const mensagemEl = document.getElementById('mensagem');
  if (!mensagemEl) return;

  // Verificar campos obrigatórios: Nome e CPF
  if (nome === '' || cpf === '') {
    mensagemEl.innerText = 'Os campos Nome e CPF são obrigatórios.';
    mensagemEl.style.color = 'red';
    return;
  }

  // Validar CPF no formato 000.000.000-00
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
  if (!cpfRegex.test(cpf)) {
    mensagemEl.innerText = 'CPF inválido! Use o formato 000.000.000-00.';
    mensagemEl.style.color = 'red';
    return;
  }

  // Se tudo OK
  mensagemEl.innerText = 'Cadastro validado com sucesso!';
  mensagemEl.style.color = 'green';
}

console.log('Questão 04: script carregado');
