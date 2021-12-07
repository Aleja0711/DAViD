var check=document.getElementsByName("comida");

for (var a = 0; a < check.length; a++){
    check[a].onchange = function(){
        document.getElementById("optionSelection").innerHTML="";
        for (var b = 0; b < check.length; b++){
            if (check[b].checked){
                document.getElementById("optionSelection").innerHTML+="<li>"+check[b].value+"</li>";
            }
        }
    }
} 
