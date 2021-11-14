import React from 'react'
import styled from 'styled-components'
import useAppContext from '../../Context'

const Container = styled.div`
    margin-top: 10vh;
    padding: 1rem 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2{
        font-size: calc(2vw + 2vh + 1rem);
    }

    section{
        width: clamp(280px, 50%,50%);
        background: grey;
        table{
            display: flex;
            flex-direction: column;
            margin-top: 50px;
            border-radius: .5rem;
            background-color: rgb(221, 223, 255);
            box-shadow: 0 0 5px 1px rgba(0, 0, 10, 0.5);
            margin-left: 15%;
            width: 70%;
            margin-right: 15%;
            font-family: "Archivo Black", sans-serif;
          }
    }

`

const CartContainer = () => {

    const {Pedidos} = useAppContext()
    console.log(Pedidos)

    return <Container>
           <h2>Carrito <i className="fas fa-shopping-cart"></i> </h2>
           <section>
           {
               Pedidos.length > 0 && Pedidos.map((pedido, idx) => {
                   return <p key={idx}>
                       {pedido.producto.product}
                       {pedido.quantity}
                       </p>
               }) 
           }
           </section>
        </Container>
}

export default CartContainer
