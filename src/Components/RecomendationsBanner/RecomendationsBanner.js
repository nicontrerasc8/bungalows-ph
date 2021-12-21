import React from 'react'
import styled from 'styled-components'
import StyledButton from '../Theme/StyledButton'
import {DarkTheme, LightTheme} from "../Theme/Theme"

const Data = [
    {
        texto: "Todo excelente, los estoy recomendando a todo el mundo",
        fecha: "Agosto, 2021"
    },
    {
        texto: "Muy contentas y con ganas de regresar",
        fecha: "Julio, 2021",
    },
    {
        texto: "A mis amigos les encantó el lugar",
        fecha: "Setiembre, 2021",
    }
]

const Banner = styled.div`
    background: ${(props) => props.theme.DarkBlue};
    color: ${(props) => props.theme.LightBlue};
    padding: 3rem 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
        h1{
            font-size: calc(20px + 1vh + 1vw);
            margin-bottom: 30px;
        }
        section{
            display: flex;
            flex-wrap: wrap;
            grid-gap: 1rem;
            justify-content: center;
            margin-bottom: 2rem;
            article{
                width: clamp(280px, 30%, 30%);
                justify-content: center;
                display: flex;
                flex-direction: column;
                align-items: center;
                border:4px solid;
                padding: 20px 3%;
                border-radius:10px;
                    
                    p{
                        font-size: calc(2vh + 1vw + 4px);
                    }

                    span{
                        font-size: calc(1vh + 1vw + 4px);
                    }
            }
        }
`

const RecomendationsBanner = ({IsLight}) => {
    return <Banner theme={IsLight ? LightTheme : DarkTheme}>
            <h1>"Nuestros huéspedes son prioridad."</h1>
            <section>
                {
                    Data && Data.map((data,idx) => {
                        return <article key={idx} className={"yellow-border"}>
                            <p>"{data.texto}."</p>
                            <span>{data.fecha}</span>
                        </article>
                    })
                }
            </section>
            <StyledButton path="/bungalows" color={LightTheme.Orange} texto="Mira los bungalows" letra={LightTheme.Dark}/>
        </Banner>
}

export default RecomendationsBanner
