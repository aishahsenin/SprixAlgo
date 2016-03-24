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
function itemBox(index, weight, value) {
    this.index = index;
    this.weight = weight;
    this.value = value;
}


$(document).ready(function () {
    generateRandomColour();
});

var idxItem = 0;
var idxWeight = 0;
var capacity = document.getElementById('capacity').value;
var noOfIndex = parseInt(document.getElementById('noOfIndex').value);
var itemArray = [];
var weightMatrix = [];
var keepMatrix = [];

function startKnapsack() {
    for (i = 1; i <= noOfIndex; i++) {
        var itemWeight = parseInt(document.getElementById('itemWeight_' + i).value);
        var itemValue = parseInt(document.getElementById('itemBenefit_' + i).value);

        var item = new itemBox(i, itemWeight, itemValue);

        itemArray.push(item);
    }

    for (idxItem = 0; idxItem < itemArray.length + 1; idxItem++) {
        weightMatrix[idxItem] = new Array(capacity + 1); // weight table
        keepMatrix[idxItem] = new Array(capacity + 1); // keep table
    }

    idxItem = 0;
    idxWeight = 0;

    console.log("START");
    knapsack();
    console.log("END");
}

var total = 1;

function knapsack() {

    setTimeout(function () {
        // checks if we're not at the final cell, if yes, run loop
        if ((idxWeight != capacity) && (idxItem != (noOfIndex + 1))) {

            // if item is 0, means there is no weight, therefore make cell 0
            // note idxItem + 1 and idxWeight + 2 denotes the current cell
            if (idxItem == 0) {
                $("#valueTable tr:nth-child(" + (idxItem + 1) + ") td:nth-child(" + (idxWeight + 2) + ")").text("0");
            } else {

                //  if current item's weight is <= the current capacity it's at. basically checks if item can fit in the current capacity of knapsack
                if (itemArray[idxItem - 1].weight <= (idxWeight + 1)) {

                    // 1 - with the value of item x, compare...
                    var temp = itemArray[idxItem - 1].value;

                    // 2 - the cells for values for item 0 to item x-1
                    for (i = 0; i < idxItem; i++) {

                        var compareVal = $("#valueTable tr:nth-child(" + (i + 1) + ") td:nth-child(" + (idxWeight + 2) + ")").text();

                        if (temp < compareVal) {
                            temp = compareVal;
                        }
                    }
                    $("#valueTable tr:nth-child(" + (idxItem + 1) + ") td:nth-child(" + (idxWeight + 2) + ")").text(temp);
                } else {
                    $("#valueTable tr:nth-child(" + (idxItem + 1) + ") td:nth-child(" + (idxWeight + 2) + ")").text("0");
                }
            }

            idxWeight++;
            if (idxWeight == capacity) {
                idxItem++;
                idxWeight = 0;
            }
            total++;
            knapsack();
        }
    }, 500);
}

function startKnapsack2() {
    capacity = document.getElementById('capacity').value;
    var noOfIndex = parseInt(document.getElementById('noOfIndex').value);

    for (i = 1; i <= noOfIndex; i++) {
        var item = parseInt(document.getElementById('index' + i).value);
        itemArray.push(item);
    }
    console.log("START");
    knapsack(itemArray, capacity);
    console.log("END");
}

function knapsack2(items, capacity) {
    console.log("KNAPSACK");
    var idxItem = 0,
        idxWeight = 0,
        oldMax = 0,
        newMax = 0,
        numItems = items.length, // Aishah; you're passing in list of items
        weightMatrix = new Array(numItems + 1), // adds an array of items into Weight Table
        keepMatrix = new Array(numItems + 1), // adds an array of items into Keep Table
        solutionSet = [];

    // Setup matrices
    for (idxItem = 0; idxItem < numItems + 1; idxItem++) {
        weightMatrix[idxItem] = new Array(capacity + 1); // weight table
        keepMatrix[idxItem] = new Array(capacity + 1); // keep table
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

    /*
    for (i = 0; i < weightMatrix.length; i++) {
        console.log(weightMatrix[i][0]);
        for (j = 0; j < weightMatrix[i].length; j++) {
            console.log(weightMatrix[i][j]);
        }
    }*/

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

function downShiftKnapsack(id) {
    console.log("SHIFTING DOWN");
    $("#index" + id).animate({ top: "188px" }, 500);
}

function upShiftKnapsack(id) {
    console.log("SHIFTING UP");
    $("#index" + id).animate({ top: "0px" }, 500);
}