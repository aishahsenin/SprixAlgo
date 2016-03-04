var variableInputCount = 2;

// INFO: Returns the number of index needed to produce a form for index input
function submitThis(btnClicked) {
    var $form = $(btnClicked).parents('form');
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
                console.log("executed sort");
            }
            console.log($.parseJSON(data));

            // TODO; submit form here
            // $("#sortForm").submit();
        }
    });
    return false;
}

function AddOneMoreTextBox(clicked_id) {
    console.log(clicked_id);
    variableInputCount += 1;

    if (clicked_id == "sortButtonAdd") {
        var indexValueName = "indexValue_" + variableInputCount;
        var textBox = '<fieldset class="form-group"><input type="text" class="form-control" id="indexValue_' + indexValueName + '" placeholder="Enter value" /></fieldset>';
        $('div#newFieldsHere').append(textBox);
    }

    else if (clicked_id == "knapsackButtonAdd") {
        var indexValueName = "itemWeight_" + variableInputCount;
        var textBox = '<fieldset class="form-group"><input type="text" class="form-control" id="itemWeight_' + indexValueName + '" placeholder="Enter value" /></fieldset>';
        $('div#newFieldsHere2').append(textBox);
    }

}