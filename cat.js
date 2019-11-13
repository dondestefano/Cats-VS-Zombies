//Global Cat-position
var yCatPos = 0;
var xCatPos = 0;


//Place the cat on random spot on the map
function startingPositionCat()   {

    yCatPos = Math.floor(Math.random() * 7);
    xCatPos = Math.floor(Math.random() * 7);

}

//Move the cat every 2nd step
function flee() {

    if (steps % 2 === 0)    {

        //Make a Random decision if the cat is going to move away on the x or the y axis
        var catDecision = Math.floor(Math.random() * 2 + 1);

        if (catDecision === 1) {

            //Keep the cat from stepping out of the x-axis.
            if (xCatPos === 6) {

                xCatPos -= 1;
            }

            else if (xCatPos === 0) {

                xCatPos += 1;
            }

            else if (xCatPos === xPosition) {

                xCatPos += 1;

            }

            else if (xCatPos > xPosition) {

                xCatPos += 1;

            }

            else if (xCatPos < xPosition) {

                xCatPos -= 1;
    
            }

        }
        
        else if (catDecision === 2)  {

            //Keep the cat from stepping out of the y-axis.
            if (yCatPos === 6) {

                yCatPos -= 1;
            
                }

            else if (yCatPos === 0) {

                yCatPos += 1;
                }
            
            else if (yCatPos === yPosition) {

                yCatPos += 1;

                }            

            else if (yCatPos > yPosition) {

                yCatPos += 1;

                }

            else if (yCatPos < yPosition) {

                yCatPos -= 1;
    
                }

        }

    }
}


function catClose()  {
    
    //Show indicator if the cat is to the left
        if (xPosition === xCatPos + 1 && yPosition === yCatPos) {
            document.getElementById("catIndicator").style.visibility = 'visible';
            document.getElementById("catIndicator").style.gridRowStart = '3';
            document.getElementById("catIndicator").style.gridColumnStart = '1';
            document.getElementById("catIndicator").src = "images/characters/catind_left.png";
        }
    
    //Show indicator if the cat is to the right
        else if (xPosition === xCatPos - 1 && yPosition === yCatPos) {
            document.getElementById("catIndicator").style.visibility = 'visible';
            document.getElementById("catIndicator").style.gridRowStart = '3';
            document.getElementById("catIndicator").style.gridColumnStart = '5';
            document.getElementById("catIndicator").src = "images/characters/catind_right.png";
        }
    
    //Show indicator if the cat is ahead
        else if (yPosition === yCatPos + 1 && xPosition === xCatPos) {
            document.getElementById("catIndicator").style.visibility = 'visible';
            document.getElementById("catIndicator").style.gridRowStart = '1';
            document.getElementById("catIndicator").style.gridColumnStart = '3';
            document.getElementById("catIndicator").src = "images/characters/catind_up.png";
        }
    
    //Show indicator if the cat is behind
        else if (yPosition === yCatPos - 1 && xPosition === xCatPos) {
            document.getElementById("catIndicator").style.visibility = 'visible';
            document.getElementById("catIndicator").style.gridRowStart = '5';
            document.getElementById("catIndicator").style.gridColumnStart = '3';
            document.getElementById("catIndicator").src = "images/characters/catind_down.png";
        }
    
    //Remove the indicator when the cat isn't close
        else    {
            document.getElementById("catIndicator").style.visibility = 'hidden';
        }
    }