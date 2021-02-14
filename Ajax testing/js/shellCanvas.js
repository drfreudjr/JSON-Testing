/* Javascript Shell */
// 'use strict';
let cl = console.log;
let ele = document.querySelector("canvas")
let context = ele.getContext("2d")

const cl = console.log;

window.onload = function () {   // onload wrapper

var canvas;        // Global canvas object reference
var context;       // Global 2D context reference

// // // Begin dynamic fulls screen canvas code

sizeCanvas()   // create initial canvas
addEventListener("resize", sizeCanvas); // resize canvas and redraw on window size change

function createCanvas () {                
    const canvas = document.createElement("canvas"); 
    canvas.style.position = "absolute"; 
    canvas.style.left     = "0px";      
    canvas.style.top      = "0px";

    document.body.appendChild(canvas);  // Add to document
    return canvas;
}

function sizeCanvas () {                // Create or resize 
    if (canvas === undefined) {         
        canvas = createCanvas();        
        context = canvas.getContext("2d");  
    }
    canvas.width  = innerWidth; 
    canvas.height = innerHeight; 
    drawScreen()     
}






context.fillStyle = 'blue'
context.fillRect(0,0,innerWidth,innerHeight)

r = 0
g = 0
b = 0

function crazyLines () {

    if (r < 255) r+=.05
        cl(r)
    x = Math.round(Math.random()*window.innerWidth)
    y = Math.round(Math.random()*window.innerHeight)
    dx = Math.round(Math.random()*window.innerWidth)
    dy = Math.round(Math.random()*window.innerHeight)


    context.strokeStyle = `rgb(${r},${g},${b})`
    cl(context.strokeStyle)
    context.beginPath()
    context.moveTo(x,y)
    context.lineTo(dx,dy)
    context.stroke()

    requestAnimationFrame(crazyLines)
}

crazyLines()
