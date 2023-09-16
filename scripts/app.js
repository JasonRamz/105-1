//event listener button=click event

//vanilla solution -- this is pure javascript
document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("content").textContent = "Hello, From Vanilla Js!";
});
//Jquery solution
$("#btn").click(function() {
    $("#content").text("Hello, From Jquery!");
});

//2nd vanilla solution -- 
// when i click on the button, i want to hide the content
document.getElementById("content").style.display = "none";
document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("content").style.display = "Block";
});

//2nd Jquery solution
$("#content").hide();
$("#btn").click(function() {
    $("#content").show();
});
//change the color of the background of the div element

//vanilla javascript
document.getElementById("colorBtn").addEventListener("click", function() {
    const contentDiv= document.getElementById("content");
    const currentColor = getComputedStyle(contentDiv).background;
if (currentColor === "rgb(255, 0, 0)") {
    contentDiv.style.backgroundColor = "blue";
}else {
    contentDiv.style.backgroundColor = "red";}
});

//Jquery solution
$("#colorBtn").click(function() {
    const currentColor = $("content").css("background-color");
    if (currentColor === "rgb(255, 0, 0)") {
        $("#content").css("background-color", "blue");
    }else {
        $("#content").css("background-color", "red");
    }
});
//dom relationships beetween the elements javascript is a programming language and css and html are not progamming languages
//dom defines the relationships & it helps to  create interactive elements for example html and css
//jquery is a library that have code that is store in the jquery library