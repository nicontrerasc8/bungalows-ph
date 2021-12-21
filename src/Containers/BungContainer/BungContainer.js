import React, { useState } from 'react'
import styled from 'styled-components'
import StyledButton from "../../Components/Theme/StyledButton"
import { LightTheme } from '../../Components/Theme/Theme'

const BungGridDiv = styled.div`
margin-top: calc(8vh + 2rem);
justify-content: center;
padding: 40px 5vw;

iframe{
    width: 100%;
    border-radius: 10px;
    border: 4px solid;
    height: clamp(30vh, 25rem,25rem);
    margin-bottom: 2rem;
}

h2{
    font-size: calc(1vh + 2vw + 1rem);
}

section{
    color: white;
    display: flex;
flex-wrap: wrap;
grid-gap: 3rem;
justify-content: center;
}

article{
    color: ${(props) => props.theme.DarkBlue};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    border: 4px solid;
    border-radius: 10px;
    padding: 20px 5%;
    width: clamp(300px, 60%, 60%);
    h1{
        margin: 20px 0 0 0;
        font-size: calc(2vw + 2vh + 3rem);
    }
    button{
        margin-bottom: 20px;
    }
    h3{
        margin: 10px 0 40px 0;
        font-size: calc(1vw + 2vh + 1rem);
    }
    p{
        font-size: calc(1vw + 2vh + 1rem);
        margin: 0;
    }
    ul{
        margin: 0 0 40px 0;
        li{
            text-align: left;
            font-size: 30px;
            margin-top: 10px;
        }
    }
}`

const BungInfo = [
    {
        Number: 202,
        Title: "Bungalow familiar",
        src: "https://www.youtube.com/embed/OsW_wRDZb8E",
        Button: true,
        ul:[
            "Una cama queen", 
            "Un camarote", 
            "Un baño privado", 
            "Cocina", 
            "TV", 
            "Refrigeradora", 
            "Terraza con poltronas y vista al mar", 
            "Wifi"
        ]
    },
    {
        Number: 302,
        Title:"Bungalow matrimonial",
        src: "https://www.youtube.com/embed/V38M4pdgsCE",
        Button: true,
        ul:[
            "Cama queen con vista al mar", 
            "Dos sofá cama", "Kitchenette bar", 
            "Baño con terma", "Terraza con vista al mar", 
            "Parrilla eléctrica", 
            "Sala de estar", 
            "Vigilancia 24 horas", 
            "Amoblado y equipado" 
        ]
    },
    {
        Number: 401,
        Title: "Bungalow familiar",
        Button: false,
        src:"https://www.youtube.com/embed/T95_Vw21di8",
        ul:[
            "Un dormitorio.",
            "Un baño.",
            "Sofá cama.",
            "Kitchenette bar.",
            "Parrilla a gas.",
            "Ducha exterior.",
            "Comedor exterior.",
            "Vigilancia 24 horas.",
           "Completamente amoblado y equipado."
        ]
    },
]

const BungContainer = () => {

    const [OpenDialog, setOpenDialog] = useState(false)
    const [DialogValue, setDialogValue] = useState(202)

    const ChangeDialogValue = () => {
        setOpenDialog(!OpenDialog)
    }

    return <BungGridDiv>
        
            <section>
                {
                    BungInfo && BungInfo.map((data, idx) => {
                        return <article key={idx}>
                            <h1>{data.Number}</h1>
                            <img src={data.Image}/>
                            <h3>{data.Title}</h3>
                           <iframe src={data.src}
                           title="YouTube video player" 
                           frameborder="0" 
                           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen/>
                            <StyledButton hyperLink={`https://api.whatsapp.com/send?phone=51949161510&text=${`¡Hola!, me gustaría saber los precios del bungalow ${data.Number}.`}`} texto="Consulta los precios" color={LightTheme.Orange} letra={LightTheme.Dark}/>
                            <p>Incluye:</p>
                                <ul>
                                {data.ul && data.ul.map((info, id) => {
                                    return <li key={id}>{info}</li>
                                })}
                                </ul>
                                {/* <StyledButton Callback={ChangeDialogValue} texto="Reserva el bungalow" color={LightTheme.Yellow} letra={LightTheme.Dark}/> */}
                        </article>
                    })
                }
            </section>
        </BungGridDiv>

}

export default BungContainer
