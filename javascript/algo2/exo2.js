let ligne = 30
let colonne = 20


for (let i = 1; i < ligne; i++) {
    let result = ""

    for (let count = 1; count < colonne; count++) {

        if ((i % 2 !== 0 && count % 2 !== 0) || (i % 2 === 0 && count % 2 === 0)) {
            result += "◼️ "
        }
        else {
            result += "◻️ "
        }

    }
    console.log(result)
}
