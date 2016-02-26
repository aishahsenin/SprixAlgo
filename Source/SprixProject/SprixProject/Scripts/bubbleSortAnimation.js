
// function runs when page is loaded
$(document).ready(function () {
    console.log("bubble sort animation");

    var A = document.getElementById('index1');
    A.setAttribute("animation-name", "index1animation");
    A.setAttribute("animation-duration", "4s");

});

function bubbleSort(btnClicked) {

    console.log("ran");

    var noOfTotalIndex = document.getElementById('hidNoOfTotalIndex').getAttribute('value');

    for (i = 0; i < noOfTotalIndex; i++) {

        console.log("i = " + i);

        if (i != (noOfTotalIndex) - 1) {

            var valA = document.getElementById('index' + (i + 1)).innerHTML;
            var valB = document.getElementById('index' + (i + 2)).innerHTML;

            if (valA > valB) {
                var a = i + 1;
                var b = i + 2;
                swap(a, b);
                sleep(3000);

                //setTimeout(swap(a, b), 3000);
            }
        }
    }

}

// the animation of swapping between two squares
function swap(a, b) {

    console.log("a = " + a);
    console.log("b = " + b);

    // add attributes to valA
    $("#index" + a).css("animation-name", "index1animation");
    $("#index" + a).css("animation-duration", "4s");

    // add attributes to valB
    $("#index" + b).css("animation-name", "index2animation");
    $("#index" + b).css("animation-duration", "4s");
    
    console.log("swap ran");
}

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}