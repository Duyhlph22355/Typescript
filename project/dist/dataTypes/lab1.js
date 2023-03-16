function selectionSort(arr, callback) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j])) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}
var fibonaci = [2, 89, 55, 13, 1, 8, 3, 34, 21];
var arrString = ["cb", "st", "cm", "gk", "lb", "rw", "cf"];
selectionSort(fibonaci, function (a, b) {
    return a > b;
});
selectionSort(arrString, function (a, b) {
    return a > b;
});
console.log(arrString);
