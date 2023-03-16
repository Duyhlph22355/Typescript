function selectionSort<T>(arr: T[], callback?: (a: T, b: T) => boolean) {
    for (let i = 0; i < arr.length -1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (callback(arr[i] , arr[j])) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

const fibonaci = [2, 89, 55, 13, 1, 8, 3, 34, 21];
const arrString = ["cb", "st","cm","gk","lb","rw","cf"];
selectionSort<number>(fibonaci, (a, b) => {
    return a > b;
})
selectionSort<string>(arrString, (a, b) => {
    return a > b;
})
console.log(arrString);
