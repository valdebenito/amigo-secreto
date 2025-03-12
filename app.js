// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    if(!nombreAmigo) {
        alert("Debes ingresar un nombre");
        return;
    }
    amigos.push(nombreAmigo);
    inputAmigo.value = "";
    console.log(amigos);
    

}