   
   //function to show cat image when button is pressed
function show() {
   let img = document.getElementById("image");
    img.src = "images/tobi3.jpg"
    document.getElementById("tobi")
        .style.display = "none";
}

function changeText() {
    document.getElementById('text').innerHTML
        = 'Domesticated Short-haired cats are Shorted-haired!';
}