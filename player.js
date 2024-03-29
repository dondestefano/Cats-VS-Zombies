//Global Player-position, steps and found cats
var yPosition = 0;
var xPosition = 0;
var steps = 0;
var cats = 0;

//Randomly place the player on the map
function startingPosition() {

    yPosition = Math.floor(Math.random() * 7);
    xPosition = Math.floor(Math.random() * 7);
    document.getElementById("numberOfSteps").innerHTML = "Steps: " + steps;
    document.getElementById("catsFound").innerHTML = "Cats found: " + cats;

        //Hide the movement button if the player starts at the edge of the map
        if  (yPosition == 0 && xPosition == 0)    {
        document.getElementById("up").style.visibility = 'hidden';
        document.getElementById("left").style.visibility = 'hidden';
        }

        else if  (yPosition == 0 && xPosition == 6)    {
            document.getElementById("up").style.visibility = 'hidden';
            document.getElementById("right").style.visibility = 'hidden';
        }

        else if  (yPosition == 6 && xPosition == 6)    {
            document.getElementById("down").style.visibility = 'hidden';
            document.getElementById("right").style.visibility = 'hidden';
        }

        else if  (yPosition == 6 && xPosition == 0)    {
            document.getElementById("down").style.visibility = 'hidden';
            document.getElementById("left").style.visibility = 'hidden';
        }

        else if  (yPosition == 0)    {
            document.getElementById("up").style.visibility = 'hidden';
        }

        else if  (xPosition == 0)    {
            document.getElementById("left").style.visibility = 'hidden';
        }

        else if  (xPosition == 6)    {
            document.getElementById("right").style.visibility = 'hidden';
        }

        else if  (yPosition == 6)    {
            document.getElementById("down").style.visibility = 'hidden';
        }

}

//Move the player with the move-value determining direction
//If the player has reached the end of the map, hide the button that would have them move outside the map
function move(x)   {

    var moving = x;

    if (moving == down)   {

        if (yPosition == 0) {
            yPosition += 1;
            document.getElementById("up").style.visibility = 'visible';
        }
    
        else if (yPosition < 5) {
            yPosition += 1;
        }
    
        else if (yPosition == 5) {
            yPosition += 1;
            document.getElementById("down").style.visibility = 'hidden';
        }


    }

    else if (moving == up) {

        if (yPosition == 6) {
            yPosition -= 1;
            document.getElementById("down").style.visibility = 'visible';
        }
        
        else if (yPosition > 1) {
            yPosition -= 1;
        }
    
        else if (yPosition == 1) {
            yPosition -= 1;
            document.getElementById("up").style.visibility = 'hidden';
        }
    
    }
    
    else if (moving == left) {

        if (xPosition == 6) {
            xPosition -= 1;
            document.getElementById("right").style.visibility = 'visible';
        }
    
        else if (xPosition > 1) {
            xPosition -= 1;
        }
    
        else if (xPosition == 1) {
            xPosition -= 1;
            document.getElementById("left").style.visibility = 'hidden';
        }

    }

    else if (moving == right) {

        if (xPosition == 0) {
            xPosition += 1;
            document.getElementById("left").style.visibility = 'visible';
        }
    
        else if (xPosition < 5) {
            xPosition += 1;
        }
    
        else if (xPosition == 5) {
            xPosition += 1;
            document.getElementById("right").style.visibility = 'hidden';
        }

    }
}

//Keep track of how many steps the player has made
function countSteps()   {

    steps += 1;
    document.getElementById("numberOfSteps").innerHTML = "Steps: " + steps;
}