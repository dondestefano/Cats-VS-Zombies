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
                
                mapArea = "images/areas" + mapForest[y][x] + ".jpg"

                document.getElementById("background").src = mapArea;
            
            }
        }
    }

}