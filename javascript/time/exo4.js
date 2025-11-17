const date = new Date('2025-12-25')

function daysUntil(targetDate) {
    let today = new Date().getTime();
    let one_day = 1000 * 60 * 60 * 24;

    untilDate = new Date (targetDate - today);
    untilDate = untilDate.getTime()
    untilDate = Math.floor(untilDate / one_day)

    return untilDate
}

console.log(daysUntil(date))