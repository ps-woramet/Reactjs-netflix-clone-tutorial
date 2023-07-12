import React from 'react'
import { FooterCon } from './Styled'

function Footer() {
  return (
    <FooterCon>
        <div style={{ width: '80%', color: 'white', height: 'auto'}}>
            <p style={{marginBottom: '1rem'}}>Questions? Call 1-800-012-298</p>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <ul style={{listStyle: 'none'}}>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">FAQ</a></li>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Investor Relations</a></li>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Ways to Watch</a></li>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Corporate Infomation</a></li>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Only on Netflix</a></li>
                </ul>
                <ul style={{listStyle: 'none'}}>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Help Center</a></li>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Jobs</a></li>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Terms of Use</a></li>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Contact Us</a></li>
                </ul>
                <ul style={{listStyle: 'none'}}>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Account</a></li>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Redeem Gift Cards</a></li>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Privacy</a></li>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Speed Test</a></li>
                </ul>
                <ul style={{listStyle: 'none'}}>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Media Center</a></li>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Buy Gift Cards</a></li>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Cookie Preferences</a></li>
                    <li><a style={{color: 'white', fontSize: '0.8rem'}} href="#">Legal Notices</a></li>
                </ul>
            </div>
            <div style={{marginTop: '2rem'}}>
                <a style={{color: 'white', textDecoration: 'none', border: 'solid white 1px', padding: '0.5rem', borderRadius: '0.2rem', fontSize: '1rem'}} href="#">English</a>
                <p style={{marginTop: '2rem'}}>Netflix Thailand</p>
            </div>
        </div>
    </FooterCon>
  )
}

export default Footer
