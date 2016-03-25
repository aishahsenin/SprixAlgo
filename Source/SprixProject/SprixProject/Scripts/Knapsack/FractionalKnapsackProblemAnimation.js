function fracItemBox(weight, value, benefit) {
    this.weight = weight;
    this.value = value;
    this.benefit = benefit;
}

$(document).ready(function () {
    console.log("fractional knapsack ready");

    var idxItem = 0;
    var idxWeight = 0;
    var capacity = parseInt(document.getElementById('capacity').value);
    var noOfIndex = parseInt(document.getElementById('noOfIndex').value);
    //var itemArray = this.getItemValues;
    var weightMatrix = [];
    var keepMatrix = [];

});

// 1 - get the capacity and object array of items (weight & value)
// 2 - using the items, calculate benefitX = valueX / weightX
function getItems() {
    var items = [];
    for (i = 0; i < noOfIndex; i++) {
        var hidIndexFind = i + 1;
        var weight = parseInt(document.getElementById('itemWeight_' + hidIndexFind).value);
        var value = parseInt(document.getElementById('itemBenefit_' + hidIndexFind).value);
        // TODO; check if equation below divides by 0
        var benefit = weight / value;
        var item = new fracItemBox(weight, value, benefit);
        items.push(item);
    }
    return items;
}

function mergeSort(items) {
    if (items.length < 2) return items;
    var mid = Math.floor(items.length / 2);
    var subLeft = mergeSort(items.slice(0, mid));
    var subRight = mergeSort(items.slice(mid));
    return merge(subLeft, subRight);
}

function merge(a, b) {
    var result = [];
    while (a.length > 0 && b.length > 0)
        // ? dentotes as "then", and : denote as "else"
        result.push(a[0].benefit < b[0].benefit ? a.shift() : b.shift());
    return result.concat(a.length ? a : b);
}

// 3 - sort items based on the value benefitX, arrange the items from the item with the most benefit to the least

// 4 - using the capacity, find out if item on the first position can fit into the sack.
//      - if item <= capacity, insert the whole item
//      - else if item > capacity, divide the item up to a point you filled up the knapsack

// 5 - already found the optimum solution

function startFractionalKnapsack() {
    // 1 - get item details
    var items = getItems();

    // 2 - arrange items based on the amount of benefit
    var sortedItems = mergeSort(items);
    console.log(sortedItems);
}