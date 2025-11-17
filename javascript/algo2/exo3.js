let square = 10

for (let i = 1; i <= square; i++) {
    let result = ""

    for (let y = 1; y <= square; y++) {
        if ((y === 1 || y === square) || (i === 1 || i === square)) {
            result += "◼️ "
        }
        else {
            result += "◻️ "
        }
    }
    console.log(result)
}