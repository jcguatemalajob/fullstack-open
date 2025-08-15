import { useEffect, useState } from "react";
//Destructuring props to avoid using the object props.
//const Hello = (props)
const Hello = ({ name, age }) => {
  //Se following line is no more needed
  //const { name, age } = props

  //Component Helper Functions: adding a helper function to the component
  //bornYear is a helper function inside the function
  // We can simplify the function in one line
  /*
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    return yearNow - props.age
  }
  */
  const bornYear = () => new Date().getFullYear() - age;

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  );
};

//Passing state - to child
const Display = (props) => {
  return <div>{props.counter}</div>;
};

//Passing state - to parent. Reusable component Button
const Button = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

//To show the re-rendering of the component we are add props to the function App
//And we are using the useState hook to add a state to the component
//const App = (props) => {
const App = () => {
  const name = "Peter";
  const age = 10;

  // first example to re-render the component
  //const {counter} = props

  //We are using the useState hook to add a state to the component
  //The useState hook returns an array with two elements
  //The first element is the state variable
  //The second element is the function to update the state variable
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);

  //setTimeout(() => setCounter(counter + 1), 1000)

  useEffect(() => {
    const id = setInterval(() => {
      setCounter(counter + 1);
      console.log("redering...", counter);
    }, 1000);
    return () => clearInterval(id);
  }, [counter]);
  //console.log('redering...', counter)

  const handleClick = () => {
    console.log("button clicked");
  };

  const increaseByOne = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };

  const decreaseByOne = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };

  const setToZero = () => setCounter(0);

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
      <p>The counter is {counter}</p>
      <Display counter={counter} />
      <div>
        <button onClick={handleClick}>click me</button>
      </div>
      <div>
        <button onClick={() => console.log("clicked")}>To Console</button>
      </div>
      <div>
        <button onClick={() => setCounter(0)}>
          Reset counter to 0 does not work
        </button>
      </div>
      <div>
        <button onClick={() => setCounter(counter + 1)}>
          Increment manualy by 1
        </button>
      </div>
      <div>
        <button onClick={increaseByOne}>Increment by 1</button>
      </div>
      <div>
        <button onClick={decreaseByOne}>Decrement by 1</button>
      </div>
      <div>
        <button onClick={setToZero}>Set to 0</button>
      </div>
      <Button onClick={increaseByOne} text="Increment by 1" />
      <Button onClick={decreaseByOne} text="Decrement by 1" />
      <Button onClick={setToZero} text="Set to 0" />
    </div>
  );
};

export default App;
