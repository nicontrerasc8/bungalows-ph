import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Hero from '../../Components/Hero/Hero'
import Logo from "./logo.svg"
import RecomendationsBanner from '../../Components/RecomendationsBanner/RecomendationsBanner'
import useAppContext from '../../Context'
import { DarkTheme, LightTheme } from '../../Components/Theme/Theme'
import StyledButton from '../../Components/Theme/StyledButton'

const Ubicacion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.Background && props.Background};
    color: ${props => props.Color && props.Color};
    padding-bottom: 3rem;

        h3{
            font-size: calc(1vw + 1vh + 1rem);
        }

        iframe{
            width: clamp(300px, 50vw, 50vw);
            height: clamp(300px, 30vw, 30vw);
            border: 3px solid #DAFDFC;
            border-radius: 10px;
        }

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

const SVG = () => {
    const {IsLightTheme} = useAppContext()
    return <div className="custom-shape-divider-bottom-1639756025">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" fill={IsLightTheme ? LightTheme.DarkBlue : DarkTheme.DarkBlue}></path>
    </svg>
</div>
}
const SVG2 = () => {
    const {IsLightTheme} = useAppContext()
    return <div class="custom-shape-divider-top-1640116466">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        fill={IsLightTheme ? LightTheme.DarkBlue : DarkTheme.DarkBlue}></path>
    </svg>
</div>
}
const SVG3 = () => {
    const {IsLightTheme} = useAppContext()
    return <div class="custom-shape-divider-bottom-1640116882">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
        fill={IsLightTheme ? LightTheme.DarkBlue : DarkTheme.DarkBlue}></path>
    </svg>
</div>
}

const Landing = () => {
    const {IsLightTheme} = useAppContext()
    return <div className="home-container">
            <article>
                <h1>Disfruta lo mejor de la playa en Punta Hermosa</h1>
               <div>
                <StyledButton path="/bungalows" color={LightTheme.Orange} letra={LightTheme.Dark} texto={<span>Ver bungalows <i className="fas fa-home"></i></span>}/>
                <StyledButton path="/tienda" color={LightTheme.Yellow} letra={LightTheme.Dark} texto={<span>Tienda <i className="fas fa-store"></i></span>}/>
               </div>
            </article>
            <iframe src="https://www.youtube.com/embed/cep1nKmPP-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
        </div>
}
const HomeContainer = () => {
    const {IsLightTheme} = useAppContext()
    return <>
        <Landing/>
        <SVG/> 
        {/* <GreenOceanBanner/>  */}
        <RecomendationsBanner IsLight={IsLightTheme}/>
        <SVG2/>
        <Hero 
            BC={IsLightTheme ? LightTheme.LightBlue : DarkTheme.LightBlue} 
            color={IsLightTheme ? LightTheme.DarkBlue : DarkTheme.DarkBlue} 
            title="¿Por qué elegir Punta Hermosa?" info={WhyInfo} 
            btnColor={LightTheme.Yellow} btnLeter={LightTheme.Dark}
            buttonText="Ver los bungalows" buttonPath="/bungalows"/>
            <SVG3/>
        <Ubicacion 
        Background={IsLightTheme ? LightTheme.DarkBlue : DarkTheme.DarkBlue} 
        Color={IsLightTheme ? LightTheme.LightBlue : DarkTheme.LightBlue}    >
            <h3>Nuestra ubicación:</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d719.5185363210246!2d-76.81785497823863!3d-12.339460219358706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105987c646cce0f%3A0x27728c5354f0d64b!2s28%20de%20Julio%20331%2C%20Punta%20Hermosa%2015846!5e0!3m2!1ses-419!2spe!4v1638224524421!5m2!1ses-419!2spe" allowfullscreen="" loading="lazy"></iframe>
        </Ubicacion>
    </>
}

export default HomeContainer
