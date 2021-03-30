window.addEventListener("load", function(){
    
    document.getElementById("toggle_button").addEventListener("click", function(){
        var toggle_elements = document.querySelectorAll(".second_five li");
        
        for(i = 0; i < toggle_elements.length; i++)
        {
        if (toggle_elements[i].style.display === "none")
        {
            toggle_elements[i].style.display = "block";
        } else {
            toggle_elements[i].style.display = "none";
        }
    }
    });
});