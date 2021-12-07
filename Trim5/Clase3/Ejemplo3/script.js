var personaje = function(x,y,nombre){
    this.x=x;
    this.y=y;
    this.name=nombre;

    this.abajo=function(pixeles){
        Touch.y+=pixeles;
    }
    this.saludar=function(){
        console.log("hola Forastero, soy "+this.name)
    }
}
var personaje1 = new personaje (200,100,"Frodo");
var personaje2 = new personaje (120,50,"Sam");