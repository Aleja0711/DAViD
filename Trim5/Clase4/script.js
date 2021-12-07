var canvas;
var contexto;
var FPS=30;
//TAMAÑO DE LOS CUADROS
var anchoFila = 50;
var AltoFila = 50;
//COLOR DE LOS CUADROS
var cesped="#338f0b"; //0
var agua="#00b0c7"; //1
var tierra="#8a5300"; //2
var Fin="#a67a00"; //3
var Puente="#734600"; //4
var Llave="#ffff00"; //5
var veneno =[];
var antorchaImagen = [];
//PERSONAJE
var protagonista;
//MAPA
var diseño;


//Imagen Escaleras(1) Agua(0) Tierra(2) Llave(3)

var escenario = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,2,0,0,0,0,0,0,0,2,0,2,2,0],
    [0,2,2,2,2,2,2,0,0,2,2,0,2,0,0],
    [0,2,0,2,0,0,2,0,0,2,0,0,2,2,0],
    [0,0,0,2,0,2,2,2,2,2,0,0,2,0,0],
    [0,2,0,2,0,2,0,0,0,0,0,2,2,2,0],
    [0,2,2,2,0,2,0,0,0,0,0,0,0,2,0],
    [0,0,2,0,0,2,2,2,2,0,0,0,2,2,0],
    [0,0,2,2,2,2,0,0,2,2,2,2,2,0,0],
    [0,0,2,0,0,2,0,0,2,0,0,2,0,0,0],
    [0,0,2,2,0,2,2,2,2,0,0,2,0,0,0],
    [0,0,0,2,0,0,0,0,0,0,0,2,0,0,0],
    [0,0,0,2,2,2,2,2,2,0,0,2,0,3,0],
    [0,2,2,2,0,0,0,0,2,2,2,2,2,2,0],
    [0,2,0,0,0,0,0,0,0,0,0,0,0,2,0],
    [0,2,0,0,0,2,2,2,0,2,2,2,2,2,0],
    [0,2,2,2,2,2,0,2,2,2,0,2,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
]

function DibujarEscenario(){
    for (let y = 0 ; y < escenario.length ; y++){
        for (let x= 0 ; x < escenario[0].length ; x++){
            var title = escenario[y][x];
            contexto.drawImage(diseño,title*32,0,32,32,anchoFila*x,anchoFila*y,anchoFila,AltoFila);

        //     if (escenario[y][x]==1)
        //         color=agua;
        //     if (escenario[y][x]==0)
        //         color=cesped;
        //     if (escenario[y][x]==2)
        //         color=tierra;
        //     if (escenario[y][x]==3)
        //         color=Fin;
        //     if (escenario[y][x]==4)
        //         color=Puente;
        //     if (escenario[y][x]==5)
        //         color=Llave;
        //     if (escenario[y][x]==7)
        //         color=veneno;

        //     contexto.fillStyle = color;
        //     contexto.fillRect(x*anchoFila,y*AltoFila,anchoFila,AltoFila);
            
        }
    }
}



var antorcha=function (x,y) {
    this.x=x;
    this.y=y;
    this.retraso=1;
    this.fotograma=0;
    this.contador=0;
    this.cambiofotograma=function () {
        if (this.fotograma < 3) {
            this.fotograma++;
        }else{
            this.fotograma=0;
        }
    }
    this.Dibujar=function () {
        if (this.contador < this.retraso) {
            this.contador++;
        }else{
            this.cambiofotograma();
            this.contador=0;
        }
        contexto.drawImage(diseño,this.fotograma*32,64,32,32,anchoFila*x,anchoFila*y,anchoFila,AltoFila);
    }
}


//CLASE ENEMIGO
var malo =function(x,y){
    this.x=x;
    this.y=y;
    this.retraso=1;
    this.fotograma=50;


    this.Dibujar=function(){
        contexto.drawImage(diseño,0,32,32,32,this.x*anchoFila,this.y*AltoFila,anchoFila,AltoFila);
    }

    this.direccion = Math.floor(Math.random()*4);

    this.compruebaColision=function (x,y){
        var colisiona=false;
        if (escenario[y][x] == 0){
            colisiona=true;
        }
        return colisiona;
    }

    this.mueve=function(){
        protagonista.colisionEnemigo(this.x,this.y);

        if (this.fotograma < this.retraso) {
            this.fotograma++;
        }else{
            this.fotograma=0;
            // Arriba
            if (this.direccion==0) {
                if (this.compruebaColision(this.x,this.y-1) ==false) {
                    this.y--;
                }else{
                    this.direccion = Math.floor(Math.random()*4);
                }
            }
            // Abajo
            if (this.direccion==1) {
                if (this.compruebaColision(this.x,this.y+1) ==false) {
                    this.y++;
                }else{
                    this.direccion = Math.floor(Math.random()*4);
                }
            }
            // Izquierda
            if (this.direccion==2) {
                if (this.compruebaColision(this.x-1,this.y) == false) {
                    this.x--;
                }else{
                    this.direccion = Math.floor(Math.random()*4);
                }
            }
            // Derecha
            if (this.direccion==3) {
                if (this.compruebaColision(this.x+1,this.y) == false) {
                    this.x++;
                }else{
                    this.direccion = Math.floor(Math.random()*4);
                }
            }
            
            
        }
        
        
    }
}


//PROTAGONISTA
var jugador = function(){
    this.x=2;
    this.y=1;
    this.color="#6b0073";
    this.Llave=false;
    this.puerta=false;

    this.colisionEnemigo=function (x,y){
        if (this.x==x && this.y==y) {
            this.Muerto();
        }
    }

    this.Muerto=function () {
        console.log("Has Perido");
        this.x=1;
        this.y=0;
        this.Llave=false;
        escenario[12][13]=3;
    }

    this.Dibujar=function(){
        //contexto.fillStyle = this.color;
        // contexto.fillRect(this.x*anchoFila,this.y*AltoFila,anchoFila,AltoFila)
        contexto.drawImage(diseño,32,32,32,32,this.x*anchoFila,this.y*AltoFila,anchoFila,AltoFila);
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

    diseño=new Image();
    diseño.src="image.png";
    
    //Creamos protagonista
    protagonista = new jugador();

    //Creamos Antorcha 
    
    antorchaImagen.push(new antorcha(0,17));
    antorchaImagen.push(new antorcha(1,17));
    antorchaImagen.push(new antorcha(2,17));
    antorchaImagen.push(new antorcha(3,17));

    //Creamos Veneno
    veneno.push(new malo(1,13));
    veneno.push(new malo(11,11));

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
    
    
    for (let index = 0; index < veneno.length; index++) {
        veneno[index].mueve();
        veneno[index].Dibujar();
    }

    for (let i = 0; i < antorchaImagen.length; i++) {
        
        antorchaImagen[i].Dibujar();
    }

}

