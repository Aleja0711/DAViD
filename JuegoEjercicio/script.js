var vida = 100;
//Jugadas del CPU
var atacar = 0;
var quemar = 1;
var envenenar = 2;
var fallar = 3;
//Estados del Jugador
var vivo = true;
var envenado = false;
var quemado = false;
//Objetos 
var pocion = 0;
var revivir = 1; 
var pocionQuemaduras = 2;
var pocionVeneno = 3;

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