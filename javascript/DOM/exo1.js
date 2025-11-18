console.log(window);

const userInput = document.getElementById('userInput')
const message = document.getElementById('message')
const button = document.getElementById('button')


button.addEventListener('click', function () {
    if (userInput.value.includes('bonjour')) {
        message.textContent = "Bonne journée !"
        message.style.color = 'green'
    } else if (userInput.value.includes("au revoir")) {
        message.textContent = "A la prochaine !"
        message.style.color = 'black'
    } else {
        message.textContent = "je ne comprend pas"
        message.style.color = 'red'
    }
})

