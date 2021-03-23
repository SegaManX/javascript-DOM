window.addEventListener("load", function(){
    
    document.getElementById("button").addEventListener("click", function(){
        var x = document.getElementsByClassName("toggle_me");
        for(var i=0; i < x.length; i++)
        {
            if (x[i].style.display == "none") {
                x[i].style.display = "block";
            } else {
                x[i].style.display = "none";
            }
        }
    });
});