//Starting position
function startingPosition() {

    document.getElementById("xAxis").innerHTML = "2";
    document.getElementById("yAxis").innerHTML = "2";

}


//Move the player
function moveUp()   {

    var yPosition = parseInt(document.getElementById("yAxis").innerHTML);

    if (yPosition == 0) {
        var move = yPosition += 1;
        document.getElementById("yAxis").innerHTML = move;
        document.getElementById("down").style.visibility = 'visible';
    }

    else if (yPosition < 6) {
        var move = yPosition += 1;
        document.getElementById("yAxis").innerHTML = move;
    }

    else if (yPosition == 6) {
        var move = yPosition += 1;
        document.getElementById("yAxis").innerHTML = move;
        document.getElementById("up").style.visibility = 'hidden';
    }


}

function moveDown()   {

    var yPosition = parseInt(document.getElementById("yAxis").innerHTML);

    if (yPosition == 7) {
        var move = yPosition -= 1;
        document.getElementById("yAxis").innerHTML = move;
        document.getElementById("up").style.visibility = 'visible';
    }
    
    else if (yPosition > 1) {
        var move = yPosition -= 1;
        document.getElementById("yAxis").innerHTML = move;
    }

    else if (yPosition == 1) {
        var move = yPosition -= 1;
        document.getElementById("yAxis").innerHTML = move;
        document.getElementById("down").style.visibility = 'hidden';
    }


}

function moveLeft()   {

    var xPosition = parseInt(document.getElementById("xAxis").innerHTML);

    if (xPosition == 7) {
        var move = xPosition -= 1;
        document.getElementById("xAxis").innerHTML = move;
        document.getElementById("right").style.visibility = 'visible';
    }

    else if (xPosition > 1) {
        var move = xPosition -= 1;
        document.getElementById("xAxis").innerHTML = move;
    }

    else if (xPosition == 1) {
        var move = xPosition -= 1;
        document.getElementById("xAxis").innerHTML = move;
        document.getElementById("left").style.visibility = 'hidden';
    }
   

}

function moveRight()   {

    var xPosition = parseInt(document.getElementById("xAxis").innerHTML);

    if (xPosition == 0) {
        var move = xPosition += 1;
        document.getElementById("xAxis").innerHTML = move;
        document.getElementById("left").style.visibility = 'visible';
    }

    else if (xPosition < 6) {
        var move = xPosition += 1;
        document.getElementById("xAxis").innerHTML = move;
    }

    else if (xPosition == 6) {
        var move = xPosition += 1;
        document.getElementById("xAxis").innerHTML = move;
        document.getElementById("right").style.visibility = 'hidden';
    }


}

//Keep track of how many steps the player has made
function startingSteps()   {
    document.getElementById("numberOfSteps").innerHTML = "0";
}

function countSteps()   {
    var steps = parseInt(document.getElementById("numberOfSteps").innerHTML);
    steps += 1;
    document.getElementById("numberOfSteps").innerHTML = steps;
}