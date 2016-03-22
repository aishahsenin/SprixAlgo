function bubbleBox(index, value, origin) {
    this.index = index;
    this.value = value;
    this.origin = origin;
}

var bubbleBox1 = new bubbleBox(1, 4, 0);
var bubbleBox2 = new bubbleBox(2, 3, 0);
var bubbleBox3 = new bubbleBox(3, 2, 0);
var bubbleBox4 = new bubbleBox(4, 1, 0);
var bubbleBox5 = new bubbleBox(5, 0, 0);

var bubbleBoxArray = [bubbleBox1, bubbleBox2, bubbleBox3, bubbleBox4, bubbleBox5];

$(document).ready(function () {
    
});

$("#btnTest").click(function () {
    console.log("START BUBBLE");
    var i = 0;
    beginBubble(i);
})

function beginBubble(i) {
    if (i < (bubbleBoxArray.length - 1)) {
        var valA = bubbleBoxArray[i].value;
        var valB = bubbleBoxArray[i + 1].value;

        if (valA > valB) {
            swapIndexesBubble(i);
        } else {
            beginBubble(++i);
        }
    } else {
        i = 0;

        if (endCheckBubble() != true) {
            beginBubble(i);
        }
    }
}

function swapIndexesBubble(i) {

    bubbleBoxArray[i].origin++;
    $("#index" + (bubbleBoxArray[i].index)).animate({ left: (54 * (bubbleBoxArray[i].origin)) + "px" }, 1000);

    bubbleBoxArray[i + 1].origin--;
    $("#index" + (bubbleBoxArray[i + 1].index)).animate({ left: (54 * (bubbleBoxArray[i + 1].origin)) + "px" }, 1000);

    var temp = bubbleBoxArray[i];
    bubbleBoxArray[i] = bubbleBoxArray[i + 1];
    bubbleBoxArray[i + 1] = temp;

    setTimeout(function () { beginBubble(++i); }, 1000);
}

function endCheckBubble() {
    for (j = 0; j < (bubbleBoxArray.length - 2) ; j++) {
        if (bubbleBoxArray[j].value > bubbleBoxArray[j + 1].value) {
            return false;
        }
    }
    console.log("END BUBBLE");
    return true;
}