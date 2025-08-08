const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/jcguatemalajob'>jcguatemala</a>
    </div>
  )
}

const App = () => {
  const friends = [
    { name: 'Maya', age: 26 },
    { name: 'John', age: 20 },
    { name: 'Jane', age: 22 },
  ]
  const nombres = ['Pedro', 'Juan', 'Luis']
  return (
    <div>
      <p>{friends[0].name} tiene {friends[0].age} años</p>
      <p>{friends[1].name} tiene {friends[1].age} años</p>
      <p>{friends[2].name} tiene {friends[2].age} años</p>
      <p>{nombres}</p>
      <Footer />
    </div>
  )
}

export default App