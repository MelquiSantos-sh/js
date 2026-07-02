<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Calculadora de Conceito</title>
<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #eeeeee;
  }
 
  .caixa {
    background-color: white;
    width: 400px;
    margin: 30px auto;
    padding: 20px;
    border: 1px solid #cccccc;
  }
 
  h1 {
    font-family: "Times New Roman", serif;
    font-size: 26px;
    color: #1a1a70;
    margin-bottom: 20px;
  }
 
  .notas {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }
 
  .campo label {
    display: block;
    color: #444444;
    margin-bottom: 5px;
  }
 
  .campo input {
    width: 60px;
    font-size: 16px;
    padding: 3px;
  }
 
  .resultado {
    display: grid;
    grid-template-columns: 100px auto;
    row-gap: 8px;
    font-size: 18px;
  }
 
  .resultado span:first-child {
    color: #444444;
  }
 
  #conceito {
    font-weight: bold;
    color: #1a1a70;
  }
</style>
</head>
<body>
 
<div class="caixa">
  <h1>Calculadora de conceito</h1>
 
  <div class="notas">
    <div class="campo">
      <label for="nota1">Nota 1</label>
      <input type="number" id="nota1" min="0" max="10" value="10" oninput="calcular()">
    </div>
    <div class="campo">
      <label for="nota2">Nota 2</label>
      <input type="number" id="nota2" min="0" max="10" value="10" oninput="calcular()">
    </div>
    <div class="campo">
      <label for="nota3">Nota 3</label>
      <input type="number" id="nota3" min="0" max="10" value="6" oninput="calcular()">
    </div>
  </div>
 
  <div class="resultado">
    <span>Conceito</span>
    <span id="conceito">B</span>
    <span>Média</span>
    <span id="media">8.67</span>
  </div>
</div>
 
<script>
  function calcular() {
    // pega o valor dos 3 campos de nota
    var nota1 = Number(document.getElementById("nota1").value);
    var nota2 = Number(document.getElementById("nota2").value);
    var nota3 = Number(document.getElementById("nota3").value);
 
    // calcula a media das 3 notas
    var media = (nota1 + nota2 + nota3) / 3;
 
    // descobre o conceito de acordo com a media
    var conceito = "";
    if (media >= 9) {
      conceito = "A";
    } else if (media >= 7) {
      conceito = "B";
    } else if (media >= 5) {
      conceito = "C";
    } else {
      conceito = "D";
    }
 
    // mostra o resultado na tela
    document.getElementById("media").innerHTML = media.toFixed(2);
    document.getElementById("conceito").innerHTML = conceito;
  }
 
  // calcula assim que a pagina carrega, com os valores padrao
  calcular();
</script>
 
</body>
</html>
 
