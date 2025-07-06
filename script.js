
document.getElementById('mna-form').addEventListener('submit', function(event) {
    event.preventDefault();

    let score = 0;
    const form = event.target;
    for (let i = 1; i <= 6; i++) {
        score += parseInt(form['p' + i].value, 10);
    }

    const resultado = document.getElementById('resultado');
    const nome = document.getElementById('nome').value;
    let mensagem = `Paciente: ${nome}<br>Pontuação total: ${score} – `;

    if (score >= 12) {
        mensagem += 'Estado nutricional normal.';
    } else if (score >= 8) {
        mensagem += 'Risco de desnutrição.';
        document.getElementById('mna-completo').style.display = 'block';
    } else {
        mensagem += 'Desnutrição.';
        document.getElementById('mna-completo').style.display = 'block';
    }

    resultado.innerHTML = mensagem;
});

function gerarPDF() {
    const nome = document.getElementById('nome').value;
    const resultado = document.getElementById('resultado').innerText;
    const texto = `Paciente: ${nome}\n${resultado}`;

    const blob = new Blob([texto], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `MNA-${nome}.pdf`;
    link.click();
}
