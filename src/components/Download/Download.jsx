import React from 'react'
import mobileImg from '../../assets/mobile.jpg'
import boxshotImg from '../../assets/boxshot.png'
import downloadIcon from '../../assets/download-icon.gif'

import {DownloadCon} from './Styled'

function Download() {
  return (


    <DownloadCon>
        <div style={{width: '85%', margin:'0 auto', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <div style={{width: '50%', height: '100%', position: 'relative'}}>
                <div style={{width: '100%', height: '100%'}}>
                    <img style = {{height: '100%', width: '100%', margin: '0 auto'}}src={ mobileImg } alt="" />
                </div>
                <div style={{background: 'black', border: 'gray solid 1px', borderRadius: '10px', padding: '0.5rem', height: '20%', width: '50%', position:'absolute', top:'80%', left:'50%', transform: 'translate(-50%,-50%)', color:'white', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.2rem'}}>
                    <img style = {{height: '100%'}} src={ boxshotImg } alt="" />
                    <div>
                        <p style={{fontSize: '0.7rem'}}>Stranger Things</p>
                        <p style={{marginTop: '0.5rem', fontSize: '0.6rem', color: 'blue'}}>Downloading...</p>
                    </div>
                    <img style = {{height: '100%', width: '20%'}} src={ downloadIcon } alt="" />
                </div>
            </div>
            <div style={{height:'100%', color: 'white'}}>
                <h1 style={{marginTop: '1.5rem'}}>
                    Download your shows to watch offline
                </h1>
                <p style={{fontSize: '0.8rem', marginTop: '1.5rem'}}>
                    Save your favorites easily and always have <br/>
                    something to watch.
                </p>
            </div>
        </div>
    </DownloadCon>
  )
}

export default Download