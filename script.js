<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>MNA - Mini Avaliação Nutricional</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <h1>MNA - Mini Avaliação Nutricional</h1>
  <p><em>App desenvolvido por Paula Guedes</em></p>

  <!-- Formulário MNA-SF -->
  <form id="mna-sf">
    <label>Nome do paciente: <input type="text" name="nome" id="nome"></label><br><br>

    <div class="pergunta">
      <label>1. Perda de apetite?</label><br>
      <select name="p1">
        <option value="0">Grave</option>
        <option value="1">Moderada</option>
        <option value="2">Sem perda</option>
      </select>
    </div>

    <div class="pergunta">
      <label>2. Perda de peso?</label><br>
      <select name="p2">
        <option value="0">≥3kg</option>
        <option value="1">1-3kg</option>
        <option value="2">Sem perda</option>
        <option value="3">Não sabe</option>
      </select>
    </div>

    <div class="pergunta">
      <label>3. Mobilidade?</label><br>
      <select name="p3">
        <option value="0">Acamado</option>
        <option value="1">Anda com ajuda</option>
        <option value="2">Anda sozinho</option>
      </select>
    </div>

    <div class="pergunta">
      <label>4. Estresse/doença aguda?</label><br>
      <select name="p4">
        <option value="0">Sim</option>
        <option value="2">Não</option>
      </select>
    </div>

    <div class="pergunta">
      <label>5. Problemas neuropsicológicos?</label><br>
      <select name="p5">
        <option value="0">Graves</option>
        <option value="1">Moderados</option>
        <option value="2">Nenhum</option>
      </select>
    </div>

    <div class="pergunta">
      <label>6. IMC?</label><br>
      <select name="p6">
        <option value="0">Menor que 19</option>
        <option value="1">Entre 19 e 21</option>
        <option value="2">Entre 21 e 23</option>
        <option value="3">Maior que 23</option>
      </select>
    </div>

    <button type="submit">Calcular Pontuação</button>
  </form>

  <div id="resultado-sf"></div>

  <!-- MNA Completo (invisível no início) -->
  <div id="mna-completo" style="display: none;">
    <h2>MNA Completo</h2>
    <p>Você pode inserir aqui o formulário completo com mais perguntas, se desejar.</p>

    <form id="mna-completo-form">
      <div class="pergunta">
        <label>7. Vive de forma independente?</label><br>
        <select name="c1">
          <option value="2">Sim</option>
          <option value="1">Não</option>
        </select>
      </div>

      <div class="pergunta">
        <label>8. Quantas refeições faz por dia?</label><br>
        <select name="c2">
          <option value="2">3 ou mais</option>
          <option value="1">2</option>
          <option value="0">1 ou nenhuma</option>
        </select>
      </div>

      <button type="button" onclick="finalizar()">Gerar PDF</button>
    </form>
  </div>

  <div id="resultado-final"></div>

  <script src="script.js"></script>
</body>
</html>
😃
