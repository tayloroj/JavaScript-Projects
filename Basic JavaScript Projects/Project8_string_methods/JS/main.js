//The concat() method concatenates (connects) two or more strings. 
function join_Sentence() {
    var part_1 = "This is how "; //variable for each part of the sentence
    var part_2 = "to Concatenate a ";
    var part_3 = "full sentence using ";
    var part_4 = "the concat() method!";
    var full_sentence = part_1.concat(part_2, part_3, part_4); //callback to the variable to form the sentence
    document.getElementById("concat_Method").innerHTML = full_sentence;
}

//The slice() method is a string method that extracts a section of a string and then returns the extracted section in a new string.
function slice_Method() {
    var Sentence = "Javascript has been a challenging course so far, maybe it will get easier?";
    var Section = Sentence.slice(22,33); //The numbers indicate which characters of the string will be cut out and displayed. 
    document.getElementById("Slice").innerHTML = Section;
}

//Challenge 10, examples of toUpperCase() and search()
//Convert string to upper case using toUpperCase()
function uppercase_Method() {
    var text = document.getElementById("Uppercase").innerHTML;
    document.getElementById("Uppercase").innerHTML = text.toUpperCase();
}
//Return the position os a string when first located
function search_Method() {
    var text = "Return the position of where 'position' is located.";
    document.getElementById("search").innerHTML = text.search("position");
}

//Number methods assist you in working with numbers. There are several types – one is the “toString()” method that returns a number as a string.
function string_Method() {
    var X = 222;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

//The toPrecision() method formats a number to a specified length. 
function precision_Method() {
    var Y = 489324.996842389763018;
    document.getElementById("Precision").innerHTML = Y.toPrecision(16);
}

//Challenge 11, examples of toFixed() and valueOf()
//The toFixed() method converts a number to a string, rounded to a specified number of decimals
function fixed_Method() {
    var num = 3.14159265359;
    var n = num.toFixed(5);
    document.getElementById("fixedNum").innerHTML = n;
}
//The valueOf() method returns the primitive value of a number
function value_Method() {
    var num = 22;
    var n = num.valueOf();
    document.getElementById("valueNum").innerHTML = n;
}