function calculateAge(birthDate) {
    const birth = new Date(birthDate)
    const currentDate = new Date()
    const age = currentDate.getFullYear() - birth.getFullYear()
    return age
}

const birthDate = '2000-12-11';
console.log(calculateAge(birthDate));
