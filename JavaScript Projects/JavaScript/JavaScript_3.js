function displayType(vehicle) {
    var vehicleType = vehicle.getAttribute("data-vehicle-type");
    alert("The " + vehicleType + " is a " + vehicle.innerHTML + " model!");
}