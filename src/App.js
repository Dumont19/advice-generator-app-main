import { useState, useEffect } from 'react'
import './App.css' 

import patternDividerMobile from "./images/pattern-divider-mobile.svg"
import pattternDividerDesktop from "./images/pattern-divider-desktop.svg"
import iconDice from "./images/icon-dice.svg"

function App() {

  const [titleAdvice, setTitleAdvice] = useState('')
  const [advice, setAdvice] = useState('')
  
  async function handleClick() {
    const response = await fetch("https://api.adviceslip.com/advice")
    const data = await response.json()

    setAdvice(data.slip.advice)
    setTitleAdvice(data.slip.id)
  }
 
  useEffect(() => {
    handleClick()
  }, [])

  return (
    <div className="container">
      <h1>Advice #{titleAdvice}</h1>
      <p>{advice}</p>

      <picture>
        <source media="(min-width: 768px)" srcSet={pattternDividerDesktop} />
        <img src={patternDividerMobile} alt="Divider icon" />
      </picture>

      <div onClick={handleClick} className='circle'>
          <img className='dice' src={iconDice} alt="Icon dice" />
      </div>
    </div>
  )
}

export default App
