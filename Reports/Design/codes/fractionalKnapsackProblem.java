// array list of the items
arrayList<Item> listOfItems = new arrayList<Items>;

// calculate the value to weight ratio of each item
for (i = 0, initiate from i, end at n){
	listOfItems.valueToWeightRatio[i] = Item.value / Item.weight
}

// re-arrange the items based on the value to weight ratio
for (i = 0, initiate from i, end at n){
	double temp = 0
	if (valueToWeightRatio(i) < valueToWeightRatio(i + 1)) {
		temp = valueToWeightRatio(i+1);
		valueToWeightRatio(i + 1) = valueToWeightRatio(i);
		valueToWeightRatio(i) = temp;
	}
}

// add the first item of the list into the knapsack
for (i = 0, initiate from i, end at n){

	// check the item's weight and the knapsack current capacity and see if it can carry anymore items
	if (Knapsack.capacity < Item.weight){

		// start adding fractions
		Knapsack.weight = per fraction of Item.weight;
		Knapsack.capacity = Knapsack.capacity - Item.valueToWeightRatio;

		if (Knapsack.capacity is down to 0) {
			break;
		}

	}
	else (Knapsack.capacity > Item.weight){

		// add the whole item into knapsack
		Knapsack.weight = Knapsack.weight - Item.weight;

		if (Knapsack.capacity is down to 0) {
			break;
		}
	}
}

