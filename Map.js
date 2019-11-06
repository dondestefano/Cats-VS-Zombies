//Create a map of with an are of 7x7
var mapForest = [
    [1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0]
];

function nextArea() {
    var mapArea = "";
    for (y = 0; y < mapForest.length; y++) {

        for (x = 0; x < mapForest[y].length; x++) {   

            if (y == yPosition && x == xPosition) { 
                
                mapArea = "images/" + yPosition + xPosition + ".jpg"

                document.getElementById("background").src = mapArea;
            
            }
        }
    }

}