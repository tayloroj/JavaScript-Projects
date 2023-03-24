 function Call_Loop() { //Example of a While Loop
  var Digit = "";
  var X = 0; //Initializing the variable
  while (X < 21) { //Setting the conditional statement for the loop
    Digit += "<br>" + X; //adding a line between the numbers
    X += 2; //The number to increment the variable by
  }
  document.getElementById("Loop").innerHTML = Digit;
 }

 //Challenge #13 JavaScript string length property
 var text = "Rock Chalk Jayhawk, Go KU!";
 var length = text.length; //length property returns the length of a string
 document.getElementById("String_length").innerHTML = length;

 // “For Loop” is used to repeat a section of code a number of times. For Loops are used when the number of iterations are known.
 var Equipment = ["Baseballs", "Wood bats", "Leather mitts", "Ball cap", "Bases", "Sunflower seeds", "Big League chew"];
 var Content = "";
 var Y;
 function for_Loop() { //Example of a For Loop
    for (Y = 0; Y < Equipment.length; Y++) { //Setting the conditional statement for the loop
      Content += Equipment[Y] + "<br>";
    }
    document.getElementById("List_of_Equipment").innerHTML = Content;
 }

 //Array is a collection of data, arranged in rows and columns.
 function array_Function () {
  var Baseball_Equipment = []; //Setting the variable to call an index
  Baseball_Equipment[0] = "baseball";
  Baseball_Equipment[1] = "leather mitt";
  Baseball_Equipment[2] = "wood bat";
  Baseball_Equipment[3] = "bases";
  document.getElementById("Array").innerHTML = "The most important piece of baseball equipment is the " + Baseball_Equipment[0] + ".";
 }

 //The const keyword creates a constant whose scope can be either global or local to the block in which it is declared.
 function constant_function() {
  const TV_Set = {type:"QLED", brand:"Samsung", size:"65-inch"}; //Create an object through utilization of the const keyword
  TV_Set.size = "55-inch"; //Properties with values
  TV_Set.brand = "Sony"; //Changed for Assignment 53 was LG
  TV_Set.price = "$699"; //Added a for Assignment 53
  document.getElementById("Constant").innerHTML = "The cost of the " + TV_Set.type + " TV is " + TV_Set.price;
 }

 //The 'let' keyword declares variables that can have block scope.
 function let_variable() {
  var L = 22;
  document.write(L);
  {
    let L = 44;
    document.write("<br>" + L);    
  }
  document.write("<br>" + L);
 document.getElementById("Let").innerHTML = L;
}

//The return statement stops the execution of a function and returns a value.
var r = my_Function(12, 12); // Call a function and save the return value in r:
function my_Function(a, b) {
  return a * b; //Return the product of a and b
}
document.getElementById("return").innerHTML = r;

//An object is a data structure used to store different types of data types.
function object_function () {
  let truck = {
    make: "Ford ",
    model: "Raptor ",
    year: "2020 ",
    color: "black ",
    description : function () {
      return "My favorite truck is a " + this.year + this.color + this.make + this.model; //Return the output of the methods using 'return' and 'this'
    }
  };
  document.getElementById("Truck_Object").innerHTML = truck.description();
}

//The break statement is used to jump out of a loop.
function break_function() {
  let text = "";
  for (let i = 0; i < 25; i++) {
    if (i === 22) { break; } //loop breaks and stops at the value of 22
    text += "I never want to be " + i + " again!" + "<br>";
  }
  document.getElementById("break_Statement").innerHTML = text;
}

//The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.
function continue_function() {
  let text = "";
  for (let i = 0; i < 25; i++) {
    if (i === 22) { continue; } //loop skipping the value of 22
    text += "What number is missing? " + i + "<br>";
  }
  document.getElementById("continue_Statement").innerHTML = text;
}