var canvas;
var contexto;
var FPS=30;
var imgPersonaje;
var protagonista=function(x,y){
    this.x=x;
    this.y=y;
    this.velocidad=20;

    this.Dibujar=function(){
        contexto.drawImage(imgPersonaje,this.x,this.y,100,100);
    }

    this.Derecha=function(){
        this.x+=this.velocidad;
    }
    this.izquierda=function(){
        this.x-=this.velocidad;
    }
    this.Arriba=function(){
        this.y+=this.velocidad;
    }
    this.Abajo=function(){
        this.y-=this.velocidad;
    }

    this.texto=function(){
        contexto.font="75px Impact";
        contexto.fillStyle= "purple";
        contexto.fillText("x:"+this.x+"     y:"+this.y,50,650);
    }
}


var personaje =function(x,y){
    this.x=x;
    this.y=y;
    this.Derecha=true;
    this.velocidad=0;

    this.Dibujar=function(){
        contexto.fillStyle="purple";
        contexto.fillRect(this.x,this.y,100,100);
    }
    this.mover=function(velocidad){
        
        if (this.Derecha == true){
            if (this.x < 750){
                this.x+=velocidad;
            }
            else {
                this.Derecha=false;
            }
        }else {
            if (this.x > 50){
                this.x-=velocidad;
            }
            else{
                this.Derecha=true;
            }
        }
        
    }
}

function iniciar(){
    canvas=document.getElementById("canvas");
    contexto=canvas.getContext("2d");
    imgPersonaje = new Image();
    imgPersonaje.src="pikachu.png";

    setInterval(function(){
        principal();
    },5000/FPS)
}

function borrarCanvas(){
    canvas.width=900;
}

function principal(){
    borrarCanvas();
    personaje1.Dibujar();
    personaje2.Dibujar();
    personaje3.Dibujar();
    protagonist.Dibujar();
    protagonist.texto();


    personaje1.mover(20);
    personaje2.mover(16);
    personaje3.mover(12);

}

var personaje1 = new personaje(50,50);
var personaje2 = new personaje(50,400);
var personaje3 = new personaje(50,750);
var protagonist= new protagonista(50,200);



document.addEventListener("keydown",function(tecla){
    if (tecla.keyCode == 37){
        protagonist.izquierda();
    }
    if (tecla.keyCode == 38){
        protagonist.Abajo();
    }
    if (tecla.keyCode == 39){
        protagonist.Derecha();
    }
    if (tecla.keyCode == 40){
        protagonist.Arriba();
    }
})
