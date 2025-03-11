// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];
let soloNombres = /^[A-Za-z]+$/;

function agregarAmigo(){
    let ingresarAmigo = document.getElementById("amigo");
    let listaDeAmigos = ingresarAmigo.value;
   

    //console.log (amigo);

    if(!listaDeAmigos){
        alert("Por favor, inserte un nombre");
        return;
    }
    
    //validar que solo se ingresen letras

    if (!soloNombres.test(listaDeAmigos)) {
        alert ("Por favor, solo ingrese letras, no se aceptan números ni caracteres especiales")
        return
    }
    
    amigo.push(listaDeAmigos);
    ingresarAmigo.value = "";
    ingresarAmigo.focus();
    mostrarAmigos();

     // Limpiar el resultado del sorteo una vez que se agregue de nuevo un nombre para evitar recargar la página
     document.getElementById("resultado").innerHTML = "";
 
}

function mostrarAmigos(){
    let listado = document.getElementById ("listaAmigos");
    listado.innerHTML = "";

    for (let nombre of amigo) {
        listado.innerHTML += `<li>${nombre}</li>`;
    }
}

function sortearAmigo(){
    if(amigo.length === 0){
        alert("No hay amigos para sortear");
        return;
    }

    if(amigo.length === 1){
        alert("Por favor agrega más nombres para poder realizar el sorteo");
        return;
    }

    let amigoSecreto = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es : ${amigoSecreto}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
    amigo.length = 0;
    mostrarAmigos();


}