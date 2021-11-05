import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import GreenOceanBanner from '../../Components/GreenOceanBanner/GreenOceanBanner'
import Hero from '../../Components/Hero/Hero'
import RecomendationsBanner from '../../Components/RecomendationsBanner/RecomendationsBanner'
import Back from "./back.png"

const BackGround = styled.div`
position: absolute;
z-index: 0;
width: 120%;
height: 100%;
background-size: 100% 150%;
background-image:url(${Back});
`
const WhyInfo = [
    {
        icon: "fas fa-umbrella-beach",
        title: "Linda playa",
        text: "En temporada de verano, la playa de Punta Hermosa es una de las más atractivas del sur.",
    },
    {
        icon: "fas fa-store",
        title: "Lugares de compra",
        text: "Podrás comprar lo que necesites sin tener que salir de Punta Hermosa.",
    },
    {
        icon: "fas fa-snowboarding",
        title: "Ideal para surfing",
        text: "Olas de todo tipo, para todo gusto. El surfing es uno de los principales atractivos.",
    },
    {
        icon: "fas fa-utensils",
        title: "Restaurantes de primera",
        text: "Cerca de tu bungalow podrás elegir entre los muchos restaurantes que hay.",
    },
    {
        icon: "fas fa-car",
        title: "Cerca de Lima",
        text: "Un viaje de duración de máximo 1 hora desde Lima en auto.",
    },
]

// const BungInfo =[
//     {

//     }
// ]

const Landing = () => {
    return <div className="home-container">
            <BackGround/>
            <section>
                <h1>Disfruta lo mejor de la playa en Punta Hermosa</h1>
                <Link to="/bungalows">Mira los bungalows</Link>
            </section>
        </div>
}
const HomeContainer = () => {
    return <>
        <Landing/>
        <GreenOceanBanner/> 
        <RecomendationsBanner/>
        <Hero BC="#DAFDFC" color="rgb(0,0,30)" title="¿Por qué elegir Punta Hermosa?" info={WhyInfo} buttonText="Ver los bungalows" buttonPath="/bungalows"/>
    </>
}

export default HomeContainer
