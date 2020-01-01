var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var colorArray = [];
for (var green = 0; green <= 255; green++) {
    for (var blue = 0; blue <= green; blue++) {
        colorArray.push('rgb(0,' + green +',  ' + blue + ')');
    }
}

function lineToCenter(posX, posY, color) {
    context.beginPath();
    context.moveTo(canvasWidth/2, canvasHeight/2);
    context.lineTo(posX, posY);
    context.strokeStyle = color;
    context.stroke();
}

function random(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for(i=0; i<500; i++) {
    var randomColorInArray = random(colorArray.length, 0);
    console.log(randomColorInArray);
    lineToCenter(random(canvasWidth, 0), random(canvasHeight, 0), colorArray[randomColorInArray]);
}

