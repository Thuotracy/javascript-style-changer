var paragraph = document.getElementById('paragraph');

// font family
function myFunction(){
    var font = document.getElementById('select').value;

    switch(font){
        case "arial":
          paragraph.style.fontFamily = "arial";
          break;
        case "cambria":
          paragraph.style.fontFamily = "cambria";
          break;
        case "monospace":
          paragraph.style.fontFamily = "monospace";
          break;
        case "georgia":
          paragraph.style.fontFamily = "georgia";
          break;
        case "default":
          paragraph.style.fontFamily = "";
          break;
    }
}

// font size
var slider = document.getElementById('range-slider');
var output = document.getElementById('size');
output.innerHTML = slider.value;

slider.oninput = function(){
    output.innerHTML = this.value;
    var num = this.value;
    var string = num.toString();
    document.getElementById('paragraph').style.fontSize = num + "px";
}