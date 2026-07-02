<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Visualizador de Imagens</title>
<style>
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #eeeeee;
  }
 
  .caixa {
    background-color: white;
    width: 500px;
    margin: 30px auto;
    padding: 15px;
    border: 1px solid #cccccc;
  }
 
  h1 {
    font-family: "Times New Roman", serif;
    font-size: 32px;
    margin-bottom: 5px;
  }
 
  .botoes {
    margin-bottom: 15px;
  }
 
  .botoes button {
    width: 30px;
    height: 25px;
    cursor: pointer;
  }
 
  .quadro {
    border: 1px solid #999999;
    padding: 10px;
  }
 
  .cabecalho {
    font-weight: bold;
    margin-bottom: 8px;
  }
 
  .cabecalho a {
    text-decoration: none;
    color: blue;
  }
 
  img {
    width: 100%;
    display: block;
  }
</style>
</head>
<body>
 
<div class="caixa">
  <h1>Dogs</h1>
 
  <div class="botoes">
    <button id="btnVoltar" onclick="imagemAnterior()">&#8592;</button>
    <button id="btnAvancar" onclick="proximaImagem()">&#8594;</button>
    <input type="checkbox" id="checkExtra">
  </div>
 
  <div class="quadro">
    <div class="cabecalho">
      <span id="contador">#1/4</span>
      <strong id="tituloImagem">Poodle</strong>
      <a href="#" target="_blank" id="linkImagem">&#8599;</a>
    </div>
    <img id="fotoAtual" src="" alt="foto do cachorro">
  </div>
</div>
 
<script>
  // array com as imagens, cada uma tem um titulo e o link da foto
  var imagens = [
    {
      titulo: "Labrador",
      url: "https://images.dog.ceo/breeds/labrador/n02099712_1123.jpg"
    },
    {
      titulo: "Bulldog Frances",
      url: "https://images.dog.ceo/breeds/bulldog-french/n02108915_1234.jpg"
    },
    {
      titulo: "Terrier Bedlington",
      url: "https://images.dog.ceo/breeds/terrier-bedlington/n02093647_1234.jpg"
    },
    {
      titulo: "Husky Siberiano",
      url: "https://images.dog.ceo/breeds/husky/n02110185_1469.jpg"
    }
  ];
 
  // guarda em qual imagem o usuario esta agora
  var indiceAtual = 0;
 
  function mostrarImagem() {
    // pega os elementos da pagina
    var foto = document.getElementById("fotoAtual");
    var titulo = document.getElementById("tituloImagem");
    var contador = document.getElementById("contador");
    var link = document.getElementById("linkImagem");
 
    // atualiza com os dados da imagem atual
    foto.src = imagens[indiceAtual].url;
    titulo.innerHTML = imagens[indiceAtual].titulo;
    contador.innerHTML = "#" + (indiceAtual + 1) + "/" + imagens.length;
    link.href = imagens[indiceAtual].url;
  }
 
  function proximaImagem() {
    // se chegou na ultima imagem, volta pra primeira
    if (indiceAtual < imagens.length - 1) {
      indiceAtual = indiceAtual + 1;
    } else {
      indiceAtual = 0;
    }
    mostrarImagem();
  }
 
  function imagemAnterior() {
    // se esta na primeira imagem, vai pra ultima
    if (indiceAtual > 0) {
      indiceAtual = indiceAtual - 1;
    } else {
      indiceAtual = imagens.length - 1;
    }
    mostrarImagem();
  }
 
  // mostra a primeira imagem assim que a pagina carrega
  mostrarImagem();
</script>
 
</body>
</html>
 
