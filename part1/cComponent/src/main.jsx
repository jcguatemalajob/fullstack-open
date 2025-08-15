import ReactDOM from "react-dom/client";
import App from "./App";

let counter = 1;

//In de comented line we added to counter={counter} to <App />
//But this not enough, becouse only are showing de value of counter, and it is not
//re-rendering the component
/*
ReactDOM.createRoot(document.getElementById('root')).render(<App counter={counter} />)
*/

//To fix this, we need to create a function that render the component
//And call this function every time that we want to re-render the component

// all this is commented is to show the re-rendering of the component
/*
const root = ReactDOM.createRoot(document.getElementById('root'))

const refresh = () => {
  root.render(<App counter={counter} />)
}
  */

//Making calls to reder method is not recommended, because it is not efficient

// with this lines we can re-render two times the component
/*
refresh()
counter += 1 // counter is 2
refresh()
counter += 1 // counter is 3
refresh()
*/
// we can re-render the component as many times as we want
/*
setInterval(() => {
  counter += 1
  refresh()
}, 1000)
*/

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
