//prompt for coordinates
var coordinates = function promptForCoordinates () {
    var xCoor;
    var yCoor;
    xCoor = prompt("X Coordinates: ");
    yCoor = prompt("Y Coordinates: ");
    var lObject = {x:xCoor, y:yCoor};
    return lObject;
}

var coor = coordinates();
alert("Coordinates are as follows: " + coor.x + ", " + coor.y);


var confirm = false;
//prompt for destination

while (!confirm) {
    alert("Please enter your destination coordinates");

    var dCoor = coordinates();

    alert("Destination coordinates are as follows: " + dCoor.x + ", " + dCoor.y);
    var confyes = prompt("If this is correct, please input 1.")
    
    if (confyes == 1) {
        confirm = true;
    } else {
        confirm = false;
    }
}

var locationArray = [];
locationArray.push(dCoor)

alert("Thank you for your input");
