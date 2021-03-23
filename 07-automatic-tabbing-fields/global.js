window.addEventListener("load", function(){

    var x = document.getElementById('first');
    var y = document.getElementById('second');
    var z = document.getElementById('third');
  
    x.addEventListener("keyup", function() {
      typed_characters = x.value.length;
      max_characters = parseInt(x.getAttribute("maxlength"));
  
      if (typed_characters === max_characters) {
        y.focus();
      }
    });
  
    y.addEventListener("keyup", function() {
      typed_characters = y.value.length;
      max_characters = parseInt(y.getAttribute("maxlength"));
  
      if (typed_characters === max_characters) {
        z.focus();
      }
    });
  
  });