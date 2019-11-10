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

//Check if the zombie found you
function checkGameOver(playerMoves) {

    var direction = playerMoves;
    document.getElementById("random").innerHTML = direction;

    if (direction === 1 && xPosition === xZombiePos && yPosition === yZombiePos - 1)  {
        gameOver();
    }

    else if (direction === 2 && xPosition === xZombiePos && yPosition === yZombiePos + 1)  {
        gameOver();
    }

    else if (direction === 4 && yPosition === yZombiePos && xPosition === xZombiePos - 1)  {
        gameOver();
    }
            
    else if (direction === 3 && yPosition === yZombiePos && xPosition === xZombiePos + 1)  {
        gameOver();
    }

    else {
        countSteps();
        hunt();
        flee();
        move(direction);
        nextArea();
        zombieClose();
        catClose();
        checkCatFound()
        checkTooBad()
    }

}

//You and Zombie moved to the same spot
function checkTooBad() {

    if (xPosition === xZombiePos && yPosition === yZombiePos)  {
        gameOver();
    }
}

//Zombie killed you and the game ends
function gameOver() {
    countSteps();
    nextArea();
    zombieClose();
    document.getElementById("controls").style.visibility = 'hidden';
    document.getElementById("zombie").style.visibility = 'visible';
    document.getElementById("event").style.visibility = 'visible';
}

//Check if you found the cat
function checkCatFound() {

    if (xPosition === xCatPos && yPosition === yCatPos)  {
        catFound();
    }
}

//You found a cat
function catFound() {
    document.getElementById("controls").style.visibility = 'hidden';
    document.getElementById("cat").style.visibility = 'visible';
    document.getElementById("event").style.visibility = 'visible';
}