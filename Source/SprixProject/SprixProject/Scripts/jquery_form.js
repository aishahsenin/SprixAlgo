var variableInputCount = 2;

function AddOneMoreTextBox(clicked_id) {
    console.log(clicked_id);
    variableInputCount += 1;

    console.log(clicked_id);
    
    if (clicked_id == "sortButtonAdd") {
        document.getElementById('noOfSortInput').value = variableInputCount;
        var indexValueName = "indexValue_" + variableInputCount;
        var textBox = '<fieldset class="form-group"><input type="text" class="form-control" name="' + indexValueName + '" id="' + indexValueName + '" placeholder="Enter value" /></fieldset>';
        $('div#newFieldsHere').append(textBox);
    }

    else if (clicked_id == "knapsackButtonAdd") {
        document.getElementById('noOfKnapsackInput').value = variableInputCount; 
        var indexValueName = "itemWeight_" + variableInputCount;
        var itemWorth = "itemBenefit_" + variableInputCount;
        var textBox = '<fieldset class="form-group"><label for="itemWeight">Item ' + variableInputCount + '</label><input type="text" class="form-control" name="' + indexValueName + '" id="' + indexValueName + '" placeholder="Weight" /></fieldset><fieldset class="form-group"><input type="text" class="form-control" name="' + itemWorth + '" id="' + itemWorth + '" placeholder="Cost" /></fieldset>';
        $('div#newFieldsHere2').append(textBox);
    }

}