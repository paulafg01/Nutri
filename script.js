document.getElementById('mna-sf').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;
  let scoreSF = 0;

  for (let i = 1; i <= 6; i++) {
    scoreSF += parseInt(form['p' + i].value, 10);
  }

  const nome = document.getElementById('nome').value;
  const resultado = document.getElementById('resultado-sf');
  resultado.innerHTML = `<p><b>Paciente:</b> ${nome}<br><b>Pontuação MNA-SF:</b> ${scoreSF}</p>`;

  if (scoreSF <= 11) {
    document.getElementById('mna-completo').style.display = 'block';
  } else {
    gerarPDF(nome, scoreSF, null);
  }
});

function finalizar() {
  const nome = document.getElementById('nome').value;
  let scoreSF = 0;
  for (let i = 1; i <= 6; i++) {
    scoreSF += parseInt(document.querySelector(`[name="p${i}"]`).value, 10);
  }

  let scoreC = 0;
  scoreC += parseInt(document.querySelector('[name="c1"]').value, 10);
  scoreC += parseInt(document.querySelector('[name="c2"]').value, 10);

  gerarPDF(nome, scoreSF, scoreC);
}

function gerarPDF(nome, scoreSF, scoreC) {
  const total = scoreC !== null ? scoreSF + scoreC : scoreSF;
  let texto = `Paciente: ${nome}\nPontuação MNA-SF: ${scoreSF}\n`;

  if (scoreC !== null) {
    texto += `Pontuação MNA Completo: ${scoreC}\nPontuação Total: ${total}`;
  }

  const blob = new Blob([texto], { type: 'application/pdf' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = `MNA-${nome}.pdf`;
  link.click();
}
