import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import useAppContext from '../../Context'

const ReservaDiv = styled.div`
    margin-top: calc(8vh + 2rem);
    width: 90vw;
    padding: 20px 5vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    h2{
        font-size: calc(1vw + 1vh + 1rem);
        margin: 2rem 0;
    }

    fieldset{
        width: clamp(280px, 60%, 60%);
        border: none;
        border-radius: 10px;
        padding: 1rem 5%;
        display: flex;
        flex-direction: column;
        text-align: left;

        p{
            font-size: calc(1vh + 1rem);
            margin: 20px 0;
        }

        input{
            width: 80%;
            font-size: calc(1vh + 1rem);
            background-color: #c2fffd;
            transition: 1s;
            border: none;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border-bottom: 3px solid grey;
            padding: 10px;
            margin-bottom: 20px;
            color: rgb(0,0,30);
        }
        input:focus{
            background-image:linear-gradient(to left, #01091f, #0c3255);
            color: #c2fffd;
            border-bottom: 3px solid grey;
            &:placeholder{
                color: green;
            }
        }

        div{
            width: clamp(270px, 50%, 50%);
            font-size: calc(1vh + 1rem);
            background: #c2fffd;
            cursor: pointer;
            transition: .5s;
            border-bottom: 3px solid rgb(150,150,150);
            font-size: calc(1vh + 1rem);
            article{
                padding: 10px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }
            button{
                padding: 10px;
                width: 100%;
                cursor: pointer;
                text-align: left;
                border: none;
                color: rgb(0,0,30);
                transition: 1s;
                background-color: #c2fffd;
                font-size: calc(1vh + 1rem);
            }
            button:hover{
                background-image:linear-gradient(to left, #01091f, #0c3255);
                color: #c2fffd;
            }
        }
    }
`

const Reservas = () => {

    const [Name, setName] = useState("")
    const {Bungalow, setBungalow} = useAppContext()
    const [BungOptions, setBungOptions] = useState(false)
    const [Fecha, setFecha] = useState("")
    const [Fecha2, setFecha2] = useState("")

    const ChangeBungOptionsFn = () => {
        setBungOptions(!BungOptions)
    } 

    const SetBungalowValue = (value) => {
        setBungalow(value)
        ChangeBungOptionsFn()
    }

    return <ReservaDiv isOn={BungOptions}>
            <h2>¡Rellena este formulario y recibiremos tu solicitud de reserva!</h2>
            <fieldset>
                <input value={Name} onChange={(e) => setName(e.target.value)} placeholder="Escribe aquí tu nombre"/>
                <p>Bungalow a reservar</p>
                <div>
                    <article onClick={ChangeBungOptionsFn}>
                        <span>{Bungalow}</span>
                        {
                            BungOptions ? <i className="fas fa-chevron-up"></i> : <i className="fas fa-chevron-down"></i>
                        }
                    </article>
                    {
                        BungOptions && <>
                        <button onClick={() => SetBungalowValue("Bung. 202")}>
                            Bung. 202
                        </button>
                        <button onClick={() => SetBungalowValue("Bung. 302")}>
                            Bung. 302
                        </button>
                        <button onClick={() => SetBungalowValue("Bung. 401")}>
                            Bung. 401
                        </button>
                        </>
                    }
                </div>
                <p>Fecha de llegada</p>
                <input value={Fecha} onChange={(e) => setFecha(e.target.value)} placeholder="día/mes/año"/>
                <p>Fecha de salida</p>
                <input value={Fecha2} onChange={(e) => setFecha2(e.target.value)} placeholder="día/mes/año"/>
            </fieldset>
                <a className="styled-button" target="_blank" href={`https://api.whatsapp.com/send?phone=51949161510&text=${`¡Hola! Mi nombre es ${Name}. Me gustaría hacer una reserva en el ${Bungalow} desde el ${Fecha} hasta el ${Fecha2}.`}`}>
                    Enviar reserva
                </a> 
        </ReservaDiv>
}

export default Reservas
