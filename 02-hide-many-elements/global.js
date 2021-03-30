window.addEventListener("load", function(){

    document.getElementById("button").addEventListener("click", function(){
        var hide_elements = document.getElementsByClassName("hide_me");
        for (var  i = 0; i < hide_elements.length; i++)
        {
            hide_elements[i].style.display = "none";
        }
    });
});