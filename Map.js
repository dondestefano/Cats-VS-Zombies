//Create a map of with an area of 7x7
var mapForest = [
    [10, 10, 10, 10, 10, 10, 10],
    [12, 12, 22, 12, 10, 12, 00],
    [1, 22, 22, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [1, 2, 1, 1, 1, 1, 0],
    [1, 12, 1, 1, 1, 1, 0]
];

function nextArea() {
    var mapArea = "";
    for (y = 0; y < mapForest.length; y++) {

        for (x = 0; x < mapForest[y].length; x++) {   

            if (y == yPosition && x == xPosition) { 
                
                mapArea = "images/" + mapForest[y][x] + ".jpg" //mapArea = "images/" + mapForest[y][x] + ".jpg"

                document.getElementById("background").src = mapArea;
            
            }
        }
    }

}