console.log(window);

const thumbnail = document.querySelectorAll('.thumbnail')
const number2 = document.getElementById('mainImage')

thumbnail.forEach(function (thumbnail) {
    thumbnail.addEventListener('click', function () {
        mainImage.src = thumbnail.src.replace('400/600')
    })
})

