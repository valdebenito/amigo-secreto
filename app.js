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
    inputAmigo.focus();
    //console.log(amigos);  
    renderizarAmigos();  
}

function renderizarAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for(let i=0; i<amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}
function sortearAmigos() {
    if(amigos.length===0){
        alert("No hay amigos para sortear");
        return;
    }
    if(amigos.length < 2) {
        alert("Debes ingresar al menos dos amigos");
        return;
    }
    let amigosSorteados = amigos.slice();
    for(let i=0; i<amigos.length; i++) {
        let amigo = amigosSorteados[i];
        let amigoSorteado = amigosSorteados[Math.floor(Math.random() * amigosSorteados.length)];
        amigosSorteados[i] = amigoSorteado;
        amigosSorteados[amigosSorteados.indexOf(amigoSorteado)] = amigo;
    }
    renderizarSorteo(amigos, amigosSorteados);
}
function renderizarSorteo(amigos, amigosSorteados) {
    let listaSorteo = document.getElementById("resultado");
    listaSorteo.innerHTML = "";
    for(let i=0; i<amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i] + " le regala a " + amigosSorteados[i];
        listaSorteo.appendChild(li);
    }
}