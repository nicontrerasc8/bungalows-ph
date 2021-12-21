import React from 'react'
import { Link } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import { Theme } from './Theme'

/* const GOup = keyframes`
   from{
    transform: translateY(0);
   }to{
    transform: translateY(-5px);
   }
` */

const Btn = styled.button`
    background-color: ${props => props.Color};
    color: ${props => props.fontColor};
    font-size: calc(10px + 1vh + 1vw);
    border-radius: 5px;
    border: none;
    padding: 10px;
    position: relative;
    transition: transform 500ms;
    &:hover{transform:translateY(-5px);}

` 

const StyledButton = ({Callback, path, hyperLink, texto, color, letra}) => {
    if(path) return <Link to={path}>
        <Btn Color={color} fontColor={letra} >
            {texto}
        </Btn>
    </Link>
    if(Callback) return <Btn onClick={Callback} Color={color} fontColor={letra}>
        {texto}
    </Btn>
    if(hyperLink) return <a target="_blank" href={hyperLink}>
        <Btn Color={color} fontColor={letra}>{texto}</Btn>
    </a>
}

export default StyledButton
