var variableInputCount = 2;

// INFO: Returns the number of index needed to produce a form for index input
function submitThis(btnClicked) {
    var $form = $(btnClicked).parents('form');

    $.ajax({
        type: "POST",
        url: $form.attr('action'),
        data: $form.serialize(),
        error: function (xhr, status, error) {
        },
        success: function (response) {
            var limit = document.getElementById('indexValue_1').value;
            //var limit = document.getElementById("indexValue_2").value;
            //var limit = document.getElementById("indexValue_3").value;
            //var limit = document.getElementById("indexValue_4").value;
            console.log(limit);
            //console.log("indexValue_2");
            //console.log("indexValue_3");
            //console.log("indexValue_4");
        }
    });
    return false;
}

function AddOneMoreTextBox(btnClicked) {
    var indexValueName = "indexValue_" + variableInputCount;
    var textBox = '<div class="form-group"><div class="col-md-3 control-label">Index no. ' + variableInputCount + ' value</div><div class="col-md-9"><input type="textbox" name="' + indexValueName + '" class="form-control"></div></div>'
    $('div#here').append(textBox);
    variableInputCount += 1;
}

//$(document).ready(function () {

//    $("a.submitForm").click(function () {


//        $("form").submit();

//    });

//});


//$(document).ready(function() {
//    $(form)
//        .formValidation({
//           // ... options ...
//        })
//        .on('success.form.fv', function(e) {
//            // Prevent form submission
//            e.preventDefault();

//            var $form = $(e.target),
//                fv    = $form.data('formValidation');

//            // Use Ajax to submit form data
//            $.ajax({
//                url: $form.attr('action'),
//                type: 'POST',
//                data: $form.serialize(),
//                success: function(result) {
//                    // ... Process the result ...
//                }
//            });
//        });
//});