window.addEventListener("load", function(){

    var x = document.getElementById("full_name");
  
    x.addEventListener("keyup", function() {
  
      var y = document.getElementById("greeting");
  
      y.innerHTML = ("Hello there, " + name_field.value + "!");
  
    });
  
  });