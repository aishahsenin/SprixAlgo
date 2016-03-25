$(document).ready(function () {
    console.log("fractional knapsack ready");

    function itemBox(index, weight, value) {
        this.index = index;
        this.weight = weight;
        this.value = value;
        this.benefit = 0;
    }

    var idxItem = 0;
    var idxWeight = 0;
    var capacity = getHiddenVals('capacity');
    var noOfIndex = parseInt(getHiddenVals('noOfIndex'));
    var itemArray = getItemValues();
    var weightMatrix = [];
    var keepMatrix = [];

});

// 1 - get the capacity and object array of items (weight & value)
function getItemValues() {
    var itemArray = []
    for (i = 1; i <= noOfIndex; i++) {
        var itemWeight = parseInt(document.getElementById('itemWeight_' + i).value);
        var itemValue = parseInt(document.getElementById('itemBenefit_' + i).value);
        var item = new itemBox(i, itemWeight, itemValue);
        itemArray.push(item);
    }
    return itemArray;
}

function getHiddenVals(element) {
    var val = document.getElementById(element).value;
    return val;
}

// 2 - using the items, calculate benefitX = valueX / weightX
function calculateBenefit(itemArray) {
    for (i = 1; i <= noOfIndex; i++) {
        var benefit = itemArray[i].value / itemArray[i].weight
        itemArray[i].benefit = benefit;
        console.log(i);
        console.log("value " + itemArray[i].value);
        console.log("weight " + itemArray[i].weight);
        console.log("check benefit inserted" + itemArray[i].benefit);
    }
}

// 3 - sort items based on the value benefitX, arrange the items from the item with the most benefit to the least

// 4 - using the capacity, find out if item on the first position can fit into the sack.
//      - if item <= capacity, insert the whole item
//      - else if item > capacity, divide the item up to a point you filled up the knapsack

// 5 - already found the optimum solution

function startFractionalKnapsack() {
    calculateBenefit(itemArray);
}