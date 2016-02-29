/*
* Object to declare what a box is, its index value is that of the div
* index taken from the html page, you may want to dynamically insert this 
* value into the boxes you will also have to dynamically create. The value
* is the value or number inside the div (what is displayed to the user). 
* The origin is the distance it is away from its original position. 0 by 
* default, it increases by 1 for every box it is away from its origin.
*/
function box(index, value, origin) {
    this.index = index;
    this.value = value;
    this.origin = origin;
}

/*
* You will want to make these dynamically based on the user input.
*/
var box1 = new box(1, 4, 0);
var box2 = new box(2, 3, 0);
var box3 = new box(3, 2, 0);
var box4 = new box(4, 1, 0);
var box5 = new box(5, 0, 0);

var boxArray = [box1, box2, box3, box4, box5];

$(document).ready(function () {
    
});

$("#btnTest").click(function () {
    console.log("START");
    var i = 0;
    beginBubble(i);
})

/*
* Checks the value in the current box, against the next box. If this is
* true, it runs the swap function.
*/
function beginBubble(i) {
    if (i < 4) {
        var valA = boxArray[i].value;
        var valB = boxArray[i + 1].value;

        if (valA > valB) {
            swapIndexes(i);
        }
    } else {
        console.log("END");
    }
}

/*
* Reads the relevant indexes and moves them left and right, based off their origin amount
* It then increases their origin amount if moved right, and decreases their origin amount
* if moved left. If it has a negative number it means it is x amount to the LEFT in the user
* display, if it has a positive number it means it is x amount to the RIGHT in the user
* display.
*
* It then runs it again, after waiting 3s, increasing the value of i before the function 
* is ran.
*/
function swapIndexes(i) {
    $("#index" + (boxArray[i].index)).animate({ left: (54 * (boxArray[i].origin + 1)) + "px" }, 1000);
    boxArray[i].origin++;

    $("#index" + (boxArray[i + 1].index)).animate({ right: (54 * (boxArray[i + 1].origin + 1)) + "px" }, 1000);
    boxArray[i + 1].origin--;

    var temp = boxArray[i];
    boxArray[i] = boxArray[i + 1];
    boxArray[i + 1] = temp;

    setTimeout(function () { beginBubble(++i); }, 1000);
}