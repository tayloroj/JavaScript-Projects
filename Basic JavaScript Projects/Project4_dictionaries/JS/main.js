function my_Dictionary() { //Function showing how to create a dictionary using key-value pair collection
    var Vehicle = {
        Make:"Audi", //"Make: is the Key, "Audi" is the value
        Model:"Q2",
        Color:"Black",
        Year:2018,
    };
    delete Vehicle.Make; //Using the written delete operator instead of symbols
    document.getElementById("Dictionary").innerHTML = Vehicle.Make; //Returns "Audi" to the screen after the string is clicked by using the keys vehicle.make
}