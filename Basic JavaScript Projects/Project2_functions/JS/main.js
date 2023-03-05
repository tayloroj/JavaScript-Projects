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

var x = addFunction(6, 1, 9); //----Challenge #3, Function to compute the product of p1, p2 and p3 ----//
document.write(x);
document.getElementById("Calculate").innerHTML = x;

function addFunction(p1, p2, p3) { 
    return p1 + p2 + p3;
}
