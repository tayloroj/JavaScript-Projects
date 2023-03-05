// Function that returns the result of an addition operation to the paragraph element with the id “MathAdd”.  
function addition_Function() {
    var Addition = 6 + 7; 
    document.getElementById("MathAdd").innerHTML = "6 + 7 = " + Addition;
}

// Function that returns the result of an subtraction operation to the paragraph element with the id “MathSub”.
function subtraction_Function() {
    var Subtraction = 8 - 3;
    document.getElementById("MathSub").innerHTML = "8 - 3 = " + Subtraction;
}

// Function that returns the result of an multiplication operation to the paragraph element with the id “MathMult”.
function multiplication_Function() {
    var Multiplication = 3 * 9;
    document.getElementById("MathMult").innerHTML = "3 * 9 = " + Multiplication;
}

// Function that returns the result of an division operation to the paragraph element with the id “MathDiv”.
function division_Function() {
    var Division = 144 / 12;
    document.getElementById("MathDiv").innerHTML = "144 / 12 = " + Division;
}

// Function that returns the result of an multiple operations to the paragraph element with the id “MathMOps”.
function multOps_Function() {
    var various_Math = (2 + 4) * 10 / 4 - 8;
    document.getElementById("MathMOps").innerHTML = "2 plus 4, multiplied by 10, divided by 4 and then subtracted by 8 = " + various_Math;
}

// Function that shows the Modulus Operation. The “Modulus” is the remainder after the dividend is divided by the divisor. The % symbol represents the modulus operator – which could also be called the remainder operator. The result of the operation is returned to the paragraph element with the id “modulus_Operator”.
function modulus_Operator() {
    var modulus_Math = 25 % 6;
    document.getElementById("MathMod").innerHTML = "When you divide 25 by 6 you have a remainder of: " + modulus_Math;
}

// Function that returns the opposite if a number to the paragraph element with the id “MathUnary”.
function negation_Operator() {
    var x = 22;
    document.getElementById("MathUnary").innerHTML = -x;
}

// Function that returns the increment of a number to the paragraph element with the id “MathInc”.
function incrementOperator() {
    var X = 4;
    X++;
    document.getElementById("MathInc").innerHTML = X;
}

// Function that returns the increment of a number to the paragraph element with the id “MathInc”.
function decrementOperator() {
    var Y = 7;
    Y--;
    document.getElementById("MathDec").innerHTML = Y;
}

// Function that returns a random number to the paragraph element with the id “MathRand”.
function randomFunction() {
    let z = Math.random() * 100;
    document.getElementById("MathRand").innerHTML = z;
}
