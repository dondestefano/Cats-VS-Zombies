var yCatPos = 0;
var xCatPos = 0;


//Place the cat on the map
function startingPositionCat()   {

    yCatPos = 4;
    document.getElementById("yAxisCat").innerHTML = yCatPos;

    xCatPos = 4;
    document.getElementById("xAxisCat").innerHTML = xCatPos;

}

//Move the cat every 5th step
function flee() {

    if (steps % 2 == 0)    {

        //Make a Random decision if the cat is going to move away on the x or the y axis
        var catDecision = Math.floor(Math.random() * 100) + 1;

        // ATTENTION Temporary section to test if the cat moves properly
        document.getElementById("random").innerHTML = catDecision;

        if (catDecision < 50) {

            //Move the cat one step away from the player without stepping out of the x-axis
            if (xCatPos == 7) {

                xCatPos -= 1;
                document.getElementById("xAxisCat").innerHTML = xCatPos;
            }

            else if (xCatPos == 0) {

                xCatPos += 1;
                document.getElementById("xAxisCat").innerHTML = xCatPos;
            }

            else if (xCatPos == xPosition) {

                xCatPos += 1;
                document.getElementById("xAxisCat").innerHTML = xCatPos;
            }

            else if (xCatPos > xPosition + 1) {

                xCatPos += 1;
                document.getElementById("xAxisCat").innerHTML = xCatPos;

            }

            else if (xCatPos < xPosition) {

                var moveCat = yCatPos -= 1;
                document.getElementById("xAxisCat").innerHTML = xCatPos;
    
            }

        }
        
        else if (catDecision > 50)  {

        //Move the cat away from the player without stepping out of the y-axis
            if (yCatPos == 7) {

                yCatPos -= 1;
                document.getElementById("yAxisCat").innerHTML = yCatPos;
            
                }

            else if (yCatPos == 0) {

                yCatPos += 1;
                document.getElementById("yAxisCat").innerHTML = yCatPos;
                }
            
            else if (yCatPos == yPosition) {

                yCatPos += 1;
                document.getElementById("yAxisCat").innerHTML = yCatPos;
                }            

            else if (yCatPos > yPosition + 1) {

                yCatPos += 1;
                document.getElementById("yAxisCat").innerHTML = yCatPos;

                }

            else if (yCatPos < yPosition) {

                yCatPos -= 1;
                document.getElementById("yAxisCat").innerHTML = yCatPos;
    
                }

    }

    }
}

//Show the cat on the map if the cat is <2 steps away

//Cat has been found and the game ends