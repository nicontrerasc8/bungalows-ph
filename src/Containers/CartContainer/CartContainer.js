
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import useAppContext from '../../Context'


const Container = styled.div`
    margin-top: 10vh;
    padding: 1rem 5%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
        font-size: calc(2vw + 2vh + 1rem);
    }
    table{
        display: flex;
        margin-bottom: 2rem;
        flex-wrap: wrap;
        grid-gap: 1rem;
        color: #DAFDFC;
        justify-content: center;
        article{
                padding: 10px;
                border-radius: 10px;
                background-color: #01091f;
                display: flex;
                flex-direction: column;
                width: clamp(280px, 33%,33%);
            section{
                border-radius: 10px;
                background-color: #01091f;
                display: flex;
                flex-wrap: wrap;
                padding: 10px;
                grid-gap: 10px;
                justify-content: center;
                img{
                    border-radius: 5px;
                    box-shadow: 0 0 4px #DAFDFC;
                    width: clamp(170px, 20%, 20%);
                }
                div{
                    display: flex;
                    flex-direction: column;
                    text-align: left;
                    justify-content: center;
                    font-size: calc(15px + 1vh);
                    grid-gap: 1rem;
                }
            }
        }
    }
`

const ProductHeader = styled.span`
    background-color: #01091f;
    font-size: calc(15px + 2vh);
    padding: 10px;
    text-align: center;

`

const SendToWhatsAppContainer = ({arreglo}) => {
    return <div>
        <a href={`https://api.whatsapp.com/send?phone=51949161510&text=${arreglo}`} className="styled-button" target="_blank" 
                   >Envía tu orden</a>
    </div>
} 
const CartContainer = () => {

    const [Whats, setWhats] = useState(false)
    const {Pedidos, setPedidos} = useAppContext()

    const [ArrayString, setArrayString] = useState("")







    return <Container>

           <h2>Carrito <i className="fas fa-shopping-cart"></i> </h2>
           { Pedidos.length > 0 ?
               <><table>
               {
                   Pedidos.length > 0 && Pedidos.map((pedido, idx) => {
                       return <article key={idx}>
                           <ProductHeader>{pedido.producto.product} </ProductHeader><section>
                            <img src={pedido.producto.img}/>
                            <div>
                                <span>Precio: s/. {Math.ceil(pedido.producto.precio)}</span>
                                <span>Cantidad ordenada: {pedido.quantity} unidades </span>
                                <span>Precio total: s/. {Math.ceil(pedido.quantity * pedido.producto.precio)}</span>
                            </div>
                           </section>
                       </article> 
                   }) 
               }
               </table>
               <a href={`https://api.whatsapp.com/send?phone=51949161510&text=${"Hola! Vengo de la web de bungalows PH, me gustaría ordenar:" + JSON.stringify(Pedidos)}`} className="styled-button" target="_blank" 
                   >Envía tu orden</a>
                   </> 
                   
                   : 
                   <Link to="/green-ocean-coffee" className="styled-button">Ir a comprar</Link>
           }
        </Container>
}

export default CartContainer
