var variableInputCount = 2;

// INFO: Returns the number of index needed to produce a form for index input
function submitThis(btnClicked) {
    //var $form = $(btnClicked).parents('form');
    //var dataArray = new Array();
    //$.ajax({
    //    type: "POST",
    //    url: $form.attr('action'),
    //    //data: $form.serialize(),
    //    dataType: 'json',
    //    data: JSON.stringify(dataArray),
    //    error: function (xhr, status, error) {
    //        // TODO; add somethnig it form submission doesn't work out
    //    },
    //    success: function (response) {
    //        for (i = 1; i <= variableInputCount; i++) {
    //            var fieldIdCount = 'indexValue_' + i;
    //            dataArray.push(document.getElementById(fieldIdCount).value);
    //            console.log("executed sort");
    //        }
    //        console.log($.parseJSON(data));
    //        // TODO; submit form here
    //        // $("#sortForm").submit();
    //    }
    //});
    //return false;



}

// TODO; 5/3/2016 finish the ajax submission for the knapsack form
function KnapsackModel() {
    var self = this;
    self.Capacity = $('capacityValue').val();
    
    // TODO; 5/3/2016 loop to store the list of item weights
}

// Submit button function
//$('submitHere').click(function () {
//    var request = new Knapsack
//})

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