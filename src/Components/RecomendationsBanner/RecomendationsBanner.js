import React from 'react'
import styled from 'styled-components'

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
    background-image: linear-gradient(to left, #01091f, #0c3255);
    color: #DAFDFC;
    padding: 20px 5vw;
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
            article{
                width: clamp(280px, 30%, 30%);
               
                display: flex;
                flex-direction: column;
                align-items: center;
                border:3px solid;
                padding: 20px 3%;
                border-radius:10px;
                    
                    p{
                        font-size: calc(2vh + 1vw + 4px);
                    }

                    span{
                        color: #c2fffd;
                        font-size: calc(1vh + 1vw + 4px);
                    }
            }
        }
`

const RecomendationsBanner = () => {
    return <Banner>
            <h1>"Nuestros huéspedes son prioridad."</h1>
            <section>
                {
                    Data && Data.map((data,idx) => {
                        return <article key={idx}>
                            <p>"{data.texto}."</p>
                            <span>{data.fecha}</span>
                        </article>
                    })
                }
            </section>
        </Banner>
}

export default RecomendationsBanner
