document.getElementById("education_level").onchange=function(){
    var selecFrield=document.getElementById("education_level");
    var selectedOption=selecFrield.options.selectedIndex;
    var selectedValue=selecFrield.options[selectedOption].innerHTML;
    document.getElementById("optionSelection").innerHTML=selectedValue;
}