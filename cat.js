//Global Cat-position
var yCatPos = 0;
var xCatPos = 0;


//Place the cat on random spot on the map
function startingPositionCat()   {

    yCatPos = Math.floor(Math.random() * 7);
    document.getElementById("yAxisCat").innerHTML = yCatPos;

    xCatPos = Math.floor(Math.random() * 7);
    document.getElementById("xAxisCat").innerHTML = xCatPos;

}

//Move the cat every 2nd step
function flee() {

    if (steps % 2 === 0)    {

        //Make a Random decision if the cat is going to move away on the x or the y axis
        var catDecision = Math.floor(Math.random() * 2 + 1);

        //ATTENTION Temporary section to test if the cat moves properly
        document.getElementById("random").innerHTML = catDecision;

        if (catDecision === 1) {

            //Keep the cat from stepping out of the x-axis.
            if (xCatPos === 6) {

                xCatPos -= 1;
                document.getElementById("xAxisCat").innerHTML = xCatPos;
            }

            else if (xCatPos === 0) {

                xCatPos += 1;
                document.getElementById("xAxisCat").innerHTML = xCatPos;
            }

            else if (xCatPos === xPosition) {

                xCatPos += 1;
                document.getElementById("xAxisCat").innerHTML = xCatPos;
            }

            else if (xCatPos > xPosition) {

                xCatPos += 1;
                document.getElementById("xAxisCat").innerHTML = xCatPos;

            }

            else if (xCatPos < xPosition) {

                xCatPos -= 1;
                document.getElementById("xAxisCat").innerHTML = xCatPos;
    
            }

        }
        
        else if (catDecision === 2)  {

            //Keep the cat from stepping out of the y-axis.
            if (yCatPos === 6) {

                yCatPos -= 1;
                document.getElementById("yAxisCat").innerHTML = yCatPos;
            
                }

            else if (yCatPos === 0) {

                yCatPos += 1;
                document.getElementById("yAxisCat").innerHTML = yCatPos;
                }
            
            else if (yCatPos === yPosition) {

                yCatPos += 1;
                document.getElementById("yAxisCat").innerHTML = yCatPos;
                }            

            else if (yCatPos > yPosition) {

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