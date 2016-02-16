var variableInputCount = 1;

// INFO: Returns the number of index needed to produce a form for index input
function submitThis(btnClicked) {
    var $form = $(btnClicked).parents('form');

    console.log("executed");
    var dataArray = new Array();

    $.ajax({
        type: "POST",
        url: $form.attr('action'),
        //data: $form.serialize(),
        dataType: 'json',
        data: JSON.stringify(dataArray),
        error: function (xhr, status, error) {
            // TODO; add somethnig it form submission doesn't work out
        },
        success: function (response) {

            for (i = 1; i <= variableInputCount; i++) {
                var fieldIdCount = 'indexValue_' + i;
                dataArray.push(document.getElementById(fieldIdCount).value);
                console.log("executed 2");
            }

            console.log($.parseJSON(data));

            // TODO; submit form here
            // $("#sortForm").submit();
        }
    });
    return false;
}

function AddOneMoreTextBox(btnClicked) {
    variableInputCount += 1;
    var indexValueName = "indexValue_" + variableInputCount;
    var textBox = '<div class="form-group"><div class="col-md-3 control-label">Index no. ' + variableInputCount + ' value</div><div class="col-md-9"><input type="textbox" name="' + indexValueName + '"  id = "' + indexValueName + '" class="form-control"></div></div>'
    $('div#here').append(textBox);
    
}