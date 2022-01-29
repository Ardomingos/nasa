const link = "https://api.nasa.gov/planetary/apod?";
var chave = "api_key=c71SvKhqPfHXIURh3NaUZTYxoYsw30p5NBB9HpNz";

console.log(`${link}${chave}`)


window.onload = async function(){

    const response = await fetch(`${link}${chave}`);

    const dados = await response.json();

    var titulo = document.getElementById("titulo").innerHTML = dados.title;   
    var explicacao = document.getElementById("explicacao").innerHTML = dados.explanation;


    if(dados.media_type == "image"){
    
    var imagens = dados.hdurl
    var imagem = document.getElementById("media").innerHTML = [`<img src=${imagens} class="classe"></img> `]

    } else {

        var videos = dados.url
        var video = document.getElementById("media").innerHTML = [`<iframe  src=${videos} class="classe"></iframe > `]

    }

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
    
    if(novoDados.media_type == "image"){
        
        var novaimagens = novoDados.hdurl
        var novaimagem = document.getElementById("media").innerHTML = [`<img src=${novaimagens} class="classe"></img> `]
        
    
        } else {
    
            var novoVideos = novoDados.url
            var novoVideo = document.getElementById("media").innerHTML = [`<iframe  src=${novoVideos} class="classe"></iframe > `]
    
        }
}




