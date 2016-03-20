//Knapsack algorithm
//==================
// wikipedia: [Knapsack (0/1)](http://en.wikipedia.org/wiki/Knapsack_problem#0.2F1_Knapsack_Problem)
// Given a set `[{weight:Number, benefit:Number}]` and a capacity,
// find the maximum value possible while keeping the weight below
// or equal to the capacity
// **params**:  
//    `capacity`  : Number,  
//    `items`     : [{w:Number, b:Number}]  
// **returns**:  
//    An object containing `maxValue` and `set`

function startKnapsack() {

    var capacity = document.getElementById('capacity').value;
    var noOfIndex = parseInt(document.getElementById('noOfIndex').value);
    var itemArray = [];

    for (i = 1; i <= noOfIndex; i++) {
        var item = parseInt(document.getElementById('index' + i).value);
        itemArray.push(item);
    }
    knapsack(capacity, itemArray);
}

function knapsack(items, capacity) {
    console.log("knapsack runs");
    var idxItem = 0,
        idxWeight = 0,
        oldMax = 0,
        newMax = 0,
        numItems = items.length,
        weightMatrix = new Array(numItems + 1),
        keepMatrix = new Array(numItems + 1),
        solutionSet = [];

    // Setup matrices
    for (idxItem = 0; idxItem < numItems + 1; idxItem++) {
        weightMatrix[idxItem] = new Array(capacity + 1);
        keepMatrix[idxItem] = new Array(capacity + 1);
    }

    // Build weightMatrix from [0][0] -> [numItems-1][capacity-1]
    for (idxItem = 0; idxItem <= numItems; idxItem++) {
        for (idxWeight = 0; idxWeight <= capacity; idxWeight++) {

            // Fill top row and left column with zeros
            if (idxItem === 0 || idxWeight === 0) {
                weightMatrix[idxItem][idxWeight] = 0;
            }

                // If item will fit, decide if there's greater value in keeping it,
                // or leaving it
            else if (items[idxItem - 1].w <= idxWeight) {
                newMax = items[idxItem - 1].b + weightMatrix[idxItem - 1][idxWeight - items[idxItem - 1].w];
                oldMax = weightMatrix[idxItem - 1][idxWeight];

                // Update the matrices
                if (newMax > oldMax) {
                    weightMatrix[idxItem][idxWeight] = newMax;
                    keepMatrix[idxItem][idxWeight] = 1;
                }
                else {
                    weightMatrix[idxItem][idxWeight] = oldMax;
                    keepMatrix[idxItem][idxWeight] = 0;
                }
            }

                // Else, item can't fit; value and weight are the same as before
            else {
                weightMatrix[idxItem][idxWeight] = weightMatrix[idxItem - 1][idxWeight];
            }
        }
    }

    // Traverse through keepMatrix ([numItems][capacity] -> [1][?])
    // to create solutionSet
    idxWeight = capacity;
    idxItem = numItems;
    for (idxItem; idxItem > 0; idxItem--) {
        if (keepMatrix[idxItem][idxWeight] === 1) {
            solutionSet.push(items[idxItem - 1]);
            idxWeight = idxWeight - items[idxItem - 1].w;
        }
    }
    return { "maxValue": weightMatrix[numItems][capacity], "set": solutionSet };
}

exports = knapsack;

function generateRandomColour() {
    var noOfItems = parseInt(document.getElementById("noOfIndex").value);
    for (i = 1; i <= noOfItems; i++) {
        do {
            var colour = '#' + Math.floor(Math.random() * 16777215).toString(16);
            colour = colour.substring(1);      // strip #
            var rgb = parseInt(colour, 16);   // convert rrggbb to decimal
            var r = (rgb >> 16) & 0xff;  // extract red
            var g = (rgb >> 8) & 0xff;  // extract green
            var b = (rgb >> 0) & 0xff;  // extract blue
            var luma = 0.2126 * r + 0.7152 * g + 0.0722 * b; // per ITU-R BT.709
        }
        while (luma < 150);
        var itemElement = document.getElementById('index' + i).style.backgroundColor = "#" + colour;
    }
}

$(document).ready(function () {
    generateRandomColour();
});