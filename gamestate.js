//Start the game and hide the menu
function startGame()    {
    createMap();
    startingPosition();
    startingPositionZombie();
    startingPositionCat();
    nextArea();
    zombieClose();
    document.getElementById("game").style.visibility = 'visible';
    document.getElementById("menu").style.animation = 'fadeout 2s forwards';

}

//Cat has been found and the game ends

//Check if the zombie found you
function checkGameOver(move) {

    var direction = move;

    if (direction = up && xPosition === xZombiePos && yPosition === yZombiePos + 1)  {
        gameOver();
    }

    else if (direction = down && xPosition === xZombiePos && yPosition === yZombiePos - 1)  {
        gameOver();
    }

    else if (direction = right && yPosition === yZombiePos && xPosition === xZombiePos + 1)  {
        gameOver();
    }
            
    else if (direction = left && yPosition === yZombiePos && xPosition === xZombiePos - 1)  {
        gameOver();
    }

    else {
        countSteps();
        hunt();
        flee();
        moveLeft();
        nextArea();
        zombieClose();
        catClose();
    }

}

//Zombie killed you and the game ends
function gameOver() {
    document.getElementById("controls").style.visibility = 'hidden';
    document.getElementById("zombie").style.visibility = 'visible';
    document.getElementById("event").style.visibility = 'visible';
    countSteps();
    nextArea();

}




