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

