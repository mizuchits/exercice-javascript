function formatCustomDate(date) {
    return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
})
}

const date = new Date('2024-12-25');
console.log(formatCustomDate(date));
