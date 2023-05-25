// CITYSCAPE ASGN START CODE

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 300;
cnv.height = 650;

// BLUE BACKGROUND
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, cnv.width, cnv.height);

// DRAW LEFT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(0, 350, 150, 300);
// Middle Section
ctx.fillRect(20, 200, 110, 150);
// Triangle Top
ctx.beginPath();
ctx.moveTo(20, 200);
ctx.lineTo(130, 200);
ctx.lineTo(130, 100);
ctx.fill();

// DRAW RIGHT BUILDING
ctx.fillStyle = "black";
// Building Base
ctx.fillRect(150, 100, 150, 550);
// Medium Top
ctx.fillRect(170, 40, 110, 60);
// Small Top
ctx.fillRect(190, 20, 70, 20);

// WINDOWS
ctx.fillStyle = "white";
ctx.fillRect(40, 200, 10, 10);
ctx.fillRect(60, 200, 10, 10);
ctx.fillRect(80, 200, 10, 10);
ctx.fillRect(100, 200, 10, 10);
ctx.fillRect(40, 220, 10, 10);
ctx.fillRect(60, 220, 10, 10);
ctx.fillRect(80, 220, 10, 10);
ctx.fillRect(100, 220, 10, 10);
ctx.fillRect(40, 240, 10, 10);
ctx.fillRect(60, 240, 10, 10);
ctx.fillRect(80, 240, 10, 10);
ctx.fillRect(100, 240, 10, 10);
ctx.fillRect(40, 260, 10, 10);
ctx.fillRect(60, 260, 10, 10);
ctx.fillRect(80, 260, 10, 10);
ctx.fillRect(100, 260, 10, 10);
ctx.fillRect(40, 280, 10, 10);
ctx.fillRect(60, 280, 10, 10);
ctx.fillRect(80, 280, 10, 10);
ctx.fillRect(100, 280, 10, 10);
ctx.fillRect(40, 300, 10, 10);
ctx.fillRect(60, 300, 10, 10);
ctx.fillRect(80, 300, 10, 10);
ctx.fillRect(100, 300, 10, 10);
ctx.fillRect(25, 380, 100, 20);
ctx.fillRect(25, 420, 100, 20);
ctx.fillRect(25, 460, 100, 20);
ctx.fillRect(25, 500, 100, 20);
ctx.fillRect(25, 540, 100, 20);
ctx.fillRect(25, 580, 100, 20);
ctx.fillRect(170, 125, 15, 500);
ctx.fillRect(195, 125, 15, 500);
ctx.fillRect(220, 125, 15, 500);
ctx.fillRect(245, 125, 15, 500);
ctx.fillRect(270, 125, 15, 500);
