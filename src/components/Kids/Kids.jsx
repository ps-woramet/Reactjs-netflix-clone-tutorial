import React from 'react'
import { KidsCon } from './Styled'
import kidsImg from '../../assets/kids.png'

function Kids() {
  return (
    <KidsCon style={{display:'flex', alignItems: 'center'}}>
        <div style={{margin: 'auto auto', width: '90%', height: '80%', display: 'flex', alignItems: 'space-between', gap:'1rem'}}>
            <div style={{position: 'relative', width: '100%'}}>
                <img src={kidsImg} alt="" style={{position: 'absolute', top: '50%', left:'50%', transform:'translate(-50%, -50%)', width:'100%', objectFit: 'cover'}} />
            </div>
            <div style={{color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                <h1>Create profiles for kids</h1><br/>
                <p>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
        </div>
    </KidsCon>
  )
}

export default Kids
