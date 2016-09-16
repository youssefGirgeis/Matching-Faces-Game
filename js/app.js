var leftSide;
var rightSide;
var numberOfFaces = 3;
var image;
var lastSmile;
var theBody = document.getElementsByTagName('body')[0];
var score = 0;


function generateFaces(){
    leftSide = document.getElementById('left-div');
    
    for(var i=0; i<numberOfFaces; i++){
        image = document.createElement('img');
        image.setAttribute('src', 'images/smile.png');
        var top = Math.floor((Math.random() * 401));
        var left = Math.floor((Math.random() * 401));
        image.style.top = top + 'px';
        image.style.left = left + 'px';
        leftSide.appendChild(image)
    }
    
   
    var leftSidesImages = leftSide.cloneNode(true);
    leftSidesImages.removeChild(leftSidesImages.lastChild);
    var rightSideImages = leftSidesImages;
    rightSide = document.getElementById('right-div');
    rightSide.appendChild(rightSideImages);
    
    lastSmile = leftSide.lastChild;
    lastSmile.addEventListener('click', nextLevel);
}

function removeFaces(){
    while(leftSide.firstChild){
        leftSide.removeChild(leftSide.firstChild);
    }
    while(rightSide.firstChild){
        rightSide.removeChild(rightSide.firstChild);
    }
}


function nextLevel(event){
    event.stopPropagation();
    score += 2;
    document.getElementsByTagName('span')[0].innerHTML = score;
    numberOfFaces += 2;
    removeFaces();
    generateFaces();
}

function gameOver(){
    alert('Game Over!');
    lastSmile.removeEventListener('click', nextLevel);
    
    theBody.removeEventListener('click', gameOver);
}

theBody.addEventListener('click', gameOver);



