import { useState } from 'react'
import './App.css'

// Components
import Header from './components/Header/Header'
import Enjoy from './components/Enjoy/Enjoy'
import Download from './components/Download/Download'
import Watch from './components/Watch/Watch'
import Kids from './components/Kids/Kids'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Header/>
        <Enjoy/>
        <Download/>
        <Watch/>
        <Kids/>
      </div>
  )
}

export default App
