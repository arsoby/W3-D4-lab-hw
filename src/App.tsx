import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './componet/Nav'
import  Content  from './componet/Content'
import Foot from './componet/Foot'

function App() {

  return (
    <div className="App">
      <Nav/>
      <Content/>
      <Foot />
    </div>
  )
}

export default App
