

//prompt for coordinates
var coordinates = function promptForCoordinates () {
    var xCoor;
    var yCoor;
    xCoor = prompt("X Coordinates: ");
    yCoor = prompt("Y Coordinates: ");
    return [xCoor, yCoor];
}

var coor = coordinates();
var xCoor = coor[0];
var yCoor = coor[1];
alert("Coordinates are as follows: " + xCoor + ", " + yCoor);


var confirm = false;
//prompt for destination

while (!confirm) {
    alert("Please enter your destination coordinates");

    var dCoor = coordinates();
    var destXCoor = dCoor[0];
    var destYCoor = dCoor[1];

    alert("Destination coordinates are as follows: " + destXCoor + ", " + destYCoor);
    var confyes = prompt("If this is correct, please input 1.")
    
    if (confyes == 1) {
        confirm = true;
    } else {
        confirm = false;
    }
}

alert("Thank you for your input");