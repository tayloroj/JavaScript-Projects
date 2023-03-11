document.write(typeof "Word"+"<br><br>"); //This operator gives the data type of a variable. The output “string” would be output by this JavaScript code

document.write(typeof 12+"<br><br>"); //This operator gives the data type of a variable. The output “number” would be output by this JavaScript code

//JavaScript to make the browser display NaN.
function nan_Function() {
    document.getElementById("Challenge6").innerHTML = 0/0;
}

//JavaScript to make the browser display true.
function true_nan_Function() {
    document.getElementById("Challenge6-1").innerHTML = isNaN("This is a string");
}

//JavaScript to make the browser display false.
function false_nan_Function() {
    document.getElementById("Challenge6-2").innerHTML = isNaN("007");
}

//Function to display "infinity" (higher than the maximum floating point number)
function positiveInfinity() {
    var n=(5E325);
    document.getElementById("posIn").innerHTML = n;
}

//Function to display "-infinity"
function negativeInfinity() {
    var n=(-5E325);
    document.getElementById("negIn").innerHTML = n;
}

//Functions to display Boolean logic of true or false
function trueBoo() {
    var bt=(8 > 4);
    document.getElementById("tBoo").innerHTML = bt;
}

function falseBoo() {
    var bf=(8 < 4);
    document.getElementById("fBoo").innerHTML = bf;
}

//The console.log method is used to display data in the console within the browser.
console.log(4 + 4);

//Example of “Type coercion” is when the operands of an operator are different data types (such as “string” and “number” – like: “five” + 5)
document.write("2" + 2+"<br><br>");

//Display “false” in the console using Boolean logic
console.log(8 < 4);

//Examples of how "==" is used to show a comparison. The "==" symbol is an instruction to check whether the data on the left side of the symbol is equal to the data on the right side. The answer to this comparison is an answer of "true" or "false."
document.write(8 == 8);
document.write("<br><br>");
document.write(8 == 3);
document.write("<br><br>");

//Examples using "===" to show comparison by checking whether the data on the left side of the symbol is equal to the data on the right side and that it is the same type of data as that on the right.
//Returns true by ensuring matching data type and value.
X = 12;
Y = 12;
document.write(X === Y);
document.write("<br><br>");
//Returns false by writing a different data type and different value.
A = 5;
B = "6";
document.write(A === B);
document.write("<br><br>");
//Returns false by writing a different data type but the same value for both.
C = 5;
D = "5";
document.write(C === D);
document.write("<br><br>");
//Returns false by writing the same data type but a different value for both.
E = 5;
F = 6;
document.write(E === F);
document.write("<br><br>");

//Examples using Boolean logical operators: AND written: &&, OR written: || to return true or false
//AND Operator true and false examples
document.write(4 > 2 && 7 > 4); //True example
document.write("<br><br>");

document.write(4 > 2 && 2 > 4); //False example
document.write("<br><br>");

//OR Operator true and false examples
document.write(3 > 9 || 5 > 1); //True example
document.write("<br><br>");

document.write(4 > 9 || 2 > 5); //False example
document.write("<br><br>");

//The ! (not) operator checks whether or not something is true. If ___ is false, “true” will be returned.
function not_Function() { //True example
    document.getElementById("Not").innerHTML = !(3 > 7);
}

function not_not_Function() { //False example
    document.getElementById("notNot").innerHTML = !(9 > 7);
}
