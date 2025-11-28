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

// Máscaras simples para CPF e Telefone
function maskCPF(e) {
  const el = e.target;
  let v = el.value.replace(/\D/g, '');
  if (v.length > 11) v = v.slice(0, 11);
  v = v.replace(/(\d{3})(\d)/, '$1.$2');
  v = v.replace(/(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
  v = v.replace(/(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
  el.value = v;
}

function maskTelefone(e) {
  const el = e.target;
  let v = el.value.replace(/\D/g, '');
  if (v.length > 11) v = v.slice(0, 11);
  if (v.length <= 2) {
    el.value = v;
    return;
  }
  if (v.length <= 6) {
    el.value = '(' + v.slice(0, 2) + ') ' + v.slice(2);
    return;
  }
  // padrão (xx) xxxxx-xxxx ou (xx) xxxx-xxxx
  if (v.length <= 10) {
    el.value = '(' + v.slice(0, 2) + ') ' + v.slice(2, 6) + '-' + v.slice(6);
  } else {
    el.value = '(' + v.slice(0, 2) + ') ' + v.slice(2, 7) + '-' + v.slice(7);
  }
}

// Registra listeners se os elementos existirem
document.addEventListener('DOMContentLoaded', () => {
  const cpfEl = document.getElementById('cpf');
  const telEl = document.getElementById('telefone');
  if (cpfEl) cpfEl.addEventListener('input', maskCPF);
  if (telEl) telEl.addEventListener('input', maskTelefone);
});
