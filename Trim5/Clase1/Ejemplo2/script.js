// Ejemplo 1
var x = 0;
while (x < 10){
    console.log(x);
    x++;
    if(x == 5){
        break;
    }
}

// Ejemplo 2
var num= 0;
while (num < 20){
    num++;
    if(num % 2 != 0){
        continue;
    }
    console.log(num);
}