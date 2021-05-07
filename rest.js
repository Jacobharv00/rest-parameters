// using the rest peramater
const calculateAverage = (thing, ...numbers) => {
    let sum = 0
    numbers.forEach((num) => sum += num)
    const average = sum / numbers.length
    return `The average ${thing} is ${average}`
}

console.log(calculateAverage('grade', 0, 100, 88, 64,))

const printTeam = (teamName, coach, ...players) => {
   console.log(`Team: ${teamName}`)
   console.log(`Coach: ${coach}`)
   console.log(`Players: ${players.join(', ')}`)
}
printTeam('Dodgers', 'Jacob', 'Harry', 'Paul', 'Henry', 'Klayton')
