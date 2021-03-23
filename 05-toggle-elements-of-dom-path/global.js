window.addEventListener("load", function(){
    
    document.getElementById("toggle_button").addEventListener("click", function(){
        var x = document.querySelectorAll(".second_five li");
        
        for(i = 0; i < x.length; i++)
        {
        if (x[i].style.display === "none") {
            x[i].style.display = "block";
        } else {
            x[i].style.display = "none";
        }
    }
    });
});