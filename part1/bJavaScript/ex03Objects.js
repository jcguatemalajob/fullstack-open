const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
}

const object2 = {
    name: 'Full Stack Web Development',
    level: 'intermediate studies',
    size: 5,
}

const object3 = {
    name: {
        first: 'Dan',
        last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',

}

console.log(object1) // print { name: 'Arto Hellas', age: 35, education: 'PhD' }
console.log(object2) // print { name: 'Full Stack Web Development', level: 'intermediate studies', size: 5 }
console.log(object3) // print { name: { first: 'Dan', last: 'Abramov' }, grades: [2, 3, 5, 3], department: 'Stanford University' }

console.log(object1.name) // print Arto Hellas
const fieldName = 'age'
console.log(object1[fieldName]) // print 35

// adding properties on the fly
object1.addres = 'San Salvador'
object1['secret number'] = 1234

console.log(object1) // print { name: 'Arto Hellas', age: 35, education: 'PhD', addres: 'San Salvador', 'secret number': 1234 }

