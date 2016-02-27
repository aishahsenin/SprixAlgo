
// function runs when page is loaded
$(document).ready(function () {
    console.log("bubble sort animation");

    var A = document.getElementById('index1');
    A.setAttribute("animation-name", "index1animation");
    A.setAttribute("animation-duration", "4s");

});

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}

$("#btnTest").click(function () {
    var i = 1;
    beginBubble(i);
})

function beginBubble(i) {
    var valA = document.getElementById('index' + i).innerHTML;
    var valB = document.getElementById('index' + (i + 1)).innerHTML;

    if (valA > valB) {

        swapIndexes(i, (i + 1));
    }
}

function swapIndexes(a, b) {

    console.log("swapping index" + a + " and index" + b);

    $("#index" + a).animate({ left: "55px" }, 1000, function () { });
    $("#index" + b).animate({ right: "55px" }, 1000, moveToNextIndex(a));
    //sleep(3000);

}

function moveToNextIndex(i) {
    i++;
    console.log("moving to next");
    beginBubble(i);

}
