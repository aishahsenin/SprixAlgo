var variableInputCount = 2;

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
            var indexValueName = "indexValue_" + i;
            //var textBox = '<div class="form-group"><div class="col-md-2 control-label">Index ' + i + '</div><div id="indexValues"class="col-md-4"><input type="textbox" name="' + indexValueName + '" class="form-control"></div></div>';
            var textBox = '<div class="form-group"><div class="col-md-2 control-label">Index no. ' + count + ' value</div><div class="col-md-4"><div class="input-group"><input type="textbox" name="' + indexValueName + '" class="form-control"><span class="input-group-btn"><button class="btn btn-default" type="button" onclick="GetNoOfIndexVal(this)">Add</button></span></div></div></div>'
            $('div#here').append(textBox);
        }
    });
    return false;
}

function AddOneMoreTextBox(btnClicked) {
    console.log('count = ' + variableInputCount);
    var indexValueName = "indexValue_" + variableInputCount;
    var textBox = '<div class="form-group"><div class="col-md-5 control-label">Index no. ' + variableInputCount + ' value</div><div class="col-md-3"><input type="textbox" name="' + indexValueName + '" class="form-control"></div></div>'
    $('div#here').append(textBox);

    variableInputCount += 1;

}