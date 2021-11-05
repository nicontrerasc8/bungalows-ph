import { Link } from 'react-router-dom'
import React from 'react'
import styled from 'styled-components'
const Banner = styled.div`
    background-color: #DAFDFC;
    padding: 20px 5vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    
    h2{
        color: #01091f;
        font-weight: 600;
        font-family: 'Roboto Mono', monospace;
        font-size: calc(10px + 1vh + 1vw);
    }
`

const GreenOceanBanner = () => {
    return <Banner>
        <h2>Disfruta el mejor café con Green Ocean Coffee</h2>
        <Link to="/green-ocean-coffee" className="styled-button">
            Ver productos
        </Link>
    </Banner>
}

export default GreenOceanBanner
