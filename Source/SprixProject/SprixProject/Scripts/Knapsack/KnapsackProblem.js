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
var capacity;
var itemArray = [];

$(document).ready(function () {
    generateRandomColour();
});

function startKnapsack() {
    capacity = document.getElementById('capacity').value;
    var noOfIndex = parseInt(document.getElementById('noOfIndex').value);

    for (i = 1; i <= noOfIndex; i++) {
        var item = parseInt(document.getElementById('index' + i).value);
        itemArray.push(item);
    }
    //knapsack(itemArray, capacity);
    console.log("START");
    knapsack();
    console.log("END");
}

//var idxItem;
//var idxWeight;
//var oldMax;
//var newMax;
//var numItems;
//var weightMatrix = [];
//var keepMatrix = [];
//var solutionSet;

function knapsack() {
    console.log("KNAPSACK");
    var idxItem = 0;
    var idxWeight = 0;
    var oldMax = 0;
    var newMax = 0;
    var numItems = itemArray.length;
    var weightMatrix = new Array(numItems + 1); // adds an array of items into Weight Table
    var keepMatrix = new Array(numItems + 1); // adds an array of items into Keep Table
    var solutionSet = []; // ?

    for (idxItem = 0; idxItem < numItems + 1; idxItem++) {
        weightMatrix[idxItem] = new Array(capacity + 1); // weight table
        keepMatrix[idxItem] = new Array(capacity + 1); // keep table
    }
    timeout(idxItem, idxWeight, weightMatrix, numItems);
}

var count = 1;

function timeout(idxItem, idxWeight, weightMatrix, numItems) {
    setTimeout(function () {
        for (idxItem = 0; idxItem <= numItems; idxItem++) {
            for (idxWeight = 0; idxWeight <= capacity; idxWeight++) {
                if (idxItem === 0 || idxWeight === 0) {
                    weightMatrix[idxItem][idxWeight] = 0;
                    console.log(weightMatrix);
                    $("#keepTable tr:nth-child(" + (idxItem + 1) + ") td:nth-child(" + (idxWeight + 1) + ")").text("0");
                }
            }
        }

        console.log("APPENDING");
        $("#testing").append(count);

        if (idxItem <= numItems) {
            idxItem++;
            timeout(idxItem, idxWeight, weightMatrix, numItems);
        }
    }, 1000, idxItem, idxWeight, weightMatrix, numItems);
}

function next() {
    for (idxItem = 0; idxItem <= numItems; idxItem++) {
        for (idxWeight = 0; idxWeight <= capacity; idxWeight++) {
            if (idxItem === 0 || idxWeight === 0) {
                weightMatrix[idxItem][idxWeight] = 0;
                $("#keepTable tr:nth-child(" + (idxItem + 1) + ") td:nth-child(" + (idxWeight + 1) + ")").append("0");
            }
        }
    }
}


function knapsack2(items, capacity) {
    console.log("KNAPSACK");
    var idxItem = 0,
        idxWeight = 0,
        oldMax = 0,
        newMax = 0,
        numItems = items.length,
        weightMatrix = new Array(numItems + 1), // adds an array of items into Weight Table
        keepMatrix = new Array(numItems + 1), // adds an array of items into Keep Table
        solutionSet = []; // ?

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
                //doSetTimeout((idxItem + 1), (idxWeight + 1));
                //setTimeout(function () { writeToTable((idxItem + 1), (idxWeight + 1)) }, 1000 * count);
                //setTimeout(function(){$("#valueTable tr:nth-child(" + (idxItem + 1) + ") td:nth-child(" + (idxWeight + 1) + ")").append("0");}, 1000 * count);
                //setTimeout($("#keepTable tr:nth-child(" + (idxItem + 1) + ") td:nth-child(" + (idxWeight + 1) + ")").append("0"), 1000 * count);
                $("#keepTable tr:nth-child(" + (idxItem + 1) + ") td:nth-child(" + (idxWeight + 1) + ")").append("0");
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

function downShiftKnapsack(id) {
    console.log("SHIFTING DOWN");
    $("#index" + id).animate({ top: "188px" }, 500);
}

function upShiftKnapsack(id) {
    console.log("SHIFTING UP");
    $("#index" + id).animate({ top: "0px" }, 500);
}