import './App.css';
import React from 'react'
import Card from './Card'
import data from "./data"


function App() {
  const cards = data.map(item => {
    return (
       <Card 
          {...item}
        />
    )
  })
  return(
    <div>
      <header>
        <img src='/Fill 213.png' />
        <span>My Travel Journal</span>
      </header>
      {cards}
    </div>
  )
  
}

export default App;
