
function countOccurrences(arr, value) {
    return arr.filter(item => item === value).length;
}

let arr = [1, 2, 1, 3, 1];
console.log(countOccurrences(arr, 1));
