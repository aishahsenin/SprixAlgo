function box(index, value, origin) {
    this.index = index;
    this.value = value;
    this.origin = origin;
}

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

function beginBubble(i) {
    if (i < (boxArray.length - 1)) {
        var valA = boxArray[i].value;
        var valB = boxArray[i + 1].value;

        if (valA > valB) {
            swapIndexes(i);
        } else {
            beginBubble(++i);
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

function endCheck() {
    for (j = 0; j < (boxArray.length - 2) ; j++) {
        if (boxArray[j].value > boxArray[j + 1].value) {
            return false;
        }
    }
    console.log("END");
    return true;
}