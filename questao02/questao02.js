function mudarForma() {
  const forma = document.getElementById('forma');
  const btn = document.getElementById('btn-forma');
  if (!forma || !btn) return;
  // Verifica estado atual pelo borderRadius (string com px/% etc.)
  const radius = forma.style.borderRadius || getComputedStyle(forma).borderRadius || '';
  if (radius.includes('50')) {
    // passar para quadrado
    forma.style.borderRadius = '0%';
    btn.innerText = 'Retornar forma original';
  } else {
    // passar para círculo
    forma.style.borderRadius = '50%';
    btn.innerText = 'Mudar forma';
  }
}

console.log('Questão 02: script carregado');
