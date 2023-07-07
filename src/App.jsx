import { useState } from 'react'
import './App.css'

// Components
import Header from './components/Header/Header'
import Enjoy from './components/Enjoy/Enjoy'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Header/>
        <Enjoy/>
      </div>
  )
}

export default App
