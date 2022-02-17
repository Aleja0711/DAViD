//Ejercicio 1
function convertOF(celsius){
    let fahrenheit=(celsius*1.8)+32;
    console.log(fahrenheit+"°F");
} 



//Ejercicio 2
function reverseString(str){
    console.log(str.split("").reverse().join(""));
}



//Ejercicio 3
function factorialize(num){
    let factor = 1;
    for (let i = 2; i <= num; i++) {
        factor =factor*i;
    }
    console.log(factor);
}



//Ejercicio 4
function findLongestWordLength(str){
    let palabras = str.split(' ');
    let letrasMaxi = 0;

    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i].length > letrasMaxi) {
        letrasMaxi = palabras[i].length;
        }
    }
    console.log(letrasMaxi);
}


//Ejercicio 5
function largestOfFour(arr){
    let final = [];
    for (let i = 0; i < arr.length; i++) {
        let numMaxi = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > numMaxi) {
                numMaxi = arr[i][j];
            }
        }
        final[i] = numMaxi;
    }
  console.log(final);   
}


//Ejercicio 6
function confirmEnding(str, target) {
    console.log(str.slice(-target.length) === target); 
}


//Ejercicio 7
function repeatStringNumTimes(str, num) {
    let contador = "";

    for (let i = 0; i < num; i++) {
        contador += str;
    }

    console.log(contador);

}


//Ejercicio 8
function truncateString(str, num) {
    if (str.length > num){
        console.log(str.slice(0,num)+"...");
    }else{
        console.log(str) ;
    }
}
 
