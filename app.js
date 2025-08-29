let numeroSecreto = 0;
let intentos = 0;

function escribeTextoHtml(elemento,texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML= texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value); //Se agrega .value para capturar el  valor ingresado por el usuario en el input.
 if(numeroDeUsuario === numeroSecreto){
    escribeTextoHtml("h1", "Alea iact est!!");
    escribeTextoHtml("p", `Acertaste el número en ${intentos} ${(intentos === 1) ? "vez" : "veces"}`);
    document.getElementById("reiniciar").removeAttribute("disabled");
}else if(numeroDeUsuario > numeroSecreto){
    escribeTextoHtml("p", "El número secreto es menor");
 }else{
    escribeTextoHtml("p", "El número secreto es mayor");
 }
 intentos++;
 limpiarCaja();
    return;
}
function limpiarCaja(){
    document.querySelector("#valorUsuario").value = " ";
}
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}
function condicionesIniciales(){
    escribeTextoHtml("h1", "¡Juguemos!");
    escribeTextoHtml("p", "Escribe un número del 1 al 10");
    escribeTextoHtml(".descripcion","En este juego vas a probar tu suerte contra la aleatoriedad de la máquina. ¡Que Rufini te acompañe!");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled", "true");
    
}
condicionesIniciales();

