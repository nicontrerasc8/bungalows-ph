import React, { useState } from 'react'
import styled from 'styled-components'
import Familiar from "./Familiar.png"
import Familiar2 from "./Familiar2.png"
import Matrimonial from "./Matrimonial.png"

const VideoDiv = styled.div`
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    position: fixed;
    z-index: 15;
    background-color: rgba(0,0,30,.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    iframe{
        width: clamp(300px, 50%, 50%);
        height: 400px;
        border: 3px solid #c2fffd;
        border-radius: 10px;
    }

    button{
        margin-top: 1rem;
        font-size: calc(1vh + 20px);
        border-radius: 5px;
        cursor: pointer;
        color: #c2fffd;
        padding: 5px;
        background: rgb(0,0,30);
        border: 3px solid;
    }

`

const BungGridDiv = styled.div`
margin-top: calc(8vh + 2rem);
text-align: center;
justify-content: center;
padding: 40px 5vw;
width: 90vw;

img{
    width: 80%;
    border-radius: 5px;
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
    color: #01091f;
    background-color: #c2fffd;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 4px solid;
    border-radius: 20px;
    padding: 20px 5%;
    width: clamp(300px, 35%, 40%);
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
    ul{
        margin: 40px 0;
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
        Image: Familiar,
        Title: "Bungalow familiar",
        src: "https://www.youtube.com/embed/IfDC6vYdn1Y",
        Button: true,
        ul:[
            "Una cama queen", "Un camarote", "Un baño privado", "Cocina", "TV", "Refrigeradora", "Terraza con poltronas y vista al mar", "Wifi"
        ]
    },
    {
        Number: 302,
        Image: Matrimonial,
        Title: "Bungalow matrimonial",
        src: "https://www.youtube.com/embed/V38M4pdgsCE",
        Button: true,
        ul:[
            "Cama queen con vista al mar", "Dos sofá cama", "Kitchenette bar", "Baño con terma", "Terraza con vista al mar", "Parrilla eléctrica", "Sala de estar", "Vigilancia 24 horas", "Amoblado y equipado" 
        ]
    },
    {
        Number: 401,
        Image: Familiar2,
        Title: "Bungalow familiar",
        Button: false,
        src:"https://drive.google.com/file/d/1xtqxefS0q-_pjuHIxIAPRz9VuOnsdSlD/view?usp=sharing",
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
    const [Video, setVideo] = useState(false)
    const [VideoSrc, setVideoSrc] = useState("")
    const [Detalles, setDetalles] = useState(false)

    const ChangeVideoValue = (source) => {
        setVideo(!Video)
        setVideoSrc(source)
    }


    return <BungGridDiv>
        {
            Video && <VideoDiv>
                <iframe 
                src={VideoSrc} 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; full-screen" 
                allowfullscreen></iframe>
                <button onClick={ChangeVideoValue}>
                    Cerrar vídeo
                </button>
            </VideoDiv>
        }
            <section>
                {
                    BungInfo && BungInfo.map((data, idx) => {
                        return <article key={idx}>
                            <h1>{data.Number}</h1>
                            <img src={data.Image}/>
                            <h3>{data.Title}</h3>
                            {
                                data.Button ? <button className="styled-button bg-transparent" onClick={
                                    () => ChangeVideoValue(data.src)
                                } >Ver vídeo</button>
                                : <a href={data.src} target="_blank">
                                <button className="styled-button bg-transparent">
                                    Ver PDF
                                </button>
                            </a>
                            }
                            <button className="styled-button" onClick={() => setDetalles(!Detalles)}>{Detalles ? "Ocultar detalles" : "Ver detalles"}</button>
                            {
                                Detalles && <ul>
                                {data.ul && data.ul.map((info, id) => {
                                    return <li key={id}>{info}</li>
                                })}
                                </ul>
                            }
                        </article>
                    })
                }
            </section>
        </BungGridDiv>

}

export default BungContainer
