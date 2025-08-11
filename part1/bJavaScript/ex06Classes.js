class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log('Hello, my name is ' + this.name)
    }
}

const kukulkan = new Person('Kukulkan God', 1500)
kukulkan.greet()

const tlaloc = new Person('Tlaloc', 1000)
tlaloc.greet()

