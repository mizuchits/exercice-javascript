function addOneWeek(date) {
    date.setDate(date.getDate() + 7)
    return date
}

const date = new Date('2006-12-11')
console.log(addOneWeek(date));
