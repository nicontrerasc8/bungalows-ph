import React from 'react'
import styled from 'styled-components'
import useAppContext from '../../Context'

const WAButton = styled.a`
    position: fixed;
    z-index: 3;
    bottom: calc(5vh + 1rem);
    right: calc(5vw + 2rem);
    font-size: 4rem;
    color: white;
    width: 5rem;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #25D366;
`

const WhatsAppButton = () => {

    const {WhatsAppLink, setWhatsAppLink} = useAppContext()

    return <WAButton rel="noreferrer" target="_blank" href={WhatsAppLink} >
            <i className="fab fa-whatsapp"></i>
        </WAButton>
}

export default WhatsAppButton
