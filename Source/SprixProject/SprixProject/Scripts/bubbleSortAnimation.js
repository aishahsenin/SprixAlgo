
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

        if (i != (noOfTotalIndex - 1)) {
            var valA = document.getElementById('index' + (i + 1)).innerHTML;
            var valB = document.getElementById('index' + (i + 2)).innerHTML;

            if (valA > valB) {

                // TODO; add the animation feature here
                // ERROR; doesn't work
                //var A = document.getElementById('index' + (i + 1));
                //A.setAttribute("animation-name", "index1animation");
                //A.setAttribute("animation-duration", "4s");

                $("#index" + (i + 1)).css("animation-name", "index1animation");
                $("#index" + (i + 1)).css("animation-duration", "4s");

                $("#index" + (i + 2)).css("animation-name", "index2animation");
                $("#index" + (i + 2)).css("animation-duration", "4s");


                //var B = document.getElementById('index' + (i + 2));
                //A.setAttribute("animation-name", "index2animation");
                //A.setAttribute("animation-duration", "4s");

                console.log("swap!");
            }
        }

    }

}

//$(document).ready(function () {
//    $("button").click(function () {
//        $("index1").addClass("blue");
//        $("index2").addClass("blue");



//        $("div").addClass("important");
//    });
//});