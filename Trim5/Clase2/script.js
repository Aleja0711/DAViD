// document.getElementById("mostrar").onclick=function(){
//     var campoSelect=document.getElementById("option");
//     var optionSelect=campoSelect.option.selectIndex;
//     var valorSelect=campoSelect.option[optionSelect].innerHTML;

//     document.getElementById("optionSelection").innerHTML=valorSelect;

// }

//Ejercicio de Radio button
// document.getElementById("mostrar").onclick=function(){
//     var radio = document.getElementsByName("genero");
    
//     for(var a = 0 ; a < radio.length ; a++){
//         if(radio[a].checked){
//             radioSeleccionado=radio[a].value;
            
//         }
//     }
//     document.getElementById("optionSelection").innerHTML=radioSeleccionado;
// }

//Ejercicio De Checkbox
document.getElementById("mostrar").onclick=function(){
    var check = document.getElementsByName("genero");
        
    for(var a = 0 ; a < check.length ; a++){
        if(check[a].checked){
            checkSeleccionado=check[a].value;
            document.getElementById("optionSelection").innerHTML+="<li>"+ check[a].value+"</li>"
                
        }
    }
    
}



