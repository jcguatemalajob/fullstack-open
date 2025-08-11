const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function () {
        console.log('Hello, my name is ' + this.name)

    }
}
arto.greet()
console.log(arto)

//Method assigned to arto object after its creation
arto.growOlder = function () {
    this.age += 1
}

console.log(arto.age)
arto.growOlder()
console.log(arto.age)


console.log('================= arto2 =================')


const arto2 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function () {
        console.log('Hello, my name is ' + this.name)

    },
    doAddition: function (a, b) {
        console.log(a + b)
    }
    
}
arto2.doAddition(1, 4) // 5 is printed

const referenceToAddition = arto2.doAddition
referenceToAddition(10, 15) // 25 is printed

arto2.greet()

const referenceToGreet = arto2.greet
referenceToGreet() // Hello, my name is Arto Hellas,  the method loses knowledge of the object it was called from

setTimeout(arto.greet, 1000) // Hello, my name is undefined, the method loses knowledge of the object it was called from

setTimeout(arto.greet.bind(arto), 1000) // Hello, my name is Arto Hellas, the method knows the object it was called from

setTimeout(() => arto.greet(), 1000) // Hello, my name is Arto Hellas, the method knows the object it was called from. This not must to be used does not work well.











