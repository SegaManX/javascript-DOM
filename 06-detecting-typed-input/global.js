window.addEventListener("load", function(){

    var name = document.getElementById("full_name");
  
    name.addEventListener("keyup", function() {
  
      var greet = document.getElementById("greeting");
  
      greet.innerHTML = ("Hello there, " + name.value + "!");
  
    });
  
  });