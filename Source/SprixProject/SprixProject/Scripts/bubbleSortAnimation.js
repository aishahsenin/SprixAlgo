
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


// TEST SECTION
function loopThrough() {
    // loop through indexes
    var noOfTotalIndex = document.getElementById('hidNoOfTotalIndex').getAttribute('value');

    for (i = 0; i < 3; i++) {

        console.log("0 - i = " + i);

        if (i != (3 - 1)) {

            var valA = document.getElementById('index' + (i + 1)).innerHTML;
            var valB = document.getElementById('index' + (i + 2)).innerHTML;

            console.log("1 - comparing ValA and ValB " + valA + " " + valB);

            if (valA > valB) {

                console.log("2 (triggered by if) - swapping ValA and ValB... ");

                var a = i + 1;
                var b = i + 2;

                // swap
                swap(a, b);

            }
        }
    }
}

function swap(a, b) {
    
    console.log("3 - swapping these vals a = " + a + " b = " + b);

    var elem1 = document.getElementById("index" + a); // if this becomes dynamic, the animation works all at once
    var elem2 = document.getElementById("index" + b);
    var pos1 = 0;
    var pos2 = 0;

    console.log("4 - ..:: FRAME RUNNING ::..");
    var keepRunning = setInterval(frame, 5);

    function frame() {
        if (pos1 == -55) {
            clearInterval(keepRunning);
            console.log("5 - ====== FRAME STOPPED ======"); // NOTE: frame needs to stop before proceeding!!!!
            sleep(2000);
            console.log("6 - Sleeping ... ");
        }
        else {
            pos1--;
            pos2--;
            elem1.style.bottom = pos1 + 'px';
            elem2.style.bottom = pos2 + 'px';
            //console.log("pos1 = " + pos1);
            //console.log("pos2 = " + pos2);  
        }
    }

}