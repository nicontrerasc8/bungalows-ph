import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Hero from '../../Components/Hero/Hero'
import Logo from "./logo.svg"
import RecomendationsBanner from '../../Components/RecomendationsBanner/RecomendationsBanner'

const Ubicacion = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image:linear-gradient(to left, #01091f, #0c3255);
    color: #DAFDFC;
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
    return <div class="custom-shape-divider-bottom-1639249948">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" class="shape-fill-2"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
}

const Landing = () => {
    return <div className="home-container">
            <article>
                <h1>Disfruta lo mejor de la playa en Punta Hermosa</h1>
                <div>
                <Link to="/bungalows">Mira los bungalows</Link>
                <Link to="/tienda">Tienda</Link>
                </div>
            </article>
            <img src={Logo}/>
        </div>
}
const HomeContainer = () => {
    return <>
        <Landing/>
        <SVG/>
        {/* <GreenOceanBanner/>  */}
        <RecomendationsBanner/>
        <Hero BC="#DAFDFC" color="rgb(0,0,30)" title="¿Por qué elegir Punta Hermosa?" info={WhyInfo} buttonText="Ver los bungalows" buttonPath="/bungalows"/>
        <Ubicacion>
            <h3>Nuestra ubicación:</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d719.5185363210246!2d-76.81785497823863!3d-12.339460219358706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105987c646cce0f%3A0x27728c5354f0d64b!2s28%20de%20Julio%20331%2C%20Punta%20Hermosa%2015846!5e0!3m2!1ses-419!2spe!4v1638224524421!5m2!1ses-419!2spe" allowfullscreen="" loading="lazy"></iframe>
        </Ubicacion>
    </>
}

export default HomeContainer
