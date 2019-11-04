//Place the cat on the map
function startingPositionCat()   {

    document.getElementById("xAxisCat").innerHTML = "6";
    document.getElementById("yAxisCat").innerHTML = "6";

}

//Move the cat every 2nd step
function flee() {

        //Get the cat's position
        var xCatPos = parseInt(document.getElementById("xAxisCat").innerHTML);
        var yCatPos = parseInt(document.getElementById("yAxisCat").innerHTML);
    
        //Get the player's position
        var xPlayerPos = parseInt(document.getElementById("xAxis").innerHTML);
        var yPlayerPos = parseInt(document.getElementById("yAxis").innerHTML);
    
        //See how many steps the player has taken
        var playerSteps = parseInt(document.getElementById("numberOfSteps").innerHTML);

    if (playerSteps % 2 == 0)    {

        //Make a Random decision if the cat is going to move away on the x or the y axis
        var catDecision = Math.floor(Math.random() * 100) + 1;;

        document.getElementById("random").innerHTML = catDecision;

        if (catDecision < 50) {

        //Move the cat one step away from the player without stepping out of the x-axis
            if (xCatPos == 7) {

                var moveCat = xCatPos -= 1;
                document.getElementById("xAxisCat").innerHTML = moveCat;
            }

            else if (xCatPos == 0) {

                var moveCat = xCatPos += 1;
                document.getElementById("xAxisCat").innerHTML = moveCat;
            }

            else if (xCatPos > xPlayerPos && xCatPos < 7 && xCatPos > 0) {

                var moveCat = xCatPos += 1;
                document.getElementById("xAxisCat").innerHTML = moveCat;

                }

            else if (xCatPos < xPlayerPos && xCatPos < 7 && xCatPos > 0) {

                var moveCat = yCatPos -= 1;
                document.getElementById("xAxisCat").innerHTML = moveCat;
    
                }

        }
        
        else if (catDecision > 50)  {

        //Move the cat away from the player without stepping out of the y-axis
            if (yCatPos == 7) {

                var moveCat = yCatPos -= 1;
                document.getElementById("yAxisCat").innerHTML = moveCat;
            
                }

            else if (yCatPos == 0) {

                var moveCat = yCatPos += 1;
                document.getElementById("yAxisCat").innerHTML = moveCat;
                }

            else if (yCatPos > yPlayerPos && yCatPos < 7 && yCatPos > 0) {

                var moveCat = yCatPos += 1;
                document.getElementById("yAxisCat").innerHTML = moveCat;

                }

            else if (yCatPos < yPlayerPos && yCatPos < 7 && yCatPos > 0) {

                var moveCat = yCatPos -= 1;
                document.getElementById("yAxisCat").innerHTML = moveCat;
    
                }

    }

    }
}

//Show the cat on the map if the cat is <2 steps away

//Cat has been found and the game ends