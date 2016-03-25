// wikipedia: [Knapsack (0/1)](http://en.wikipedia.org/wiki/Knapsack_problem#0.2F1_Knapsack_Problem)

$(document).ready(function () {
    console.log("knapsack ready");
});

function startKnapsack() {
    console.log("knapsack executed");
    var items = [45, 23, 7, 90];
    var capacity = 50;
    knapsack(items, capacity);
}

function knapsack(items, capacity) {
    var idxItem = 0,
        idxWeight = 0,
        oldMax = 0,
        newMax = 0,
        numItems = items.length, // Aishah; you're passing in list of items
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