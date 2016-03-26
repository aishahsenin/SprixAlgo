function fracItemBox(num, weight, value, benefit) {
    this.num = num;
    this.weight = weight;
    this.value = value;
    this.benefit = benefit;
}

$(document).ready(function () {
    this.idxItem = 0;
    this.idxWeight = 0;
    this.capacity = parseInt(document.getElementById('capacity').value);
    this.noOfIndex = parseInt(document.getElementById('noOfIndex').value);
    var self = this;
});

// 1 - get the capacity and object array of items (weight & value)
// 2 - using the items, calculate benefitX = valueX / weightX
function startFractionalKnapsack() {
    var items = [];
    for (i = 0; i < noOfIndex; i++) {
        var hidIndexFind = i + 1;
        var weight = parseInt(document.getElementById('itemWeight_' + hidIndexFind).value);
        var value = parseInt(document.getElementById('itemBenefit_' + hidIndexFind).value);
        if (this.weight == 0){
            alert("Error in calculating benefit of item.");
            return false;
        }
        var benefit = value / weight;
        // TODO; need to animate this bit where the benefit for each item has been calculated
        $("#index" + hidIndexFind).append("<br /> Benefit: " + benefit); 
        var item = new fracItemBox(hidIndexFind, weight, value, benefit);
        items.push(item);
    }
    // 2 - arrange items based on the amount of benefit
    var sortedItems = mergeSort(items);
    console.log(sortedItems);

    var knapsackItems = checkItemFits(sortedItems);
    console.log(knapsackItems);

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
        result.push(a[0].benefit > b[0].benefit ? a.shift() : b.shift());
    return result.concat(a.length ? a : b);
}

function checkItemFits(items) {
    var knapsack = [];
    var capacityLeft = self.capacity;
    var count = 0;

    while (capacityLeft > 0) {
        if (items[count].weight <= capacityLeft) {
            knapsack.push(items[count]);
            capacityLeft = capacityLeft - items[count].weight;
        }
        else if(items[count].weight > capacityLeft){
            // using the amount of capacity left, split up the item weight until it fully fills up the capacity
            var item = new fracItemBox(items[count].num, capacityLeft, (items[count].benefit * capacityLeft), items[count].benefit);
            knapsack.push(item);
            break;
        }
        count++;
    }
    return knapsack;
}