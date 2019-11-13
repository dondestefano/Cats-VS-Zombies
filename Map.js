//Public map
var mapForest = [];

//Randomize the values in each area of the map
function createMap() {

    //Reset the map on restart
    mapForest = [];

    //Create an area with a different number in each bracket
    for (y = 0; y < 7; y++) {

        var xPos = [];

            for (var x = 0; x < 7; x++) {

            var location = parseInt(Math.floor(Math.random() * 100 + 1));

            xPos.push(location)

            }

        mapForest.push(xPos);
       
    }
    

}

function drawMap() {
    var mapArea = "";
    for (y = 0; y < mapForest.length; y++) {
        for (x = 0; x < mapForest[y].length; x++) {
            if (y === yPosition && x === xPosition) { mapArea += "&#9723; " } // &#9734;
            else {
                mapArea += "&#9724; "
            }
        }
        mapArea += "<br>"
    }
    document.getElementById("map").innerHTML = mapArea;
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
                    
                    if (currentArea < 7 && currentArea >= 0) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail1.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }

                    else if (currentArea >= 7 && currentArea < 14) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail2.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 21 && currentArea < 28) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail3.png)';
                    }
                    
                    else if (currentArea >= 28 && currentArea < 35) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail1.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }  

                    else if (currentArea >= 35 && currentArea < 42) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail2.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }

                    else if (currentArea >= 42 && currentArea < 49) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }  

                    else if (currentArea >= 56 && currentArea < 63) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 63 && currentArea < 70) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 70 && currentArea < 77) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 84 && currentArea < 91) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }

                    else if (currentArea >= 91 && currentArea < 97) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail3.png)';
                    }
                    
                    else if (currentArea >= 97 && currentArea < 100) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }
                    
                    else if (currentArea === 100) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }  

                }

                else if (currentArea % 3 == 0) {
                    document.getElementById("screen").style.backgroundImage = 'url(images/areas/22.png)';
                    if (currentArea < 7 && currentArea >= 0) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail1.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }

                    else if (currentArea >= 7 && currentArea < 14) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail2.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 21 && currentArea < 28) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail3.png)';
                    }
                    
                    else if (currentArea >= 28 && currentArea < 35) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail1.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }  

                    else if (currentArea >= 35 && currentArea < 42) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail2.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }

                    else if (currentArea >= 42 && currentArea < 49) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }  

                    else if (currentArea >= 56 && currentArea < 63) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 63 && currentArea < 70) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 70 && currentArea < 77) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 84 && currentArea < 91) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }

                    else if (currentArea >= 91 && currentArea < 97) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail3.png)';
                    }
                    
                    else if (currentArea >= 97 && currentArea < 100) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }
                    
                    else if (currentArea === 100) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }  
                }

                else if (currentArea % 2 == 0) {
                    document.getElementById("screen").style.backgroundImage = 'url(images/areas/42.png)';

                    if (currentArea < 7 && currentArea >= 0) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail1.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }

                    else if (currentArea >= 7 && currentArea < 14) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail2.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 21 && currentArea < 28) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail3.png)';
                    }
                    
                    else if (currentArea >= 28 && currentArea < 35) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail1.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }  

                    else if (currentArea >= 35 && currentArea < 42) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail2.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }

                    else if (currentArea >= 42 && currentArea < 49) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }  

                    else if (currentArea >= 56 && currentArea < 63) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 63 && currentArea < 70) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 70 && currentArea < 77) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 84 && currentArea < 91) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }

                    else if (currentArea >= 91 && currentArea < 97) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail3.png)';
                    }
                    
                    else if (currentArea >= 97 && currentArea < 100) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }
                    
                    else if (currentArea === 100) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    } 

                }  


                else {
                    document.getElementById("screen").style.backgroundImage = 'url(images/areas/32.png)';

                    if (currentArea < 7 && currentArea >= 0) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail1.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }

                    else if (currentArea >= 7 && currentArea < 14) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail2.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 21 && currentArea < 28) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail3.png)';
                    }
                    
                    else if (currentArea >= 28 && currentArea < 35) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail1.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }  

                    else if (currentArea >= 35 && currentArea < 42) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail2.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }

                    else if (currentArea >= 42 && currentArea < 49) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }  

                    else if (currentArea >= 56 && currentArea < 63) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 63 && currentArea < 70) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 70 && currentArea < 77) {
                        document.getElementById("detail").style.backgroundImage = 'url(images/areas/detail3.png)';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }
                    
                    else if (currentArea >= 84 && currentArea < 91) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail2.png)';
                    }

                    else if (currentArea >= 91 && currentArea < 97) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail3.png)';
                    }
                    
                    else if (currentArea >= 97 && currentArea < 100) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }
                    
                    else if (currentArea === 100) {
                        document.getElementById("detail").style.backgroundImage = 'none';
                        document.getElementById("anotherDetail").style.backgroundImage = 'url(images/areas/anotherdetail1.png)';
                    }  

                }  

            }
            
        }
    }
}

