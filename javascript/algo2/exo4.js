let square = 11
let choose = "square"

if (choose === "x") {
    for (let i = 1; i <= square; i++) {
        let result = ""

        for (let y = 1; y <= square; y++) {
            if ((y === 1 || y === square) || (i === 1 || i === square)) {
                result += "◼️ "
            } else if (y === i) {
                result += "◼️ "
            } else if (i === (square - y + 1)) {
                result += "◼️ "
            }
            else {
                result += "◻️ "
            }
        }
        console.log(result)
    }
}

if (choose = "square") {
    for (let i = 1; i <= square; i++) {
        let result = ""

        for (let y = 1; y <= square; y++) {
            if ((y === 1 || y === square) || (i === 1 || i === square)) {
                result += "◼️ "
            }
            else if ((y === 2 || y === (square - 1)) || (i === 2 || i === (square - 1))) {
                result += "◻️ "
            }
            else {
                result += "◼️ "
            }
        }
        console.log(result)
    }
}