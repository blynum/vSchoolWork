import { useState } from 'react'
import boxes from './boxes'
import Box from './Box'
import './App.css'



  function App() {
    const [squares, setSquares] = useState(boxes)
    // const style = {
    //   backgroundColor: props.darkMode ? "#222222" : "#cccccc"
    // }
    const squareArray = squares.map(square => (
      <Box key={square.id} on={square.on} />
    ))
  
  
    /**
       * Challenge part 1:
       * 1. Initialize state with the default value of the
       *    array pulled in from boxes.js
       * 2. Map over that state array and display each one
       *    as an empty square (black border, transparent bg color)
       *    (Don't worry about using the "on" property yet)
       */
  
    return (
      <div className="App">
        Box Challenge 1
        {squareArray}
  
      </div>
    );
  }
  
  export default App;
  
