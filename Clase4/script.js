var canvas;
var contexto;
var FPS=30;
//TAMAÑO DE LOS CUADROS
var anchoFila = 50;
var AltoFila = 50;
//COLOR DE LOS CUADROS
var cesped="#338f0b";
var agua="#00b0c7";
var tierra="#8a5300";
var Fin="#a67a00";
var Puente="#734600";
var Llave="#ffff00";
//PERSONAJE
var protagonista;
//MAPA
var diseño;
//VIDAS DEL PRSONAJE
var vida = 100;
//Jugadas encontra
var veneno = "#ff0000";
var vidas = "#40ff00";
//Estados del Jugador
var vivo = true;
//Objetos 
var pocion = 0;
var revivir = 1;


var escenario = [
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,2,0,0,1,0,0,0,0,2,0,7,2,0],
    [0,2,2,2,0,1,1,1,0,2,2,0,2,0,0],
    [0,2,0,2,0,0,0,1,0,2,0,0,2,3,0],
    [0,0,0,2,0,2,2,4,2,2,0,0,2,0,0],
    [1,4,1,4,1,4,1,1,1,1,0,2,2,2,0],
    [0,2,2,2,0,2,1,0,0,1,0,0,0,2,0],
    [0,0,2,0,0,2,4,2,2,1,0,0,2,2,0],
    [1,0,2,2,2,2,1,0,2,4,2,2,2,0,0],
    [1,1,4,1,1,4,4,0,0,1,0,2,0,0,0],
    [0,0,2,2,0,0,1,0,0,1,1,4,1,1,1],
    [0,0,0,6,0,1,1,1,1,1,0,7,0,0,0],
    [0,0,0,2,2,4,2,2,2,1,0,2,0,5,0],
    [0,2,2,2,0,1,0,0,2,4,2,2,2,2,0],
    [1,4,1,1,1,1,0,0,0,1,0,0,0,2,0],
    [0,2,0,0,0,2,2,2,0,4,2,2,2,2,0],
    [0,2,2,6,2,2,0,2,2,4,0,2,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0]
]

function DibujarEscenario(){
    var color;
    for (let y = 0 ; y < escenario.length ; y++){
        for (let x= 0 ; x < escenario[0].length ; x++){
            if (escenario[y][x]==1)
                color=agua;
            if (escenario[y][x]==0)
                color=cesped;
            if (escenario[y][x]==2)
                color=tierra;
            if (escenario[y][x]==3)
                color=Fin;
            if (escenario[y][x]==4)
                color=Puente;
            if (escenario[y][x]==5)
                color=Llave;
            if (escenario[y][x]==6)
                color=vidas;
            if (escenario[y][x]==7)
                color=veneno;

            contexto.fillStyle = color;
            contexto.fillRect(x*anchoFila,y*AltoFila,anchoFila,AltoFila);

            
        }
    }
}

var jugador = function(){
    this.x=2;
    this.y=1;
    this.color="#6b0073";
    this.Llave=false;
    this.puerta=false;

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
            this.obtenerObjeto();
            this.NuevoMundo();
    }
    this.izquierda=function(){
        if(this.margenes(this.x-1,this.y)==false)
            this.x--;
            this.obtenerObjeto();
            this.NuevoMundo();
    }
    this.Arriba=function(){
        if(this.margenes(this.x,this.y+1)==false)
            this.y++;
            this.obtenerObjeto();
            this.NuevoMundo();
    }
    this.Abajo=function(){
        if(this.margenes(this.x,this.y-1)==false)
            this.y--;
            this.obtenerObjeto();
            this.NuevoMundo();
    }

    this.obtenerObjeto=function(){
        var objeto =escenario[this.y][this.x];
        if (objeto==5){
            this.Llave=true;
            escenario[this.y][this.x]=2;
            alert("¡Llave Atrapada!");
        }
    }
    this.NuevoMundo=function(){
        var puerta=escenario[this.y][this.x];
        if (puerta==3 && this.Llave==true){
            this.puerta=true;
            escenario[this.y][this.x]=2;
            alert("¡Fin del Juego!");
        }else if(puerta==3 && this.Llave==false) {
            alert("¡Falta la Llave!");
        }
    }
}


function iniciar(){
    canvas=document.getElementById("canvas");
    contexto=canvas.getContext("2d");

    tleMap=new Image();
    tleMap.src="image.png";
    
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

//EJEMPLO

var vida = 100;
//Jugadas del CPU
var atacar = 0;
var fallar = 3;
//Estados del Jugador
var vivo = true;
//Objetos 
var pocion = 0;
var revivir = 1; 

function  usarItem(objeto){
     if (objeto == pocion){
        vida += 50;
     }
     else if (objeto==revivr){
         if (vivo = false){
            vivo=true;
            vida=50;
            console.log("Ha Sido Revivido el Jugador");
         }else{
             console.log("Usted esta vivo");
         }
     }
     else if (objeto==pocionQuemaduras && vivo==true){
        if (quemado){
            quemado=false;
            console.log("El Jugador ya no Esta Quemado");
         }else{
             console.log("El Jugador no Esta Quemado");
         }
     }
     else if (objeto==pocionVeneno && vivo==true){
        if (envenado){
            envenado=false;
            console.log("El Jugador ya no Esta Envenenado");
         }else{
             console.log("El Jugador no Esta Envenenado");
         }
     }

     estadoJugador();
}

function estadoJugador(){
    if(vivo){
        console.log("Vida: "+vida);
        if (envenado)
            console.log("¡Envenenado!");
        else if (quemado)
            console.log("¡Quemado!");
    }else{
        console.log("Vida: "+vida); 
    }
}

function jugar (){
    var jugadaCPU=Math.floor(Math.random()*4);
    //console.log(jugadaCPU);
    if(vida <= 0){
        vivo=false;
        console.log("El Jugador Ha Muerto");
    }

    if (vida > 0){
        if (jugadaCPU == atacar){
            console.log("Hemos Atacado al Jugador");
            vida=-10;
        }
        if (jugadaCPU == quemar){
            console.log("Hemos Quemado al Jugador");
            quemado=true;
            vida=-15;
        }
        if( jugadaCPU == envenenar){
            console.log("Hemos Envenenado al Jugador");
            envenado=true;
            vida=-15;
        }
        if( jugadaCPU == fallar){
            console.log("Ha Fallado el Jugador");
        }

        estadoJugador();
        
    }
    

}




