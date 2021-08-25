
alert("Hola Mundo");

document.addEventListener('DOMContentLoaded', function(){ 
    if (document.getElementById("Button")) {
      document.getElementById("Button").onclick = function(){
          var username = document.getElementById("Input").value;
          if (!username) {
              username = "Usuario Nuevo";
          }
          document.getElementById("Mensaje").innerHTML = "Bienvenido " + username + "!"
      };
  }
  }, false);