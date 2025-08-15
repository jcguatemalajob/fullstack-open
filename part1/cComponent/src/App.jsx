import { useState } from 'react'

//Using props
const Hello = (props) => {
  const name = props.name
  const age = props.age
  //Component helper function
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }

  return (
    <div>
      <p>Hello, {name}, you are {age} years old</p>
      <p>You were probably born in {bornYear()}</p>
    </div>
  )
}

//Using props destructuring
const Hello2 = ({ name, age }) => {
  return (
    <div>
      <p>Hello, {name}, you are {age} years old</p>
    </div>
  )
}



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }
//Adding the props
const App = (props) => {

  const { counter } = props

  
  const name = 'Amarok'
  const age = 10000
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name="Inti" age={100} />
      <Hello2 name="Inti" age={100} />
      <p>Counter: {counter}</p>
    </div>
  )
}


export default App
