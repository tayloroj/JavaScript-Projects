//Examples of global and local variables
//Global variables are declared outside of functions
var X = 22;
function Sub_numbers_1() {
    document.write(44 - X + "<br>");
}
function Sub_numbers_2() {
    document.write(88 - X + "<br>");
}
Sub_numbers_1();
Sub_numbers_2();
//Local variables are declared inside of functions
function Multi_numbers() {
    var Y = 16;
    document.write(Y * 2);
}
Multi_numbers();
//Example of a function using the Global variable incorrectly and using console.log to identify the error.
function Add_numbers_1() {
    var Z = 4; //Global variable incorrectly used inside a function instead of outside
    console.log(8 + Z);
}
function Add_numbers_2() {
    console.log(Z + 50);
}
Add_numbers_1();
Add_numbers_2();

//Example of an conditional statement
function get_Hours() {
    if (new Date().getHours() < 10) { //"If statement" if the time is greater than 10 there will be no display. If it is before 10, it will display the added string
        document.getElementById("if_Statement").innerHTML = "It is way to early to be up!";
    }
}

function get_Day() {
    if (new Date().getDay() <= 4) { //"If statement" if the day is less than 4 there will be no display. If it is 4 or after, it will display the added string
        document.getElementById("if_Statement_2").innerHTML = "Finally past hump day!";
    }
}

function Soda_Function() {
    Number = document.getElementById("Number").value;
    if (Number >= 3) {
        Drink = "That is a lot in a day!";
    }
    else { //"Else statement" specifies a block of code that will be executed if the condition is false (opposite of the if statement).
        Drink = "You must be healthy!";
    }
    document.getElementById("How_many_sodas").innerHTML = Drink;
}

//Function to show how Else if statement work. The “else if” statement follows an “if” statement and is executed if the “if” statement is found to be false. 
function Time_function() { 
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

