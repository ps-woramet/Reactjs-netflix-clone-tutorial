import { useState } from 'react'
import './App.css'

// Components
import Header from './components/Header/Header'
import Enjoy from './components/Enjoy/Enjoy'
import Download from './components/Download/Download'
import Watch from './components/Watch/Watch'
import Kids from './components/Kids/Kids'
import Question from './components/Question/Question'

import data from './data'

function App() {
  const [questions, setQuestions] = useState(data)

  return (
      <div>
        <Header/>
        <Enjoy/>
        <Download/>
        <Watch/>
        <Kids/>
        <div style={{background:'black', color: 'white'}}>
          <h3 style={{display: 'flex',justifyContent: 'center', marginBottom: '2rem'}}>Frequently Asked Questions</h3>
          {questions.map((question) => {
            return <Question key={question.id} {...question}/>
          })}
          <p style={{marginTop: '1rem', display: 'flex', justifyContent: 'center', marginBottom: '1rem'}}>Ready to watch? Enter your email to create or restart your membership.</p>
          <div style={{display: 'flex', justifyContent: 'center', paddingBottom: '2rem', gap: '0.3rem'}}>
            <input type="email" placeholder='Email Address' style={{border: 'none', width: '50%', padding: '1rem 0.5rem', background: '#303030', color: 'white'}} />
            <button type='Submit' style={{width: '20%', padding: '1rem 0.5rem', background: '#e50914', color: 'white', borderRadius: '0.5rem', border: 'none'}}>Get Started</button>
          </div>
        </div>
      </div>
  )
}

export default App
