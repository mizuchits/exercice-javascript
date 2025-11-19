let clock = document.getElementById("clock")

setInterval(function () {
    let fullDate = new Date()
    let second = fullDate.getSeconds()
    let minutes = fullDate.getMinutes()
    let hour = fullDate.getHours()

    clock.textContent = (`${hour} : ${minutes} : ${second}`)
}, 1000)
