var yZombiePos = 0;
var xZombiePos = 0;

//Place the zombie on the map
function startingPositionZombie()   {

    yZombiePos = 4;
    xZombiePos = 4;
    document.getElementById("xAxisZombie").innerHTML = xZombiePos;
    document.getElementById("yAxisZombie").innerHTML = yZombiePos;

}

//Move the zombie towards player
function hunt() {

    //Do nothing every fourth step
    if (steps % 4 == 0)    {
        document.getElementById("xAxisZombie").innerHTML = xZombiePos;
        document.getElementById("yAxisZombie").innerHTML = yZombiePos;

    }

    //Make the Zombie match the x-axis before trying to match the players y-axis
    else if (xZombiePos !== xPosition)   {

        if (xZombiePos < xPosition) {
        xZombiePos += 1;
        document.getElementById("xAxisZombie").innerHTML = xZombiePos;
        }

        else if (xZombiePos > xPosition) {
        xZombiePos -= 1;
        document.getElementById("xAxisZombie").innerHTML = xZombiePos;
        }
    }

    //If the x-axis is matched start matching y-Axis.
    else if (xZombiePos == xPosition && yZombiePos !== yPosition)   {

        if (yZombiePos < yPosition) {
        yZombiePos += 1;
        document.getElementById("yAxisZombie").innerHTML = yZombiePos;
        }

        else if (yZombiePos > yPosition) {
        yZombiePos -= 1;
        document.getElementById("yAxisZombie").innerHTML = yZombiePos;
        }
    }
    

}

//Show the Zombie on the map if it is <2 steps away

//Zombie killed you and the game ends