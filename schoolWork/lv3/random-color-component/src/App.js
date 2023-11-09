import React, { useState, useEffect } from "react"
import Color from "./Components/Color"
import './App.css';
// import axios from "axios";
const axios = require("axios")

function App() {
  const [count, setCount] = useState(0)
  const [color, setColor] = useState("")


  const change = () => {
    setCount(prevCount => prevCount + 1)
  }


  const randomColor = Math.floor(Math.random() * 7);


  useEffect(() => {
    axios.get('https://www.colr.org/json/colors/random/7')
      // .then(res => console.log(res.data.colors[randomColor].hex))
      .then(res => setColor(res.data.colors[randomColor].hex))
      .catch(error => console.log(error))
  }, [count]

  )

  // .then(data => {
  //   setColors(data.colors.map(color => color.hex.value))
  // })


  // useEffect(getColor, [count])

  const style = {
    backgroundColor: `#${color}`
  }

  return (
    <div>
      <div className="box" style={style}></div>

      Random Color Generator
      <button className="btn" onClick={change}>Change!</button>
    </div>
  )
}

export default App;
