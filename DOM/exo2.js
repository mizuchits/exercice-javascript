console.log(window);

const number1 = document.getElementById('number1')
const number2 = document.getElementById('number2')
let result = document.getElementById('result')
const button = document.getElementById('button')

button.addEventListener('click', function () {
    const sum = Number(number1.value) + Number(number2.value)
    result.textContent = "résultat : " + sum
})