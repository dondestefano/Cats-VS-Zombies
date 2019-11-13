//Start the game and hide the menu
function startGame()    {
    createMap();
    startingPosition();
    startingPositionZombie();
    startingPositionCat();
    nextArea();
    drawMap()
    zombieClose();
    catClose();
    document.getElementById("game").style.visibility = 'visible';
    document.getElementById("menu").style.animation = 'fadeout 2s forwards';

}

//Reset zombie-position, player-position, cat-position, steps counter, map locations and restart the game
function restart()  {
    document.getElementById("up").style.visibility = 'visible';
    document.getElementById("down").style.visibility = 'visible';
    document.getElementById("left").style.visibility = 'visible';
    document.getElementById("right").style.visibility = 'visible';
    document.getElementById("tryAgain").style.visibility = 'hidden';
    document.getElementById("zombie").style.visibility = 'hidden';
    document.getElementById("event").style.visibility = 'hidden';
    document.getElementById("message").style.visibility = 'hidden';
    steps = 0;
    cats = 0;
    createMap()
    drawMap()
    startingPosition();
    startingPositionZombie();
    startingPositionCat();
    nextArea();
    zombieClose();
    catClose();
}


//Check if the zombie found you - if not move to the next area
function checkGameOver(playerMoves) {

    var direction = playerMoves;

    if (direction == up && xPosition === xZombiePos && yPosition === yZombiePos - 1)  {
        gameOver();
    }

    else if (direction == down && xPosition === xZombiePos && yPosition === yZombiePos + 1)  {
        gameOver();
    }

    else if (direction == right && yPosition === yZombiePos && xPosition === xZombiePos - 1)  {
        gameOver();
    }
            
    else if (direction == left && yPosition === yZombiePos && xPosition === xZombiePos + 1)  {
        gameOver();
    }

    else {
        countSteps();
        hunt();
        flee();
        move(direction);
        nextArea();
        drawMap()
        zombieClose();
        catClose();
        checkCatFound()
        checkTooBad()
    }

}

//End the game if the player and zombie moves to the same spot
function checkTooBad() {

    if (xPosition === xZombiePos && yPosition === yZombiePos)  {
        gameOver();
    }
}

//Zombie found the player and the game ends
function gameOver() {
    //Count the step and transfer player to the next area.
    countSteps();
    nextArea();
    zombieClose();
    drawMap()
    //Hide controls and show the restart option
    document.getElementById("up").style.visibility = 'hidden';
    document.getElementById("down").style.visibility = 'hidden';
    document.getElementById("left").style.visibility = 'hidden';
    document.getElementById("right").style.visibility = 'hidden';
    document.getElementById("tryAgain").style.visibility = 'visible';
    //Show Zombie on screen with a message
    document.getElementById("zombie").style.visibility = 'visible';
    document.getElementById("event").style.visibility = 'visible';
    document.getElementById("message").style.visibility = 'visible';
    document.getElementById("message").style.color = 'red';
    document.getElementById("message").style.fontSize = '40px';
    document.getElementById("message").style.lineHeight = '90px';
    document.getElementById("message").style.gridRowStart = '1';
    document.getElementById("message").innerHTML = "<p>You died...</p>";
    document.getElementById("message").style.fontFamily = 'Yeon Sung, cursive';
}

//Check if you found the cat
function checkCatFound() {

    //If the player and the Zombie lands on the cats position the player still loses
    if (xPosition === xCatPos && yPosition === yCatPos && xPosition === xZombiePos && yPosition === yZombiePos)  {
        gameOver();
    }

    //The player found a cat
    else if (xPosition === xCatPos && yPosition === yCatPos)  {
        catFound();
    }
}

//You found a cat
function catFound() {
    //Hide controls and show the rescue option
    document.getElementById("up").style.visibility = 'hidden';
    document.getElementById("down").style.visibility = 'hidden';
    document.getElementById("left").style.visibility = 'hidden';
    document.getElementById("right").style.visibility = 'hidden';
    document.getElementById("rescueCat").style.visibility = 'visible';
    //Show the cat on screen with a message
    document.getElementById("cat").style.visibility = 'visible';
    document.getElementById("event").style.visibility = 'visible'; 
    document.getElementById("message").style.visibility = 'visible';
    document.getElementById("message").style.color = 'green';
    document.getElementById("message").style.fontSize = '30px';
    document.getElementById("message").style.gridRowStart = '2';
    document.getElementById("message").style.lineHeight = '10px';
    document.getElementById("message").style.justifySelf = 'center';
    document.getElementById("message").style.fontFamily = 'Indie Flower, cursive';
    document.getElementById("message").innerHTML = "<p>You found a cat homie!</p>";
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