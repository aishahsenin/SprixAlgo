﻿function box(index, value, x, y) {
    this.index = index;
    this.value = value;
    this.x = x;
    this.y = y;
}

var box1 = new box(1, 4, 0, 0);
var box2 = new box(2, 3, 54, 0);
var box3 = new box(3, 2, 108, 0);
var box4 = new box(4, 1, 162, 0);
var box5 = new box(5, 0, 216, 0);

var boxArray = [box1, box2, box3];
// var boxArray = [box1, box2, box3, box4, box5];

$(document).ready(function () {

});

$("#btnTest").click(function () {
    console.log("START");
//    potatoDown();
    var i = 0;
    beginBubble(i);
})

function beginBubble(i) {
    if (i < (boxArray.length - 1)) {
        var valA = boxArray[i].value;
        var valB = boxArray[i + 1].value;

        if (valA > valB) {
            swapPositions(i);
        } else {
            i = i + 2;
            beginBubble(i);
        }
    } else {
        i = 0;

        if (endCheck() != true) {
            beginBubble(i);
        }
    }
}

function swapIndexes(i) {

    boxArray[i].origin++;
    $("#index" + (boxArray[i].index)).animate({ left: (54 * (boxArray[i].origin)) + "px" }, 1000);

    boxArray[i + 1].origin--;
    $("#index" + (boxArray[i + 1].index)).animate({ left: (54 * (boxArray[i + 1].origin)) + "px" }, 1000);

    var temp = boxArray[i];
    boxArray[i] = boxArray[i + 1];
    boxArray[i + 1] = temp;

    setTimeout(function () { beginBubble(++i); }, 1000);
}

function swapPositions(i) {
    $("#index" + (boxArray[i].index)).animate({ left: "54px" }, 1000);
    $("#index" + (boxArray[i].index)).css('left', (boxArray[i].x + 54));
    $("#index" + (boxArray[i + 1].index)).animate({ left: "-54px" }, 1000);
    $("#index" + (boxArray[i + 1].index)).css('left', (boxArray[i].x - 54));

    var temp = boxArray[i];
    boxArray[i] = boxArray[i + 1];
    boxArray[i + 1] = temp;

    setTimeout(function () { beginBubble(++i); }, 1000);
}




function potatoDown() {
    console.log("BOX1 POS: " + $("#index2").position().left + ", " + $("#index2").position().top);
    $("#index2").css('top', 54);
    console.log("BOX1 POS: " + $("#index2").position().left + ", " + $("#index2").position().top);
}

function shiftDown() {
    for (i = 0; i < boxArray.length ; i++) {
        console.log("BOX" + i + " POS: " + $("#index" + (boxArray[i].index)).position().left + ", " + $("#index" + (boxArray[i].index)).position().top);
        $("#index" + (boxArray[i].index)).animate({ top: "54px" }, 1000);
    }

    console.log("FINISHED SHIFT");

    for (i = 0; i < boxArray.length ; i++) {
        console.log("BOX" + i + " POS: " + $("#index" + (boxArray[i].index)).position().left + ", " + $("#index" + (boxArray[i].index)).position().top);
    }
}

function shiftUp() {
    for (i = 0; i < boxArray.length ; i++) {
        $("#index" + (boxArray[i].index)).animate({ bottom: "54px" }, 1000);
    }
}

function endCheck() {
    for (j = 0; j < (boxArray.length - 2) ; j++) {
        if (boxArray[j].value > boxArray[j + 1].value) {
            return false;
        }
    }
    console.log("END");
    return true;
}