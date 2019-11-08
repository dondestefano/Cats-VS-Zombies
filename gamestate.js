//Start the game and hide the menu

function startGame()    {
    createMap();
    startingPosition();
    startingPositionZombie();
    startingPositionCat();
    nextArea();
    document.getElementById("game").style.visibility = 'visible';
    document.getElementById("menu").style.animation = 'fadeout 3s forwards';

}