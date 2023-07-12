import React from 'react'
import { useState } from "react"
import { QuestionCon } from './Styled'

function Question({title, info}) {

    const [showInfo, setShowInfo] = useState(false);

  return (
    
    <QuestionCon>
        <div style={{display:'flex', justifyContent:'center', padding: '0.1rem 0'}}>
            <div style={{background: '#303030', fontSize: '1rem', width: '650px', marginBottom: '0.05rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 1rem'}}>
                <h3>{title}</h3>
                <button style = {{border: 'none', background: 'transparent', fontSize: '1rem', color: 'white'}} onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? '-' : '+'}
                </button>
            </div>
        </div>
        <div style={{display:'flex', justifyContent: 'center'}}>
            {showInfo && <p style={{background: '#303030', fontSize: '1rem', width: '650px', marginBottom: '0.3rem', display: 'flex', justifyContent: 'space-between', padding: '0.5rem 1rem'}}>{info}</p>}
        </div>
    </QuestionCon>
  )
}

export default Question
