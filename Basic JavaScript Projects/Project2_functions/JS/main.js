function Button_Function() {
    var click = "Your click turned my writing blue!";
    var display = click.fontcolor("blue");
    document.getElementById("Blue_Text").innerHTML = display; //----The document.getElementById() method returns an Element object that represents an HTML element with an id that matches a specified string.
}

function myFunction() {
    var sentence = "I am learning";
    sentence += " a lot from this book!";
    document.getElementById("Concatenate").innerHTML = sentence;//----method used to Concatenate the variables
}