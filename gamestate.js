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

//Zombie killed you and the game ends