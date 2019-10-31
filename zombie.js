//Place the zombie on the map
function startingPositionZombie()   {

    document.getElementById("xAxisZombie").innerHTML = "1";
    document.getElementById("yAxisZombie").innerHTML = "1";

}

//Move the zombie towards player
function hunt() {

    //Get the zombies position
    var xZombiePos = parseInt(document.getElementById("xAxisZombie").innerHTML);
    var yZombiePos = parseInt(document.getElementById("yAxisZombie").innerHTML);

    //Get the players position
    var xPlayerPos = parseInt(document.getElementById("xAxis").innerHTML);
    var yPlayerPos = parseInt(document.getElementById("yAxis").innerHTML);

    //See how many steps the player has taken
    var playerSteps = parseInt(document.getElementById("numberOfSteps").innerHTML);


    //Do nothing every fourth step
    if (playerSteps % 4 == 0)    {
        document.getElementById("xAxisZombie").innerHTML = xZombiePos;
        document.getElementById("yAxisZombie").innerHTML = yZombiePos;

    }

    //Make the Zombie match the x-axis before trying to match the players y-axis
    else if (xZombiePos !== xPlayerPos)   {

        if (xZombiePos < xPlayerPos) {
        var moveZombie = xZombiePos += 1;
        document.getElementById("xAxisZombie").innerHTML = moveZombie;
        }

        else if (xZombiePos > xPlayerPos) {
        var moveZombie = xZombiePos -= 1;
        document.getElementById("xAxisZombie").innerHTML = moveZombie;
        }
    }

    //If the x-axis is matched start matching y-Axis.
    else if (xZombiePos == xPlayerPos && yZombiePos !== yPlayerPos)   {

        if (yZombiePos < yPlayerPos) {
        var moveZombie = yZombiePos += 1;
        document.getElementById("yAxisZombie").innerHTML = moveZombie;
        }

        else if (yZombiePos > yPlayerPos) {
        var moveZombie = yZombiePos -= 1;
        document.getElementById("yAxisZombie").innerHTML = moveZombie;
        }
    }
    

}

//Show the Zombie on the map if it is <2 steps away

//Zombie killed you and the game ends