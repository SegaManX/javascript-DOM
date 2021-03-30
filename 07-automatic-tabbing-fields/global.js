window.addEventListener("load", function()
{
    var first = document.getElementById('first');
    var second = document.getElementById('second');
    var third = document.getElementById('third');
  
    first.addEventListener("keyup", function() 
    {
      typed_characters = first.value.length;
      max_characters = parseInt(first.getAttribute("maxlength"));
  
      if (typed_characters === max_characters) 
      {
        second.focus();
      }
    });
  
    second.addEventListener("keyup", function() 
    {
      typed_characters = second.value.length;
      max_characters = parseInt(second.getAttribute("maxlength"));
  
      if (typed_characters === max_characters)
      {
        third.focus();
      }
    });
});