window.addEventListener("load", function(){

    document.getElementById("button").addEventListener("click", function(){
        var els = document.getElementsByClassName("show_me");
        for (var  i = 0; i < els.length; i++)
        {
        els[i].style.display = "block";
        }
    });

});