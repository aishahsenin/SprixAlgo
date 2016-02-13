// INFO: Returns the number of index needed to produce a form for index input
function GetNoOfIndexVal(btnClicked) {
    var $form = $(btnClicked).parents('form');

    $.ajax({
        type: "POST",
        url: $form.attr('action'),
        data: $form.serialize(),
        error: function (xhr, status, error) {
        },
        success: function (response) {
            var limit = document.getElementById("NoOfIndexVal").value;
            for (i = 0; i < limit; i++) {
                var indexValueName = "indexValue_" + i;
                //var textBox = '&nbsp;&nbsp;<input type="textbox" name="' + indexValueName + '" />';
                var textBox = '@Html.TextBoxFor(m => m.form.IndexValue, htmlAttributes: new { id = "' + indexValueName + '", @class = "form-control" })';

                

                $('div#indexValues').append(textBox);
            }
            //document.getElementById("NoOfIndexVal").innerHTML = s;
        }
    });
    return false;
}