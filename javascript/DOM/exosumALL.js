function sum(arr) {
    let result = 0
    let count = 0
    let y = 0
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
        count += arr[i];

    }
    while (y == count) {
        result += count;
        y++;
    }

    console.log(result);

}


let arr = [1, 6]
sum(arr)