import React, { useState } from 'react'
import styled from "styled-components"
import Fondo from "./Images/fondo.png"
import Dark from "./Images/1Dark.JPG"
import Medium from "./Images/1Medium.JPG"
import Molido from "./Images/Molido.JPG"
import useAppContext from '../../Context'
import { Link } from 'react-router-dom'


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
                    h3{
                        font-size: clamp(30px, calc(1vh + 1vw + 10px), calc(1vh + 1vw + 10px));
                        padding: 0 5%;
                        font-family: 'Roboto Mono', monospace;
                    }
                    div{
                        display: flex;
                        flex-direction: column;
                        border-top: 4px solid;
                        justify-content: space-between;
                        padding: 20px 5%;
                        font-size: clamp(25px, calc(2vh + 1vw - 5px), calc(2vh + 1vw - 5px));
                        align-items: center;

                    }
                    button{
                        margin: 20px;
                    }
                    p{
                        margin: 20px 0; 
                        font-size: clamp(35px, calc(2vh + 1vw - 5px), calc(2vh + 1vw - 5px));
                        font-weight: 600;
                        padding: 0;
                    }
                    button{
                        background: #01091f;
                        color: #DAFDFC;
                        font-size: clamp(25px, calc(2vh + 1vw - 5px), calc(2vh + 1vw - 5px));
                        padding: 10px;
                        border-radius: 5px;
                        border: none;
                        cursor: pointer;
                    }
                    h5{
                        font-family: 'Roboto Mono', monospace;
                        font-size: clamp(30px, calc(2vh + 1vw - 5px), calc(2vh + 1vw - 5px));
                        margin: 10px 0;
                    }
                    h6{
                        font-size: clamp(25px, calc(2vh + 1vw - 5px), calc(2vh + 1vw - 5px));
                        margin: 20px 0;
                    }
                }
        }

`

const AddToCartContainer = styled.main`
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgb(0,0,50,.5);
        display: grid;
        place-items: center;
        main{
            border: 3px solid;
            display: grid;
            place-items: center;
            border-radius: 5px;
            background-image: linear-gradient(#0A1640, #01091f);
            color:  #DAFDFC;
            width: clamp(300px, 50%,50%);
            padding: 1rem;
                img{
                    border-radius: 10px;
                    width: clamp(200px,30%,50%);
                }
                span{
                    border: 3px solid;
                    display: grid;
                    justify-content: center;
                    align-items: center;
                    border-radius: 10px;
                    font-size: clamp(25px, calc(2vh + 1vw - 5px), calc(2vh + 1vw - 5px));
                    grid-template-columns: 1fr 1fr 1fr;
                    width: 150px;
                    button{
                        margin: 0;
                        padding: 10px;
                        font-size: clamp(30px, calc(2vh + 1vw - 5px), calc(2vh + 1vw - 5px));
                    }
                    margin-top: 1rem;
                }
                button{
                    background-color: #161f38;
                }
                i{
                    font-size: calc(3rem + 2vw + 2vh);
                }
        }
`


const ImageData = [
    {
        img: Dark,
        texto:"Café tostado oscuro",
        presentaciones: [
            {
                product:"Café tostado oscuro - 1/2 kg",
                item:"Medio kilo",
                precio: 41.90
            },
            {
                product: "Café tostado medio - 1 kg",
                item: "Un kilo",
                precio: 75.90
            } 
        ]
    },
    {
        img: Medium,
        texto:"Café tostado medio",
        presentaciones: [
            {
                product: "Café tostado medio - 1/2 kg",
                item:"Medio kilo",
                precio: 41.90
            },
            {
                product: "Café tostado medio - 1 kg",
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
                product: "Café tostado oscuro - Molido, 250gr",
                item:"Tostado oscuro 250gr",
                precio: 23.90
            },
            {
                product: "Café tostado medio - Molido, 250gr",
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
        <h1>Café orgánico de alta calidad, traído de la selva de Satipo, Junín.</h1>
    </section>
</div>
}

const ConfirmationContainerDiv = ({fn}) => {
    return <AddToCartContainer>
         <main>
             <i className="fas fa-coffee"></i>
            <h5 style={{margin:"2rem 0"}}>Tu producto ha sido añadido al carrito</h5>
            <Link to="/carrito" className="styled-button DarkBack">
                Ir al carrito
            </Link>
            <button onClick={fn} style={{background:"#1F1C30"}}>
                Seguir comprando
            </button>
         </main>
    </AddToCartContainer>
}

const Product = ({data}) => {

    const [AddContainer, setAddContainer] = useState(false)
    const [ConfirmationContainer, setConfirmationContainer] = useState(false)
    const [Count, setCount] = useState(1)

    const {addProduct} = useAppContext()

    const ShowAddCointainer = () => {
        setAddContainer(true)
    }

    const ReduceCount = () => {
        if (Count > 1) setCount(Count-1)
    }

    const CloseAddContainer = () => {
        setAddContainer(false)
    }
    const ChangeConfirmationContainer = () => {
        setConfirmationContainer(!ConfirmationContainer)
    }

    const AddToCart = () => {
        addProduct(data,Count)
        CloseAddContainer()
        ChangeConfirmationContainer()
    }

    return <div>
        {
            ConfirmationContainer && <ConfirmationContainerDiv fn={ChangeConfirmationContainer}/>
        }
        {
            AddContainer ? <AddToCartContainer>
                <main>
                    <i className="fas fa-coffee"></i>
                    <h5>{data.product}</h5>
                    <span>
                        <button onClick={ReduceCount}>
                            -
                        </button>
                        {Count}
                        <button onClick={() => setCount(Count+1)}>
                            +
                        </button>
                    </span>
                    <button className="styled-button DarkBack" onClick={AddToCart}>
                        Añadir al carrito
                    </button>
                    <button style={{background:"#1F1C30"}}
                    onClick={CloseAddContainer}>
                        Cerrar</button>
                </main>
            </AddToCartContainer> : null
        }
    <p>{data.item}</p>
    <span>
    s/. {data.precio}
    </span>
    <button onClick={ShowAddCointainer}>
        Comprar <i className="fas fa-shopping-cart"></i>
    </button>
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
                            <img className="product-main-img" src={data.img}/>
                            <h3>{data.texto}</h3>
                            {
                                data.presentaciones && data.presentaciones.map((info,idx) => {
                                    return <Product data={info} key={idx} data2={data}/>
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
