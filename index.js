const url = "https://api.nasa.gov/planetary/apod?api_key=";
var chave = "BNjUedFKICh225wd8VhQnuX2aZswmzREqqcCGBBO";

var final = url + chave;

window.onload = async function(){

    const response = await fetch(`${url}${chave}`);
    const dados = await response.json();

    var titulo = document.getElementById("titulo").innerHTML = dados.title;   
    var explicacao = document.getElementById("explicacao").innerHTML = dados.explanation;


}











/*fetch(`${url}${chave}`)
    .then(response => response.json())
    .then(dados => {
        const div = document.getElementById("conteudo");
        div.innerHTML = dados.hdurl;
    })
    .catch(erro => console.log(erro));*/

