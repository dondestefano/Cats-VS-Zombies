//Start the game and hide the menu
function startGame()    {
    createMap();
    startingPosition();
    startingPositionZombie();
    startingPositionCat();
    nextArea();
    zombieClose();
    catClose();
    document.getElementById("game").style.visibility = 'visible';
    document.getElementById("menu").style.animation = 'fadeout 2s forwards';

}

//Reset zombie-position, player-position, cat-position, steps counter, map lcations and restart the game
function restart()  {
    document.getElementById("up").style.visibility = 'visible';
    document.getElementById("down").style.visibility = 'visible';
    document.getElementById("left").style.visibility = 'visible';
    document.getElementById("right").style.visibility = 'visible';
    document.getElementById("tryAgain").style.visibility = 'hidden';
    document.getElementById("zombie").style.visibility = 'hidden';
    document.getElementById("event").style.visibility = 'hidden';
    steps = 0;
    cats = 0;
    createMap();
    startingPosition();
    startingPositionZombie();
    startingPositionCat();
    nextArea();
    zombieClose();
    catClose();
}

//The cat was found and the player continues from the area where he/she found it
function rescue()   {
    cats += 1;
    document.getElementById("catsFound").innerHTML = "Cats found: " + cats;
    startingPositionCat();
    document.getElementById("up").style.visibility = 'visible';
    document.getElementById("down").style.visibility = 'visible';
    document.getElementById("left").style.visibility = 'visible';
    document.getElementById("right").style.visibility = 'visible';
    document.getElementById("rescueCat").style.visibility = 'hidden';
    document.getElementById("cat").style.visibility = 'hidden';
    document.getElementById("event").style.visibility = 'hidden';
    document.getElementById("message").style.visibility = 'hidden';
}

//Check if the zombie found you - if not move to the next area
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

//Zombie found the player and hte game ends but the next area still loads and step still counts
function gameOver() {
    countSteps();
    nextArea();
    zombieClose();
    document.getElementById("up").style.visibility = 'hidden';
    document.getElementById("down").style.visibility = 'hidden';
    document.getElementById("left").style.visibility = 'hidden';
    document.getElementById("right").style.visibility = 'hidden';
    document.getElementById("tryAgain").style.visibility = 'visible';
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
    document.getElementById("up").style.visibility = 'hidden';
    document.getElementById("down").style.visibility = 'hidden';
    document.getElementById("left").style.visibility = 'hidden';
    document.getElementById("right").style.visibility = 'hidden';
    document.getElementById("rescueCat").style.visibility = 'visible';
    document.getElementById("cat").style.visibility = 'visible';
    document.getElementById("event").style.visibility = 'visible'; 
    document.getElementById("yAxis").innerHTML = yPosition;
    document.getElementById("message").style.visibility = 'visible';
    document.getElementById("message").style.color = 'green';
    document.getElementById("message").innerHTML = "<p>You found mittens mofugga!</p>";
}