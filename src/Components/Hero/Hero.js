import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeroDiv = styled.div`
    background: ${props => props.Background ? props.Background : "black"};
    color: ${props => props.Color ? props.Color : "white"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 2rem 5vw;
    
    section{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        grid-gap: 1rem;
    }

    article{
        padding: 30px 20px;
        border-radius: 5px;
        border: 3px solid rgb(200,200,200);
        width: clamp(300px, 27%, 27%);

        h5{
            font-size: calc(1vw + 1vh + 10px);
            margin: 30px 0 20px 0;
        }

        i{
            font-size: calc(3vh + 3vw + 2rem);
        }

    }

    h2{
        font-size: calc(1vw + 1vh + 1rem + 10px);
    }

    a{
        margin-top: 20px;
    }
`

const Hero = ({BC, color, title, info, buttonText, buttonPath}) => {
    return <HeroDiv Background={BC} Color={color}>
        <h2>{title}</h2>
       <section>
            {                    
            info && info.map((data, idx) => {
                    return <article key={idx}>
                        <i className={data.icon}/>
                        <h5>{data.title}</h5>
                        <p>{data.text}</p>
                    </article>
                })
            }
       </section>
       <Link className="styled-button" to={buttonPath}>{buttonText}</Link>
    </HeroDiv>
}

    export default Hero
