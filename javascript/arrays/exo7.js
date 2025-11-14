function reverseMessage(string) {
    var array = string.split(" ");
    var result = "";
    for (var i = array.length - 1; i >= 0; i--) {
        result += array[i] + " ";
    }
    console.log(result);
};

let string = "je test"
console.log(reverseMessage(string));
