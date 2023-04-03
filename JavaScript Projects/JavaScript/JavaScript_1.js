function Team_Function() {
    var Team_Output;
    var Teams = document.getElementById("Team_Input").value;
    var Team_String = " are an awesome team!";
    switch(Teams) { //Switch statement is used to evaluate various conditions
        case "New York Yankees": //case creates the various conditions
        Team_Output = "The New York Yankees" + Team_String;
        break;
        case "Boston Red Sox":
        Team_Output = "The Boston Red Sox" + Team_String;
        break;
        case "Chicago Cubs":
        Team_Output = "The Chicago Cubs" + Team_String;
        break;
        case "Kansas City Royals":
        Team_Output = "The Kansas City Royals" + Team_String;
        break;
        case "San Francisco Giants":
        Team_Output = "The San Francisco Giants" + Team_String;
        break;
        case "St. Louis Cardinals":
        Team_Output = "The St. Louis Cardinals" + Team_String;
        break;
        default:
        Team_Output = "Please enter a team exactly as written on the above list.";
    }
    document.getElementById("Choice").innerHTML = Team_Output;    
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("Click"); //Sets the variable to A and uses the class name instead of the 'id'
    A[0].innerHTML = "The text has changed!";
}
//Challenge #16, create a graphic within a canvas
    var c =  document.getElementById("canvasExample");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(200, 100, 80, 0, 2 * Math.PI); //dimensions for a circle
    ctx.stroke();

//Challenge #17, utilize the createLinearGradient() method
    var c = document.getElementById("canvasExample2");
    var ctx = c.getContext("2d");
    
    var grd = ctx.createLinearGradient(0, 0, 400, 0); //syntax is context.createLinearGradient(x0, y0, x1, y1);
    grd.addColorStop(0, "red");
    grd.addColorStop(1, "blue");

    ctx.fillStyle = grd;
    ctx.fillRect(12.5,12.5,375,175);