var canvas = document.getElementById("canvas");

var ctx = canvas.getContext('2d');

var width = 800;
var height = 550;

canvas.height = height;
canvas.width = width;

ctx.fillStyle = "black";
ctx.fillRect(0, 0, width, height);

var vel = 10;
let i = 0;

var x1 = width / 2;
var y1 = height / 2;

var list1 = ["#9966cc", "#4169e1", "#daa520", "#fff44f", "#90ee90", "#f88379"];
var list2 = ["#6f00ff", "#03BFFF", "#b38b6d", "#808000", "#00ff7f", "#ff00ff"];
var list3 = ["#b284be", "#0047ab", "#e97451", "#9acd32", "#aaf0d1", "#fbceb1"];

var color1 = list1[Math.floor(Math.random() * list1.length)];
var color2 = list2[Math.floor(Math.random() * list2.length)]
var color3 = list3[Math.floor(Math.random() * list3.length)]

function walker1() {
    window.requestAnimationFrame(walker1);
    var directions = ["UP", "DOWN", "LEFT", "RIGHT"];
    var choice = Math.floor(Math.random() * directions.length);
    var a = directions[choice];
    switch (a) {
        case "UP":
            y1 -= vel;
            break;
        case "DOWN":
            y1 += vel;
            break;
        case "LEFT":
            x1 -= vel;
            break;
        case "RIGHT":
            x1 += vel;
            break;
    }
    if (x1 > width) {
        x1 -= vel;
    }
    if (0 > x1) {
        x1 += vel;
    }
    if (y1 > height) {
        y1 -= vel;
    }
    if (0 > y1) {
        y1 += vel;
    }
    ctx.fillStyle = color1;
    ctx.fillRect(x1, y1, 10, 10);
}

var x2 = width / 2;
var y2 = height / 2;
var vel2 = 10;

function walker2() {
    window.requestAnimationFrame(walker2);
    var directions = ["UP", "DOWN", "LEFT", "RIGHT"];
    var choice = Math.floor(Math.random() * directions.length);
    var a = directions[choice];
    switch (a) {
        case "UP":
            y2 -= vel;
            break;
        case "DOWN":
            y2 += vel;
            break;
        case "LEFT":
            x2 -= vel;
            break;
        case "RIGHT":
            x2 += vel;
            break;
    }
    if (x2 > width) {
        x2 -= vel;
    }
    if (0 > x2) {
        x2 += vel;
    }
    if (y2 > height) {
        y2 -= vel;
    }
    if (0 > y2) {
        y2 += vel;
    }
    ctx.fillStyle = color2;
    ctx.fillRect(x2, y2, 10, 10);
}

var x3 = width / 2;
var y3 = height / 2;
var vel2 = 10;

function walker3() {
    window.requestAnimationFrame(walker3);
    var directions = ["UP", "DOWN", "LEFT", "RIGHT"];
    var choice = Math.floor(Math.random() * directions.length);
    var a = directions[choice];
    switch (a) {
        case "UP":
            y3 -= vel;
            break;
        case "DOWN":
            y3 += vel;
            break;
        case "LEFT":
            x3 -= vel;
            break;
        case "RIGHT":
            x3 += vel;
            break;
    }
    if (x3 > width) {
        x3 -= vel;
    }
    if (0 > x3) {
        x3 += vel;
    }
    if (y3 > height) {
        y3 -= vel;
    }
    if (0 > y3) {
        y3 += vel;
    }
    ctx.fillStyle = color3;
    ctx.fillRect(x3, y3, 10, 10);
    console.log(x3 , y3)
}

walker3();
walker2();
walker1();