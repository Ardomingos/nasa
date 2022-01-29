const link = "https://api.nasa.gov/planetary/apod?";
var chave = "api_key=c71SvKhqPfHXIURh3NaUZTYxoYsw30p5NBB9HpNz";


window.onload = async function(){

    const response = await fetch(`${link}${chave}`);

    const dados = await response.json();

    var titulo = document.getElementById("titulo").innerHTML = dados.title;   
    var explicacao = document.getElementById("explicacao").innerHTML = dados.explanation;
    var imagens = dados.hdurl
    var imagem = document.getElementById("imagem").innerHTML = [`<img src=${imagens} class="classe"></img> `]

}



$("#enviar").click(function(event){
   
    event.preventDefault();
    pesquisar();

})

    

async function pesquisar (){

    var data = $("#data").val();

    var dataFormatada = `${data.slice(0,4)}-${data.slice(5,7)}-${data.slice(8,10)}`;

    var novaResponse = await fetch(`${link}date=${dataFormatada}&${chave}`);
    var novoDados = await novaResponse.json();

    var novoTitulo = document.getElementById("titulo").innerHTML = novoDados.title;   
    var novaExplicacao = document.getElementById("explicacao").innerHTML = novoDados.explanation;
    var novaimagens = novoDados.hdurl
    var novaimagem = document.getElementById("imagem").innerHTML = [`<img src=${novaimagens} class="classe"></img> `]
}




