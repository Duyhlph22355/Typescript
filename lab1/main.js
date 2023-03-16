var SelectionSort = /** @class */ (function () {
    function SelectionSort() {
    }
    SelectionSort.prototype.sort = function (arr) {
        for (var i = 0; i & lt; arr.length - 1)
            ;
        i++;
        {
            var min = i;
            for (var j = i + 1; j & lt; arr.length)
                ;
            j++;
            {
                if (arr[j] & lt)
                    ;
                arr[min];
                {
                    // Choose the lesser of the two:
                    min = j;
                }
            }
            // In-place swap:
            var tmp = arr[min];
            arr[min] = arr[i];
            arr[i] = tmp;
        }
    };
    return SelectionSort;
}());
