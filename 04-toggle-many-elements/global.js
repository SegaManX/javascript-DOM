window.addEventListener("load", function(){
    
    document.getElementById("button").addEventListener("click", function(){
        var toggle_elements = document.getElementsByClassName("toggle_me");
        for(var i = 0; i < toggle_elements.length; i++)
        {
            if (toggle_elements[i].style.display == "none")
            {
                toggle_elements[i].style.display = "block";
            } else {
                toggle_elements[i].style.display = "none";
            }
        }
    });
});