var canvas;
var contexto;
var FPS=30;

var anchoFila = 80;
var AltoFila = 80;

var cesped="#338f0b";
var agua="#00b0c7";
var tierra="#8a5300";
var InicioFin="#a67a00";
var Puente="#734600"

var protagonista;


var escenario = [
    [0,0,3,0,0,1,0,0,0,0,0,0],
    [0,2,2,2,0,1,1,1,0,2,3,0],
    [0,2,0,2,0,0,0,1,0,2,0,0],
    [0,0,0,2,0,2,2,4,2,2,0,0],
    [1,4,1,4,1,4,1,1,1,1,0,0],
    [0,2,2,2,0,2,1,0,0,1,0,0],
    [0,0,2,0,0,2,4,2,2,1,0,0],
    [1,0,2,2,2,2,1,0,2,4,0,0],
    [1,1,4,1,1,4,4,0,0,1,0,0],
    [0,0,2,2,0,0,2,0,0,1,0,0],
    [0,0,0,0,0,0,0,1,1,1,0,0]
]

function DibujarEscenario(){
    var color;
    for (let y = 0 ; y < escenario.length ; y++){
        for (let x= 0 ; x < escenario.length ; x++){
            if (escenario[y][x]==1)
                color=agua;
            if (escenario[y][x]==0)
                color=cesped;
            if (escenario[y][x]==2)
                color=tierra;
            if (escenario[y][x]==3)
                color=InicioFin;
            if (escenario[y][x]==4)
                color=Puente;

            contexto.fillStyle = color;
            contexto.fillRect(x*anchoFila,y*AltoFila,anchoFila,AltoFila);

            
        }
    }
}

var jugador = function(){
    this.x=2;
    this.y=0;
    this.color="#6b0073";

    this.Dibujar=function(){
        contexto.fillStyle = this.color;
        contexto.fillRect(this.x*anchoFila,this.y*AltoFila,anchoFila,AltoFila)
    }

    this.margenes=function(x,y){
        var colision=false;
        if (escenario[y][x]==0 || escenario[y][x]==1){
            colision=true;
        }
        return(colision);
    }

    this.Derecha=function(){
        if(this.margenes(this.x+1,this.y)==false)
            this.x++;
    }
    this.izquierda=function(){
        if(this.margenes(this.x-1,this.y)==false)
            this.x--;
    }
    this.Arriba=function(){
        if(this.margenes(this.x,this.y+1)==false)
            this.y++;
    }
    this.Abajo=function(){
        if(this.margenes(this.x,this.y-1)==false)
            this.y--;
    }

}



function iniciar(){
    canvas=document.getElementById("canvas");
    contexto=canvas.getContext("2d");
    
    //Creamos protagonista
    protagonista = new jugador();

    document.addEventListener("keydown",function(tecla){
        if (tecla.keyCode == 37){
            protagonista.izquierda();
        }
        if (tecla.keyCode == 38){
            protagonista.Abajo();
        }
        if (tecla.keyCode == 39){
            protagonista.Derecha();
        }
        if (tecla.keyCode == 40){
            protagonista.Arriba();
        }
    })

    setInterval(function(){
        principal();
    },5000/FPS)

}


function borrarCanvas(){
    canvas.width=900;
    canvas.height=900;
}


function principal(){
    borrarCanvas();
    DibujarEscenario();
    protagonista.Dibujar();
}


// document.addEventListener("keydown",function(tecla){
//     if (tecla.keyCode == 37){
//         protagonista.izquierda();
//     }
//     if (tecla.keyCode == 38){
//         protagonista.Abajo();
//     }
//     if (tecla.keyCode == 39){
//         protagonista.Derecha();
//     }
//     if (tecla.keyCode == 40){
//         protagonista.Arriba();
//     }
// })
