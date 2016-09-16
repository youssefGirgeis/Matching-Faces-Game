var leftSide;
var rightSide;
var numberOfFaces;
var image;


function generateFaces(){
    leftSide = document.getElementById('left-div');
    numberOfFaces = 5;
    
    for(var i=0; i<numberOfFaces; i++){
        image = document.createElement('img');
        image.setAttribute('src', 'images/smile.png');
        var top = Math.floor((Math.random() * 401));
        var left = Math.floor((Math.random() * 401));
        image.style.top = top + 'px';
        image.style.left = left + 'px';
        leftSide.appendChild(image)
    }
}