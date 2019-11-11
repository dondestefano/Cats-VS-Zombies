//Create a map
var mapForest = [];

//Randomize the values in each area of the map
function createMap() {

    for (y = 0; y < 7; y++) {

        var xPos = [];

            for (var x = 0; x < 7; x++) {

            var location = parseInt(Math.floor(Math.random() * 100 + 1));

            xPos.push(location)

            }

        mapForest.push(xPos);
       
    }
    

}

function fadeOut()  {
    document.getElementById("event").style.animation= 'fadeout 2s forwards"';
}

//Get the value in the current position of the array
function nextArea() {
    var mapArea = "";
    for (y = 0; y < mapForest.length; y++) {

        for (x = 0; x < mapForest[y].length; x++) {   

            if (y == yPosition && x == xPosition) { 

                //Rules to determine what the are looks like and make sure it stays the same way the entire game
                var currentArea = mapForest[y][x];

                if (currentArea % 2 == 0 && currentArea % 3 == 0) {
                    document.getElementById("screen").style.backgroundImage = 'url(images/areas/12.png)';
                    
                    if (currentArea < 50 && currentArea > 20) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail1.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }

                    else if (currentArea < 50 && currentArea > 40) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea > 50 && currentArea < 65) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail1.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail3.png)';
                    }
                    
                    else if (currentArea > 50 && currentArea < 100) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail2.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }  

                    else if (currentArea === 100) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }

                }

                else if (currentArea % 3 == 0) {
                    document.getElementById("screen").style.backgroundImage = 'url(images/areas/22.png)';

                    if (currentArea < 50 && currentArea > 20) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail1.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }

                    else if (currentArea < 50 && currentArea > 40) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail2.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea > 50 && currentArea < 65) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea > 50 && currentArea < 100) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail2.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }  

                }

                else if (currentArea % 2 == 0) {
                    document.getElementById("screen").style.backgroundImage = 'url(images/areas/42.png)';

                    if (currentArea < 50 && currentArea > 20) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail1.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }

                    else if (currentArea < 70 && currentArea > 60) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }

                    else if (currentArea < 50 && currentArea > 40) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail2.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea > 50 && currentArea < 65) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail3.png)';
                    }
                    
                    else if (currentArea > 50 && currentArea < 100) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail2.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }  
                }

                else {
                    document.getElementById("screen").style.backgroundImage = 'url(images/areas/32.png)';

                    if (currentArea < 50 && currentArea > 20) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail1.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }

                    else if (currentArea < 50 && currentArea > 40) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea > 50 && currentArea < 65) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail1.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea > 50 && currentArea < 100) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail2.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail3.png)';
                    }  

                }
            
            }
        }
    }

}