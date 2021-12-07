// document.addEventListener("keydown", function(tecla){
//     console.log(tecla,keycode);
// });

var configTeclado= {preventRepeat : true};
var eventoTeclado= new window.keypress.Listener(this,configTeclado);

function pulsoA(){
    console.log("Has Presionado la A")
}

function pulsoAD(){
    console.log("Has Presionado la A y la D al mismo tiempo")
}

function ataqueEspecial(){
    console.log("Ataque Especial!!")
}

eventoTeclado.simple_combo("a",pulsoA);
eventoTeclado.simple_combo("a d",pulsoAD);
eventoTeclado.sequence_combo("up down right left",ataqueEspecial);


var miCanvas;
function inicializar(){
    miCanvas=document.getElementById("canvas");
    miCanvas.addEventListener("mousedown",clicRaton,false);
    miCanvas.addEventListener("mouseup",suelteRaton,false);
    miCanvas.addEventListener("mousemove",posicionRaton,false);
}
function posicionRaton(evento){
    var x = evento.pageX;
    var y = evento.pageY;
    console.log("X:" + x + " Y:" + y);
}

function clicRaton(){
    console.log("Has Pulsado El Click");
}
function suelteRaton(){
    console.log("Has Soltado El Click");
}