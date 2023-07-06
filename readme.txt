1. ติดตั้ง package react
    npm create vite@latest
    projectname: reactjs-netflix-clone
    > react

    cd reactjs-netflix-clone
    npm install
    npm run dev ใช้รันโปรเจค react

2. ติดตั้ง styled-components

    npm i styled-components
    
3. ลบ code ใน index.css
   แก้ code ใน App.css

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

4. App.jsx

    import { useState } from 'react'
    import './App.css'

    function App() {
    const [count, setCount] = useState(0)

    return (
        <div>

        </div>
    )
    }

    export default App

5. สร้าง src -> components -> Header -> Header.jsx (สร้าง component)
   สร้าง src -> components -> Header -> Styled.jsx (สร้าง css)

6. save รูปภาพมาไว้ที่ assets

7. ติดตั้ง extentions ES7+React/Redux/React-Native snippets 
   สำหรับพิมพ์ short cut (rfce)

8. เพิ่ม tag html ต่างๆ ใน Header.jsx

9. ทำการ import component ใน App.jsx

    // Components
    import Header from './components/Header/Header'
   
    return (
        <div>
            <Header/>
        </div>
    )

10. แก้ไข Styled.jsx
    สามารถใช้แบบ style inline <div style = {{ color:'red'}}>
    สามารถใช้แบบ style component

    ตัวอย่าง Header.jsx

        import React from 'react'
        import { HeaderCon, NavCon, Menu, ResponsiveCon } from './Styled'

        function Header() {
        return (
            <HeaderCon>
            <NavCon>
                <div>
                    <svg viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="default-ltr-cache-mv4tc2 eaitdun1"><g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path></g></svg>
                </div>
                <Menu>
                    <li><a href="#" style={{ border:'1px solid white', borderRadius:'2px', background:'transparent', color: 'white', padding: '0.5rem 1rem', marginRight: '12px' }}>English</a></li>
                    <li><a href="#" style={{ background: '#e50914', borderRadius: '3px', color: 'white', padding: '0.5rem 1rem'}}>Sign In</a></li>
                </Menu>
            </NavCon>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent:'center', alignItems:'center', height: '350px', textAlign: 'center'}}>
                <h1 style={{ fontSize: '3rem', color: 'white' }}>Unlimited movies, TV <br/>
                    shows, and more</h1>
                <h3 style={{fontsize: '1.5rem', color: 'white', fontWeight:'normal', marginTop: '1rem' }}>Watch anywhere. Cancel anytime.</h3>
                <p style={{ fontsize: '1.2rem', color: 'white', fontWeight:'normal', marginTop: '1.5rem'}}>Ready to watch? Enter your email to create or restart your membership.</p>
                <div>
                    <input style={{ padding: '0.8rem 0.8rem', width: '500px', marginTop:'1.5rem' }} type='email' placeholder='Email address' />
                    <button style={{ background:'#e50914', color: 'white', padding: '0.8rem', width: '150px', marginLeft: '1rem', fontsize: '1.5rem' }} type='submit'>Get Started</button>
                </div>
                <ResponsiveCon style={{marginTop: '2rem'}}>&#169; Copyright Netflix Thailand</ResponsiveCon>
            </div>
            </HeaderCon>
        )
        }

        export default Header

    ตัวอย่าง style.jsx

        import styled from 'styled-components'
        import HeaderBG from '../../assets/header-bg.jpg'

        export const HeaderCon = styled.section`
            height: 480px;
            background: url(${HeaderBG});
            box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
        `

        export const NavCon = styled.nav`
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 2rem 4rem;
            svg{
                width: 150px;
                fill: red;
            }
        `

        export const Menu = styled.ul`
            display: flex;
            list-style: none;
            li{

                a{
                    color: white;
                    text-decoration: none;
                }
            }
        `

        export const ResponsiveCon = styled.p`
            color: white;
            @media (max-width: 768px) {
                font-size: 0.8rem;
            }

            @media (min-width: 769px) and (max-width: 1024px) {
                font-size: 1rem;
            }

            @media (min-width: 1025px) {
                font-size: 1.2rem;
            }
        `