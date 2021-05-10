// using the rest peramater
// const calculateAverage = (thing, ...numbers) => {
//     let sum = 0
//     numbers.forEach((num) => sum += num)
//     const average = sum / numbers.length
//     return `The average ${thing} is ${average}`
// }

// console.log(calculateAverage('grade', 0, 100, 88, 64,))

// const team = {
//     name: 'Liberty',
//     coach: 'Casey Penn',
//     players: ['Marge', 'Aidan', 'Herbert', 'Sherry']
// }

// const printTeam = (teamName, coach, ...players) => {
//    console.log(`Team: ${teamName}`)
//    console.log(`Coach: ${coach}`)
//    console.log(`Players: ${players.join(', ')}`)
// }
// printTeam(team.name, team.coach, ...team.players)

// Spread operator
// let cities = ['Barcelona', 'Cape town', 'Bordeaux']
// cities = [ ...cities, 'Santiago']

// console.log(cities)

//Destructuring
const todo = {
    id: 'djfkjdkjskjf',
    text: 'Pay the bills',
    completed: false
}

const printTodo = ({ text, completed }) => {
    console.log(`${text}: ${completed}`)
}
printTodo(todo)

const { text:todoText, completed, details = 'No details provided', ...others } = todo

console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)

const age = [65, 0 , 13]
const [firstAge, ...otherAges] = age

console.log(firstAge)
console.log(otherAges)









