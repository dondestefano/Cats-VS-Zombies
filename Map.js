//Create a map
var mapForest = [];

//Randomize the values in each area of the map

function createMap() {

    for (y = 0; y < 7; y++) {

        var xPos = [];

            for (var x = 0; x < 7; x++) {

            var location = parseInt(Math.floor(Math.random() * 100 + 1));

            xPos.push(location)

            }

        mapForest.push(xPos);
       
    }
    

}

function nextArea() {
    var mapArea = "";
    for (y = 0; y < mapForest.length; y++) {

        for (x = 0; x < mapForest[y].length; x++) {   

            if (y == yPosition && x == xPosition) { 

                var currentArea = mapForest[y][x];

                if (currentArea % 2 == 0) {
                    document.getElementById("background").src = "images/areas/12.jpg";
                    document.getElementById("detail").src = "images/areas/22.jpg";
                }

                else if (currentArea % 1 == 0) {
                    document.getElementById("background").src = "images/areas/22.jpg";
                    document.getElementById("anotherDetail").src = "images/areas/12.jpg";
                }
            
            }
        }
    }

}