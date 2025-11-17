function onlyEven(array) {
    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arr.push(array[i]);
        }
    }
    return arr;
}
let arr = [1, 2, 1, 3, 1];
console.log(onlyEven(arr));


