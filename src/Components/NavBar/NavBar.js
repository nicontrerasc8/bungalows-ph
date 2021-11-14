import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useAppContext from '../../Context'
import Logo from "./CoolLogo.png"

const NavBar = () => {
    const [IsPhone, setIsPhone] = useState(false)
    const [WindowWidth, setWindowWidth] = useState(window.innerWidth)
    const {productsCount} = useAppContext()

    const ReSizeWindow = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', ReSizeWindow)
        if(WindowWidth < 600) setIsPhone(true)
        else setIsPhone(false)
        return 0;
    }, [WindowWidth])
    return (
        <nav>
            <Link to="/">
                {
                    IsPhone ? 
                    <img src={Logo} alt="Punta Hermosa"/> : <h1>
                    Bungalows PH
                </h1>
                }
            </Link>

            <section>
            <Link to={productsCount() > 0 ? "/carrito" : "/green-ocean-coffee"} className="cart-button">
                <i className="fas fa-shopping-cart"></i> ({productsCount()})
                </Link>
            <Link to="/reservas" className="styled-button DarkBack">¡Reserva ya!</Link>
            </section>
            
        </nav>
    )
}

export default NavBar
