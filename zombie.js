//Global Zombie-position
var yZombiePos = 0;
var xZombiePos = 0;

//Place the zombie on the map
function startingPositionZombie()   {

    yZombiePos = Math.floor(Math.random() * 7);
    xZombiePos = Math.floor(Math.random() * 7);;
}

//Move the zombie towards player
function hunt() {

    //Do nothing every fourth step
    if (steps % 4 == 0)    {
        yZombiePos += 0;
        xZombiePos += 0;
    }

    //Make the Zombie match the x-axis before trying to match the players y-axis
    else if (xZombiePos !== xPosition)   {

        if (xZombiePos < xPosition) {
        xZombiePos += 1;
        }

        else if (xZombiePos > xPosition) {
        xZombiePos -= 1;
        }
    }

    //If the x-axis is matched start matching y-Axis.
    else if (xZombiePos == xPosition && yZombiePos !== yPosition)   {

        if (yZombiePos < yPosition) {
        yZombiePos += 1;
        }

        else if (yZombiePos > yPosition) {
        yZombiePos -= 1;
        }
    }
    

}

//Show the Zombie indicator when the Zombie is 1 step away
function zombieClose()  {
    
    //Show indicator if the zombie is to the left
        if (xPosition === xZombiePos + 1 && yPosition === yZombiePos) {
            document.getElementById("zombieIndicator").style.visibility = 'visible';
            document.getElementById("zombieIndicator").style.gridRowStart = '4';
            document.getElementById("zombieIndicator").style.gridColumnStart = '1';
            document.getElementById("zombieIndicator").src = "images/characters/zombieind_left.png";
        }
    
    //Show indicator if the zombie is to the right
        else if (xPosition === xZombiePos - 1 && yPosition === yZombiePos) {
            document.getElementById("zombieIndicator").style.visibility = 'visible';
            document.getElementById("zombieIndicator").style.gridRowStart = '4';
            document.getElementById("zombieIndicator").style.gridColumnStart = '5';
            document.getElementById("zombieIndicator").src = "images/characters/zombieind_right.png";
        }
    
    //Show indicator if the zombie is ahead
        else if (yPosition === yZombiePos - 1 && xPosition === xZombiePos) {
            document.getElementById("zombieIndicator").style.visibility = 'visible';
            document.getElementById("zombieIndicator").style.gridRowStart = '1';
            document.getElementById("zombieIndicator").style.gridColumnStart = '3';
            document.getElementById("zombieIndicator").src = "images/characters/zombieind_up.png";
        }
    
    //Show indicator if the zombie is behind
        else if (yPosition === yZombiePos + 1 && xPosition === xZombiePos) {
            document.getElementById("zombieIndicator").style.visibility = 'visible';
            document.getElementById("zombieIndicator").style.gridRowStart = '5';
            document.getElementById("zombieIndicator").style.gridColumnStart = '3';
            document.getElementById("zombieIndicator").src = "images/characters/zombieind_down.png";
        }
    
    //Remove the indicator when the Zombie isn't close
        else    {
            document.getElementById("zombieIndicator").style.visibility = 'hidden';
        }
    
    
    }