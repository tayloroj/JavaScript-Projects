//Ternary means “made up of three parts.” A ternary operator operates on three values. It can be used to assign a value to a variable based on a condition. This is also referred to as a conditional operator in that it assigns a value to a variable based on a condition.
//Ternary syntax is 'Name_of_variable = (condition) ? Value_1:Value_2'
//Example ternary functions
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are not old enough to vote!":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}

//The below set of function us a 'constructor'. The constructor is a special part of the class that describes the default state of any new instance of the class that gets created. In other words, it gives default values for the properties of the class.
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make; //The “this” keyword indicates the object that is the owner of the code. When used within an object, the value of “this” is the object. When used with a function, the value of “this” is the object that possesses the function.
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red"); //“new” is a type of keyword, which is used to create new objects. In this case and the one below it is 'Vehicle'
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() { //This displays the results of the constructor function within HTML
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year;
}

function TV(Make, Type, Size) {
    this.TV_Make = Make;
    this.TV_Type = Type;
    this.TV_Size = Size;
}
var TV1 = new TV("Sony", "LCD", "55-inch");
var TV2 = new TV("LG", "OLED", "60-inch");
var TV3 = new TV("Samsung", "QLED", "65-inch");
function newFunction() {
    document.getElementById("New_and_This").innerHTML = "TV3 is a " + TV3.TV_Size + " " + TV3.TV_Make + " " + TV3.TV_Type + " flat screen set.";
}

//The below is an example of a Nested function
//A nested function is a function under another function that is connected somehow.
function count_by_2_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 2;
        function Plus_two() {Starting_point += 2;} //This is the nested function of this section of code
        Plus_two();
        return Starting_point;
    }   
}