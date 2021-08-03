var square = document.querySelectorAll(".square");
var showAll=document.querySelector("#showAll");
var hideAll=document.querySelector("#hideAll")

//Basic Step 1---------------------------------------
showAll.addEventListener("click", function (){
    square.forEach(function(element){
        element.style.display = "block";
    });
})

hideAll.addEventListener("click", function (){
    square.forEach(function(element) {
        element.style.display = "none";
    });
})
//-------------------------------------------------

//Basic Step 2---------------------------------------
var filter = document.querySelector("#filter");

filter.addEventListener("keyup", function(){
    var colorName = filter.value;

    square.forEach(function(element) {
        if(element.classList.contains(colorName))
        {
            element.style.display = "block";
        }
        else{
            element.style.display="none";
        }
    });
})

//-------------------------------------------------

//Advanced Step 1---------------------------------------
square.forEach(function(element){
    element.addEventListener("mouseover", function(){
        element.style.height = "200px";
        element.style.width = "250px"; 
    });
    
    element.addEventListener("mouseout", function(){
        element.style.height = "180px";
        element.style.width = "230px"; 
    });
})
//-------------------------------------------------