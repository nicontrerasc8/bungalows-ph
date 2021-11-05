import React from 'react'
import styled from "styled-components"
import Fondo from "./Images/fondo.png"
import Dark from "./Images/1Dark.JPG"
import Medium from "./Images/1Medium.JPG"
import Molido from "./Images/Molido.JPG"


const BackGround = styled.div`
    position: absolute;
    z-index: 0;
    width: clamp(500px, 100%,100%);
    height: 100%;
    background-size: 100% 100%;
    background-image:url(${Fondo});
`

const ProductSection = styled.div`
    width: 90%;
    padding: 2rem 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

        h2{
            font-size: calc(1vh + 2vw + 1rem);
            font-family: 'Roboto Mono', monospace;
        }

        section{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            padding: 20px;
            justify-content: center;
            grid-gap: 30px;
                article{
                    background-color:;
                    width: clamp(300px, 25%, 25%);
                    padding: 0;
                    border: 4px solid;
                    border-radius: 13px;
                    img{
                        width: 100%;
                        height: 500px;
                        border-top-left-radius: 10px;
                        border-top-right-radius: 10px;
                    }
                    h3{
                        font-size: clamp(30px, calc(1vh + 1vw + 10px), calc(1vh + 1vw + 10px));
                        padding: 0 5%;
                        font-family: 'Roboto Mono', monospace;
                    }
                    div{
                        display: flex;
                        flex-wrap: wrap;
                        border-top: 4px solid;
                        justify-content: space-between;
                        padding: 20px 5%;
                        font-size: clamp(25px, calc(1vh + 1vw), calc(1vh + 1vw));
                        align-items: center;
                    }
                    button{
                        margin-left: 10px;
                    }
                    p{
                        margin: 0;
                        padding: 0;
                    }
                    button{
                        background: #01091f;
                        color: #DAFDFC;
                        font-size: clamp(17px, calc(1vh + 1vw - 5px), calc(1vh + 1vw - 5px));
                        padding: 10px;
                        border-radius: 5px;
                        border: none;
                    }
                }
        }

`

const ImageData = [
    {
        img: Dark,
        texto:"Café tostado oscuro",
        presentaciones: [
            {
                item:"Medio kilo",
                precio: 41.90
            },
            {
                item: "Un kilo",
                precio: 41.90
            } 
        ]
    },
    {
        img: Medium,
        texto:"Café tostado medio",
        presentaciones: [
            {
                item:"Medio kilo",
                precio: 41.90
            },
            {
                item: "Un kilo",
                precio: 75.90
            } 
        ]
    },
    {
        img: Molido,
        texto: "Café molido",
        presentaciones: [
            {
                item:"Tostado oscuro 250gr",
                precio: 23.90
            },
            {
                item: "Tostado medio 250gr",
                precio: 23.90
            } 
        ]
    }
]

const Landing = () => {
    return <div className="home-container green-ocean">
    <BackGround/>
    <section>
        <h1>Café orgánico de alta calidad, traído directo de la selva de Satipo, Junín.</h1>
    </section>
</div>
}

const GOContaniner = () => {
    return  <>
        <Landing/>
        <ProductSection>
            <h2>Productos</h2>
            <section>
                {
                    ImageData && ImageData.map((data,idx) => {
                        return <article key={idx}>
                            <img src={data.img}/>
                            <h3>{data.texto}</h3>
                            {
                                data.presentaciones && data.presentaciones.map((info,idx) => {
                                    return <div key={idx}>
                                        <p>{info.item}</p>
                                        <span>
                                        s/.{info.precio}
                                        <button>
                                            <i className="fas fa-shopping-cart"></i>
                                        </button>
                                        </span>
                                    </div>
                                })
                            }
                        </article>
                    }) 
                }
            </section>
        </ProductSection>
    </>
}

export default GOContaniner
