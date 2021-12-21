import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useAppContext from '../../Context'
import LightLogo from "./LightLogo.png"
import DarkLogo from "./DarkLogo.png"
import StyledButton from "../Theme/StyledButton"
import { DarkTheme, LightTheme } from '../Theme/Theme' 
import { useHistory } from 'react-router-dom'

const NavBarComponent = styled.nav`
    width: 100vw;
    height: 110px;
    padding: 0px 5vw;
    display: flex;
    position: fixed;
    border-bottom: 4px solid ${(props) => props.theme.Blue};
    z-index: 5;
    top: 0;
    left: 0;
    flex-direction: row;
    background-color: ${(props) => props.theme.LightBlue};
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme.DarkBlue};
        h1{
            font-size: calc(1vw + 2vh + 1rem);
            color: ${(props) => props.theme.DarkBlue};
        }
        section{
            display: flex;
            grid-gap: 20px;
        }
        img{
            height: 80px;
        }
        aside{
            position: absolute;
            top: 110px;
            width: 100vw;
            padding: 20px 5vw;
            transition: 1s;
            left: ${props => props.IsOn ? "0px" : "-100vw"};
            background: ${(props) => props.theme.DarkBlue};
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            gap: 1rem;
        }
`

const NavBar = () => {
    const [IsPhone, setIsPhone] = useState(false)
    const [WindowWidth, setWindowWidth] = useState(window.innerWidth)
    const {IsLightTheme, setIsLightTheme} = useAppContext()
    const [ToggleMenu, setToggleMenu] = useState(false)

    const ReSizeWindow = () => {
        setWindowWidth(window.innerWidth)
    }

    const ChangePalette = () => {
        setIsLightTheme(!IsLightTheme)
    }

    let history = useHistory()

    const ChangeRoute = (route) => {
        history.push(route)
        setToggleMenu(false)
    }

    useEffect(() => {
        window.addEventListener('resize', ReSizeWindow)
        if(WindowWidth < 600) setIsPhone(true)
        else{
            setIsPhone(false)
            setToggleMenu(false)
        }
        return 0;
    }, [WindowWidth])
    return (
        <NavBarComponent IsOn={ToggleMenu}>
            <Link to="/">
                {
                    IsPhone ? 
                    <img src={IsLightTheme ? LightLogo : DarkLogo} alt="Punta Hermosa"/> : <h1>
                    Bungalows PH
                </h1>
                }
            </Link>

            <section>
                <StyledButton Callback={ChangePalette} color={IsLightTheme ? LightTheme.DarkBlue : DarkTheme.DarkBlue} letra={IsLightTheme ? LightTheme.LightBlue : DarkTheme.LightBlue} texto={IsLightTheme ? <i className="fas fa-moon"></i> : <i className="fas fa-sun"></i>}/>
                {
                    IsPhone ? 
                    <StyledButton Callback={() => setToggleMenu(!ToggleMenu)} 
                        color={IsLightTheme ? LightTheme.LightBlue : DarkTheme.LightBlue} 
                        letra={IsLightTheme ? LightTheme.DarkBlue : DarkTheme.DarkBlue}
                        texto={ToggleMenu ? <i className="fas fa-sign-out-alt"></i> : <i className="fas fa-bars"></i>} /> : <>
                    <StyledButton path="/bungalows" color={LightTheme.Orange} letra={LightTheme.Dark} texto={<span>Bungalows <i className="fas fa-home"></i></span>}/>
                    <StyledButton path="/tienda" color={LightTheme.Yellow} letra={LightTheme.Dark} texto={<span>Tienda <i className="fas fa-store"></i></span>}/></>
                }
            </section>
            <aside className={ToggleMenu ? "active" : undefined}>
                <StyledButton Callback={() => ChangeRoute("/bungalows")} color={LightTheme.Orange} letra={LightTheme.Dark} texto={<span>Bungalows <i className="fas fa-home"></i></span>}/>
                <StyledButton Callback={() => ChangeRoute("/tienda")} color={LightTheme.Yellow} letra={LightTheme.Dark} texto={<span>Tienda <i className="fas fa-store"></i></span>}/>
            </aside>
        </NavBarComponent>
    )
}

export default NavBar
