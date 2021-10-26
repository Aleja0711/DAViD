//Ejercicio 1

var shipments = 
{
    'standard': {
        'leadTime': 7,
        'fee': 2
    },
    'express': {
        'leadTime': 3,
        'fee': 4.5
    }
};

document.getElementById("shipments").onchange=function(){
    var optionSelect=document.getElementById("shipments").value;

    function sumarDias(fecha, dias){
        fecha.setDate(fecha.getDate() + dias);
        return fecha;
    }

    var dateObj = new Date();

    document.getElementById("order_date").innerHTML = dateObj.toISOString().slice(0,10);

    var day = shipments[optionSelect].leadTime;
    var dateDeliver = sumarDias(dateObj, +day);

    document.getElementById("delivery_date").innerHTML = dateDeliver.toISOString().slice(0,10);

    var spending = shipments[optionSelect].fee;
    document.getElementById("delivery_fee").innerHTML = spending.toFixed(2);
}


//Ejercicio 2
var phones = 
{
    'iphone_se_red': {
        'name': 'iPhone SE 64GB Red',
        'price': 450,
        'currency': 'US$',
        'imageUrl': "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-red-select-2020?wid=940&hei=1112&fmt=png-alpha&.v=1586574260319"
    },
    'iphone_11_black': {
        'name': 'iPhone 11 128GB Black',
        'price': 869,
        'currency': 'EUR',
        'imageUrl': "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=834&hei=1000&fmt=jpeg&qlt=95&.v=1566956144418"
    },
    'iphone_8_plus_silver': {
        'name': 'iPhone 8 Plus 64GB Silver',
        'price': 519,
        'currency': 'US$',
        'imageUrl': "https://ventaspop-images.s3-us-east-2.amazonaws.com/files/products/569/546/iphone8-plus-silver-select-2018.png"
    }
};

document.getElementsByName("product").onchange=function(){
    var selectOption = document.getElementsByName("product").value;
    var celPhone=phones[selectOption];

}


//Ejercicio 3 
if (document.getElementById("start_stop")){
    document.getElementById("start_stop").onclick=function(){
        function formato (numero){
            if (numero < 10){
                return "0" + numero.toString();
            }else{
                return numero.toString();
            }
        }
        var milisegundos = 0;
        var segundos = 0;
        var minutos = 0;
        var horas = 0;
        window.setInterval(function(){
            milisegundos++;
            segundos++;
            minutos++;
            horas++;
            document.getElementById("stopwatch").innerHTML=formato(milisegundos);
            if (segundos >=60){
                document.getElementById("stopwatch").innerHTML=formato(milisegundos=0);
            }
            document.getElementById("stopwatch").innerHTML=formato(segundos);
            if (segundos >=60){
                document.getElementById("stopwatch").innerHTML=formato(segundos=0);
            }
            document.getElementById("stopwatch").innerHTML=formato(minutos);
            if (segundos >=60){
                document.getElementById("stopwatch").innerHTML=formato(minutos=0);
            }
            document.getElementById("stopwatch").innerHTML=formato(horas);
            if (segundos >=60){
                document.getElementById("stopwatch").innerHTML=formato(horas=0);
            }
        },1000)
    };
}else if(document.getElementById("reset")){
    document.getElementById("reset").onclick=function(){
        window.clearImmediate();
    }

}
