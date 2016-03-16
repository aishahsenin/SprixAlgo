function retrieveValues() {
    // empty array
    var array = [];

    // get no. of index
    var noOfIndex = parseInt(document.getElementById('noOfIndex').value);

    for (i = 1; i <= noOfIndex; i++) {
        var a = parseInt(document.getElementById('index_' + i).value);
        array.push(a);
    }
    return array;
}

function startInsertionSort() {
    var array = retrieveValues();
    console.log(array);
    insertionSort(array);
}

// Insertion sort algorithm here!
function insertionSort(unsortedList) {
    var len = unsortedList.length;

    for (var i = 0; i < len; i++) {
        var tmp = unsortedList[i]; //Copy of the current element.
        /*Check through the sorted part and compare with the 
        number in tmp. If large, shift the number*/
        for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp) ; j--) {
            //Shift the number
            unsortedList[j + 1] = unsortedList[j];
        }
        //Insert the copied number at the correct position
        //in sorted part.
        unsortedList[j + 1] = tmp;
    }

    console.log(unsortedList);
}
/*
var ul = [5, 3, 1, 2, 4];
insertionSort(ul);
console.log(ul);
*/