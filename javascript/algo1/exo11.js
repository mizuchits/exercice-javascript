for (let i = 0; i <= 9; i++) {
    let ligne = `${i}`
    for (let j = 0; j <= 9; j++) {
        ligne += ` ${(i * j).toString().padStart(2)}`
    }
    console.log(ligne)
}