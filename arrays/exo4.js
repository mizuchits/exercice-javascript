let fruit = ['apple', 'banana', 'cherry']

function reverseArray(arr) {
    var output = [];
    while (arr.length) {
        output.push(arr.pop());
    }

    return output;
}
console.log(reverseArray(fruit));

