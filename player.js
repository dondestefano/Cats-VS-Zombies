//Global Player-position and steps
var yPosition = 0;
var xPosition = 0;
var steps = 0;

//Starting position
function startingPosition() {

    yPosition = 2;
    xPosition = 2;
    document.getElementById("yAxis").innerHTML = yPosition;
    document.getElementById("xAxis").innerHTML = xPosition;
    document.getElementById("numberOfSteps").innerHTML = "Steps: " + steps;

}

//Move the player
function moveUp()   {

    if (yPosition == 0) {
        yPosition += 1;
        document.getElementById("yAxis").innerHTML = yPosition;
        document.getElementById("down").style.visibility = 'visible';
    }

    else if (yPosition < 5) {
        yPosition += 1;
        document.getElementById("yAxis").innerHTML = yPosition;
    }

    else if (yPosition == 5) {
        yPosition += 1;
        document.getElementById("yAxis").innerHTML = yPosition;
        document.getElementById("up").style.visibility = 'hidden';
    }


}

function moveDown()   {

    if (yPosition == 6) {
        yPosition -= 1;
        document.getElementById("yAxis").innerHTML = yPosition;
        document.getElementById("up").style.visibility = 'visible';
    }
    
    else if (yPosition > 1) {
        yPosition -= 1;
        document.getElementById("yAxis").innerHTML = yPosition;
    }

    else if (yPosition == 1) {
        yPosition -= 1;
        document.getElementById("yAxis").innerHTML = yPosition;
        document.getElementById("down").style.visibility = 'hidden';
    }


}

function moveLeft()   {

    if (xPosition == 6) {
        xPosition -= 1;
        document.getElementById("xAxis").innerHTML = xPosition;
        document.getElementById("right").style.visibility = 'visible';
    }

    else if (xPosition > 1) {
        xPosition -= 1;
        document.getElementById("xAxis").innerHTML = xPosition;
    }

    else if (xPosition == 1) {
        xPosition -= 1;
        document.getElementById("xAxis").innerHTML = xPosition;
        document.getElementById("left").style.visibility = 'hidden';
    }
   

}

function moveRight()   {

    if (xPosition == 0) {
        xPosition += 1;
        document.getElementById("xAxis").innerHTML = xPosition;
        document.getElementById("left").style.visibility = 'visible';
    }

    else if (xPosition < 5) {
        xPosition += 1;
        document.getElementById("xAxis").innerHTML = xPosition;
    }

    else if (xPosition == 5) {
        xPosition += 1;
        document.getElementById("xAxis").innerHTML = xPosition;
        document.getElementById("right").style.visibility = 'hidden';
    }


}

//Keep track of how many steps the player has made

function countSteps()   {

    steps += 1;
    document.getElementById("numberOfSteps").innerHTML = "Steps: " + steps;
}