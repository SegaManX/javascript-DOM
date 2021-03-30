window.addEventListener("load", function(){

    document.getElementById("button").addEventListener("click", function(){
        var show_elements = document.getElementsByClassName("show_me");
        for (var  i = 0; i < show_elements.length; i++)
        {
            show_elements[i].style.display = "block";
        }
    });

});