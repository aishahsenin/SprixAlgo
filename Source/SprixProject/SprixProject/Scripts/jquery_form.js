// INFO: Returns the number of index needed to produce a form for index input
function GetNoOfIndexVal(btnClicked) {
    var $form = $(btnClicked).parents('form');

    $.ajax({
        type: "POST",
        url: $form.attr('action'),
        data: $form.serialize(),
        error: function (xhr, status, error) {
            //do something about the error
        },
        success: function (response) {
            console.log(document.getElementById('NoOfIndexVal').value);

        }
    });
    return false;
}