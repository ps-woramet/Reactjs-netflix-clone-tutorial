import React from 'react'
import tvImg from '../../assets/tv.png'
import { EnjoyCon } from './Styled'

function Enjoy() {
  return (
    <EnjoyCon>
        <div style={{ display:'flex', alignItems: 'center', width:'100%'}}>
            <div>
                <h3 style={{ fontSize:'1.4rem', color:'white', marginBottom: '2rem' }}>Enjoy on your Tv.</h3>
                <p style={{ fontSize:'1.2rem', color:'white' }} >Watch on Smart TVs, Playstation, Xbox, <br/>
                    Chromecast, Apple TV, Blu-ray players, and <br/>
                    more.
                </p>
            </div>
        </div>
        <div style={{ position: 'relative', width: '100%' }}>
            <img style={{ position: 'relative', zIndex: '2', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100%' }} src={ tvImg } alt="" />
            <video style={{ position: 'absolute', zIndex: '1', top: '50%', left: '50%', transform: 'translate(-51%, -54%)', width: '73.5%' }} autoPlay playsInline muted loop>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
            </video>
        </div>
    </EnjoyCon>
  )
}

export default Enjoy