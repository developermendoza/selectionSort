function selectionSort(arr) {
  var n = arr.length;

  for (var i = 0; i < n - 1; i++) {
    var minIndex = i;

    for (var j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    var temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
}

var arrayToSort = [64, 34, 25, 12, 22, 11, 90];
selectionSort(arrayToSort);
console.log("sorted array: ", arrayToSort);
