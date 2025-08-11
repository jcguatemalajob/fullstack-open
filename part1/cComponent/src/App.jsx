import { useState } from 'react'

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



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
      
//     </>
//   )
// }

const App = () => {
  const name = 'Amarok'
  const age = 10000
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name={name} age={age} />
      <Hello name="Inti" age={100} />
    </div>
  )
}


export default App
