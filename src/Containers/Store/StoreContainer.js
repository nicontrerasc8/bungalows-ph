import React, { useState } from 'react'
import Backdrop from "../../Components/Backdrop"
import { Modal } from '../../Components/Theme/Theme'
import styled from "styled-components"
import Dark from "./Images/1Dark.JPG"
import Medium from "./Images/1Medium.JPG"
import Molido from "./Images/Molido.JPG"
import useAppContext from '../../Context'
import Aceite from "./aceite.svg"
import Cafe from "./cafe.svg"
import FrutosSecos from "./frutos-secos.svg"
import Honey from "./honey.svg"
import Milk from "./milk.svg"
import Salt from "./salt.svg"
import Cereales from "./cereales.svg"
import LecheLD from "./Images/leche.JPG"
import GranolaLD from "./Images/GranolaDehesa.JPG"
import MielLD from "./Images/mielDehesa.JPG"
import HdeNaranja from "./Images/naranja.jpeg" 
import Pasuchaca from "./Images/Pasuchaca.jpeg"
import FlorDeArena from "./Images/florDeArena.jpeg"
import Hercampuri from "./Images/Hercampuri.jpeg"
import FenoGreco from "./Images/Fenogreco.jpeg"
import Beterraga from "./Images/beterraga.jpeg"
import Zanahoria from "./Images/zanahoria.jpeg"
import FlorDeJamaica from "./Images/florDeJamaica.jpeg"
import SalDeMaras from "./Images/salDeMaras.jpeg"
import SalDeMarasNormal from "./Images/salRosada.jpeg"
import Algarrobina from "./Images/algarrobina.jpeg"
import MielDeAbejaCom from "./Images/MielDeAbejaCom.jpeg"
import MielDeAbejaOrg from "./Images/MielOrganica.jpeg"
import Polen from "./Images/pollenNutrinellas.jpeg"
import AceiteOliva from "./Images/aceiteOliva.jpeg"
import AceiteSachaInchi from "./Images/AceiteSachainchi.jpeg"
import AceitePalta from "./Images/AceiteDePalta.jpeg"
import AceiteCastañas from "./Images/AceiteDeCastañas.jpeg"
import AceiteLinaza from "./Images/AceiteLinaza.jpeg"
import AceiteCoco from "./Images/AceiteDeCoco.jpeg"
import AceiteAjonoli from "./Images/AceiteAjonjoli.jpeg"
import { DarkTheme, LightTheme } from '../../Components/Theme/Theme'
import StyledButton from '../../Components/Theme/StyledButton'

const ProductSection = styled.div`
    width: 100vw;
    margin-top: 8vh;
    background: ${(props) => props.theme.LightBlue};
    padding: 2rem 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
        h2{
            font-size: calc(1vh + 1vw + 2rem);
            margin-bottom: 1rem;
        }
        h4{
            margin: 0 0 1rem 0;
            font-size: calc(1vw + 1rem);
        }
        section{
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            padding: 20px;
            align-items: flex-start;
            justify-content: center;
            grid-gap: 30px;
                article{
                    width: clamp(300px, 25%, 25%);
                    border: 5px solid;
                    border-radius: 13px;
                    h3{
                        font-size: clamp(3rem, calc(1vh + 1vw + 10px), calc(1vh + 1vw + 10px));
                        padding: 0 5%;
                        margin: 20px 0;
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
                        margin: 1rem 0 0 0;
                        border: none;
                        font-size: clamp(25px, calc(2vh + 1vw - 5px), calc(2vh + 1vw - 5px));
                    }
                    p{
                        margin: 20px 0; 
                        font-size: clamp(35px, calc(2vh + 1vw - 5px), calc(2vh + 1vw - 5px));
                        font-weight: 500;
                        padding: 0;
                    }
                    h5{
                        strong{text-transform: lowercase;};
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
            border: 4px solid;
            display: flex;
            flex-direction: column;
            align-items: center;
            border-radius: 10px;
            background: ${(props) => props.theme.LightBlue};
            color: ${(props) => props.theme.DarkBlue};
            max-width: clamp(300px, 50%,50%);
            padding: 1rem;
                img{
                    border-radius: 10px;
                    width: clamp(200px,30%,50%);
                }
                i{
                    font-size: calc(3rem + 2vw + 2vh);
                }
        }
`

const GridOfCat = styled.table`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    grid-gap: 1rem;
    tr{
        display: flex;
        flex-direction: column;
        width: clamp(150px, 30%, 30%);
        align-items: center;
        padding: 10px;
        justify-content: center;
        border: 4px solid;
        border-radius: 5px;
        cursor: pointer;
        img{
            width: 60%;
        }
        h3{
            font-size: calc(1vw + 1vh + 1rem);
            margin-top: 0;
        }
        &:hover{
            background-color: ${(props) => props.theme.DarkBlue};
            color: ${(props) => props.theme.LightBlue};
            border-color: ${(props) => props.theme.DarkBlue};
        }
    }
`


const ImageData = [
    {
        img: MielLD,
        id: 4,
        texto:"Miel de panela natural",
        presentaciones: [
            {
                item:"450 ml",
                precio: 17.5,
            },
        ]
    },
    {
        img: LecheLD,
        id: 5,
        texto:"Yogurt natural con probióticos",
        presentaciones: [
            {
                item:"Un litro",
                precio: 17.5,
            },
        ]
    },
    {
        img: GranolaLD,
        id: 7,
        texto:"Granola",
        presentaciones: [
            {
                item:"250gr",
                precio: 17.5,
            },
        ]
    },
    {
        img: Dark,
        id: 2,
        texto:"Café tostado oscuro",
        presentaciones: [
            {
                item:"Medio kilo",
                precio: 41.90,
            },
            {
                item: "Un kilo",
                precio: 75.90,
            } 
        ]
    },
    {
        img: Medium,
        id: 2,
        texto:"Café tostado medio",
        presentaciones: [
            {
                item:"Medio kilo",
                precio: 41.90,
            },
            {
                item: "Un kilo",
                precio: 75.90,
            } 
        ]
    },
    {
        img: Molido,
        id: 2,
        texto: "Café molido",
        presentaciones: [
            {
                item:"Tostado oscuro 250gr",
                precio: 23.90,
            },
            {
                item: "Tostado medio 250gr",
                precio: 23.90,
            } 
        ]
    },
    {
        img: HdeNaranja,
        id: 3,
        texto: "Harina de naranja",
        presentaciones: [
            {
                item:"100gr",
                precio: 16,
            },
        ]
    },
    {
        img: FlorDeArena,
        id: 3,
        texto: "Flor de arena",
        presentaciones: [
            {
                item:"100gr",
                precio: 13,
            },
        ]
    },
    {
        img: FlorDeJamaica,
        id: 3,
        texto: "Flor de jamaica",
        presentaciones: [
            {
                item:"100gr",
                precio: 18,
            },
        ]
    },
    {
        img: Pasuchaca,
        id: 3,
        texto: "Pasuchaca",
        presentaciones: [
            {
                item:"100gr",
                precio: 22,
            },
        ]
    },
    {
        img: Hercampuri,
        id: 3,
        texto: "Hercampuri",
        presentaciones: [
            {
                item:"100gr",
                precio: 18,
            },
        ]
    },
    {
        img: Zanahoria,
        id: 3,
        texto: "Zanahoria",
        presentaciones: [
            {
                item:"100gr",
                precio: 16,
            },
        ]
    },
    {
        img: Beterraga,
        id: 3,
        texto: "Beterraga",
        presentaciones: [
            {
                item:"100gr",
                precio: 18,
            },
        ]
    },
    {
        img: SalDeMaras,
        id: 6,
        texto: "Sal rosada de maras gourmet",
        presentaciones: [
            {
                item:"500gr",
                precio: 8,
            },
            {
                item: "1kg",
                precio: 14
            }
        ]
    },
    {
        img: SalDeMarasNormal,
        id: 6,
        texto: "Sal rosada de maras",
        presentaciones: [
            {
                item:"500gr",
                precio: 6,
            },
            {
                item: "1kg",
                precio: 12
            }
        ]
    },
    {
        img: Algarrobina,
        id: 3,
        texto: "Algarrobina orgánica",
        presentaciones: [
            {
                item:"250gr",
                precio: 17,
            },
            {
                item: "500gr",
                precio: 25
            }
        ]
    },
    {
        img: MielDeAbejaCom,
        id: 4,
        texto: "Miel de abeja comercial",
        presentaciones: [
            {
                item:"250gr",
                precio: 11,
            },
            {
                item: "500gr",
                precio: 20
            },
            {
                item: "1kg",
                precio: 35,
            }
        ]
    },
    {
        img: MielDeAbejaOrg,
        id: 4,
        texto: "Miel de abeja orgánica",
        presentaciones: [
            {
                item:"250gr",
                precio: 16,
            },
            {
                item: "500gr",
                precio: 26
            },
            {
                item: "1kg",
                precio: 48,
            }
        ]
    },
    {
        img: Polen,
        id: 4,
        texto: "Polen Nutrinellas",
        presentaciones: [
            {
                item:"170gr",
                precio: 15,
            },
        ]
    },
    {
        img: AceiteOliva,
        id: 1,
        texto: "Aceite de oliva",
        presentaciones: [
            {
                item:"200gr",
                precio: 12,
            },
            {
                item:"250gr",
                precio: 15,
            },
            {
                item:"500gr",
                precio: 25,
            },
            {
                item:"1kg",
                precio: 35,
            },
        ]
    },
    {
        img: AceiteSachaInchi,
        id: 1,
        texto: "Aceite de Sachainchi",
        presentaciones: [
            {
                item:"250gr",
                precio: 25,
            },
        ]
    },
    {
        img: AceitePalta,
        id: 1,
        texto: "Aceite de palta",
        presentaciones: [
            {
                item:"250gr",
                precio: 45,
            },
        ]
    },
    {
        img: AceiteCastañas,
        id: 1,
        texto: "Aceite de castañas",
        presentaciones: [
            {
                item:"250gr",
                precio: 38,
            },
        ]
    },
    {
        img: AceiteCoco,
        id: 1,
        texto: "Aceite de coco",
        presentaciones: [
            {
                item:"250gr",
                precio: 26,
            },
        ]
    },
    {
        img: AceiteAjonoli,
        id: 1,
        texto: "Aceite de ajonjolí",
        presentaciones: [
            {
                item:"250gr",
                precio: 25,
            },
        ]
    },
    {
        img: AceiteLinaza,
        id: 1,
        texto: "Aceite de linaza",
        presentaciones: [
            {
                item:"250gr",
                precio: 27,
            },
        ]
    },
]

const Product = ({data, CallBack, theme}) => {

    const {addProduct} = useAppContext()




    return <div>
    <p>{data.item}</p>
    <span>
        s/. {data.precio}
    </span>
    <StyledButton Callback={CallBack} color={theme.DarkBlue} letra={theme.LightBlue} texto={<span>Comprar <i className="fas fa-shopping-cart"></i></span>}/>
</div>
}

const ArrOfCategories =[
    {
        img: Aceite,
        text: "Aceite",
        id: 1,
    },
    {
        img: Cafe,
        text: "Café",
        id: 2,
    },
    {
        img: Cereales,
        text: "Cereales",
        id: 7,
    },
    {
        img: FrutosSecos,
        text: "Frutos secos",
        id: 3,
    },
    {
        img: Honey,
        text: "Miel",
        id: 4,
    },
    {
        img: Milk,
        text: "Lácteos",
        id: 5,
    },
    {
        img: Salt,
        text: "Sal",
        id: 6,
    },
]

const StoreContaniner = () => {

    const [Category, setCategory] = useState("")
    const [ChangeCat, setChangeCat] = useState(true)
    const {IsLightTheme} = useAppContext()
    const [AddContainer, setAddContainer] = useState(false)
    const [Count, setCount] = useState(1)
    const [ItemSize, setItemSize] = useState("dde")
    const [ItemText, setItemText] = useState("deed")
    const [ItemPrice, setItemPrice] = useState(1)

    const ChangeCategory = (parametro) => {
        setCategory(parametro);
        setChangeCat(false);
        window.scrollTo(0, 0);
    } 
    const OpenAddContainer = (size, text, price) => {
        setItemSize(size)
        setItemText(text)
        setItemPrice(price)
        setAddContainer(true)
    }
    const ReduceCount = () => {
        if (Count > 1) setCount(Count-1)
    }


    return  <>
        <ProductSection theme={IsLightTheme ? LightTheme : DarkTheme}>
            <Backdrop isOn={AddContainer} event={() => setAddContainer(false)}>
                <Modal>
                <h5 className='Product-Cart-Title'>{ItemText} <strong>{ItemSize}</strong></h5> 
                        <span className='counter'>
                            <button style={{borderRadius:"5px 0 0 5px"}} onClick={ReduceCount}>
                                -
                            </button>
                            {Count}
                            <button style={{borderRadius:"0 5px 5px 0"}} onClick={() => setCount(Count+1)}>
                                +
                            </button>
                        </span>
                        <p style={{fontSize:"calc(1vw + 1rem)"}}>Precio total: S/.{Math.round(ItemPrice * 10 * Count) / 10}</p>
                        <StyledButton texto="Comprar" letra={LightTheme.Dark} color={LightTheme.Orange} hyperLink={`https://api.whatsapp.com/send?phone=51949161510&text=${`¡Hola! vengo de la web de bungalows PH. Me gustaría ordenar ${Count} unidades de ${ItemText} de ${ItemSize}.`}`}/>
                </Modal>
            </Backdrop>
            {
                ChangeCat ? <h2>Tienda</h2> : <h2>Categoria: 
                    {Category == 1 && " Aceite"}
                    {Category == 2 && " Café"}
                    {Category == 3 && " Frutos secos"}
                    {Category == 4 && " Miel"}
                    {Category == 5 && " Lácteos"}
                    {Category == 6 && " Sal"}
                    {Category == 7 && " Cereales"}
                    </h2>
            }
            {
                ChangeCat ? 
                    <h4>Elige una categoria</h4> : 
                    <StyledButton Callback={() => setChangeCat(true)} color={LightTheme.Orange} letra={LightTheme.Dark} texto="Cambiar de categoria"/>
            }
            {
                ChangeCat ? <GridOfCat>
                    {
                        ArrOfCategories && ArrOfCategories.map((data, idx) => {
                            return <tr className='cart-btn' key={idx} onClick={() => ChangeCategory(data.id)}>
                                <img src={data.img}/>
                                <h3>{data.text}</h3>
                            </tr>
                        })
                    }
                </GridOfCat>
                 : <section>
                {
                    ImageData && ImageData.map((data,idx) => {
                        if (Category == data.id) return <article key={idx}>
                            <img className="product-main-img" src={data.img}/>
                            <h3>{data.texto}</h3>
                            {
                                data.presentaciones && data.presentaciones.map((info,idx) => {
                                    return <Product CallBack={() => OpenAddContainer(info.item, data.texto, info.precio)} theme={IsLightTheme ? LightTheme : DarkTheme} data={info} key={idx} data2={data} />
                                })
                            }
                        </article>
                    }) 
                }
            </section>
            }
        </ProductSection>
    </>
}

export default StoreContaniner
