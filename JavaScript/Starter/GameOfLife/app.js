var gridHeight = 400;
var gridWidth = 400;
var theGrid = createArray(gridWidth);
var mirrorGrid = createArray(gridWidth);
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#FF0000";

fillRandom(); //create the starting state for the grid by filling it with random cells

tick(); //call main loop