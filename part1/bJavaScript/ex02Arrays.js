const t = [1, -1, 3]

t.push(5)
console.log(t.length) // 4 is printed
console.log(t[1]) // -1 is printed
console.log('forEach starts')

//explicit code block, with brackes
t.forEach(value => {
  console.log(value) // numbers 1, -1, 3, 5 are printed, each on its own line

})

console.log('forEach another way to write it')
t.forEach((value, index) => {
  console.log(value, index)
})

t.forEach(element => console.log(element))

const t2 = t.concat(7) // creates a new array the original t with 7 added to the end
console.log(t) // [1, -1, 3, 5]
console.log(t2) // [1, -1, 3, 5, 7]

const result = t.map(value => { return value * 2 })
console.log(result) // [2, -2, 6, 10]

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2) // ['<li>1</li>', '<li>-1</li>', '<li>3</li>', '<li>5</li>']


const result2 = t.filter(value => value > 0)
console.log(result2) // [1, 3, 5]

const result3 = t.reduce((sum, value) => sum + value, 0)
console.log(result3) // 8

//new constant
const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const [first, second, ...rest] = n
console.log(first, second) // 1 2
console.log(rest) // [3, 4, 5]

const [uno, dos, tres, cuatro, ...resto] = n
console.log('print uno, dos and resto') // 3
console.log(uno, dos) // 1 2
console.log(resto) // [3, 4, 5]

console.log('print first, second, tres and cuatro')
console.log(first, second, tres, cuatro) // 1 2 3 4
console.log('print rest')
console.log(rest) // [3, 4, 5]
















