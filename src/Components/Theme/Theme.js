import styled, { createGlobalStyle } from "styled-components";

export const LightTheme = {
    Dark: "#021926",
    DarkBlue: "#093854",
    Blue: "#3298d7",
    LightBlue: "#b1dbf2",
    Yellow: "#f9d26e",
    Orange: "#FEA947"
}
export const DarkTheme = {
    Dark: "#021926",
    DarkBlue: "#b1dbf2",
    Blue: "#3298d7",
    LightBlue: "#093854",
    Yellow: "#f9d26e",
    Orange: "#FEA947"
}

export const Modal = styled.main`
    color: ${(props) => props.theme.DarkBlue};
    background: ${(props) => props.theme.LightBlue};
    padding: 20px;
    border: 4px solid ${(props) => props.theme.Blue};
    border-radius: 10px;
    width: clamp(300px, 40vw, 40vw);
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction:column;
    h2{
        margin: 1rem 0;
    }
    p{
        margin: 10px 0 0 0;
    }
    input{
        margin: 5px 0 1rem 0;
        padding: 5px;
        border-radius: 5px;
        background-color: ${(props) => props.theme.LightBlue};
        color: ${(props) => props.theme.DarkBlue};
        border: 3px solid ;
    }
    button{
        margin-top: 1rem;
        text-align: center;
    }
`

export const GlobalStyles = createGlobalStyle`
*{
    text-decoration: none;
    outline: none;
    transition: background .8s, fill .8s, color .1s;
    box-sizing: border-box;
    font-family: 'Kanit', sans-serif;
    font-weight: 500;
    text-underline-offset: none;
  }
  *::after{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
    body{
        margin: 0;
        width: 100vw;
        overflow-x: hidden;
        padding: 0;
        background-color: ${(props) => props.theme.LightBlue};
        color:  ${(props) => props.theme.DarkBlue}; 
    }
    ::-webkit-scrollbar {
        width: 1rem;
      }
      ::-webkit-scrollbar-track {
        background: ${(props) => props.theme.LightBlue};
      }
      ::-webkit-scrollbar-thumb {
        background: ${(props) => props.theme.Blue};
        transition: 1s;
        border-radius: 15px;
      }
      .custom-shape-divider-bottom-1639756025 {
        bottom: 0;
        position: relative;
        top: 5px;
        left: 0;
        width: 100%;
        overflow: hidden;
        line-height: 0;
        transform: rotate(180deg);
    }
    .counter{
      margin: 0;
      border: 4px solid;
      border-radius: 5px;
      font-size: clamp(30px, calc(1vh + 1rem), calc(1vh + 1rem));
      display: flex;
      flex-direction: row;
      gap: 10px;
      button{
        font-size: clamp(30px, calc(1vh + 1rem), calc(1vh + 1rem));
        background: transparent;
        border: none;
        padding-left: 15px;
        padding-right: 15px;
        color: ${(props) => props.theme.DarkBlue};
        margin: 0 0 0 0;
      }
    }
    .Product-Cart-Title{
      font-size: clamp(2rem, calc(2vh + 2vw), calc(2vh + 2vw));
      margin: 15px 0;
    }
    .custom-shape-divider-bottom-1639756025 svg {
        position: relative;
        display: block;
        width: calc(100% + 1.3px);
        height: 130px;
        transform: rotateY(180deg);
    }
    
    .custom-shape-divider-bottom-1640116882 {
      width: 100%;
      overflow: hidden;
      line-height: 0;
      transform: rotate(180deg);
  }
  
  .custom-shape-divider-bottom-1640116882 svg {
      position: relative;
      position: relative;
        top: -2px;
      display: block;
      width: calc(100% + 1.3px);
      height: 115px;
      transform: rotateY(180deg);
  }
  
    .fa-bars, .fa-sign-out-alt{
      transform: scale(1.3);
    }
    .yellow-border{
      border-color: ${(props) => props.theme.Yellow};
    }
    .orange-border{
      border-color: ${(props) => props.theme.Orange};
    }
    footer{
      position: relative;
      z-index: 4;
      display: flex;
      border-top: 4px solid ${LightTheme.Blue};
      flex-direction: row;
      background: ${(props) => props.theme.LightBlue};
      justify-content: center;
      align-items: center;
      padding: 10px 5vw;
      grid-gap: 20px;
    }
    footer p{
      color: ${(props) => props.theme.DarkBlue};
      font-size: 30px;
    }
    footer i{
      font-size: 40px;
      color: ${(props) => props.theme.DarkBlue};
    }
    .loading-container{
      z-index: 10;
      position: fixed;
      background: ${(props) => props.theme.LightBlue};
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      font-size: calc(5vh + 5vw + 3rem);
      display: flex;
      align-items: center;
      text-align: center;
      justify-content: center;
    }
    .loading-container i{
      color: ${(props) => props.theme.DarkBlue};
    }
    .home-container{
      display: flex;
      flex-wrap: wrap;
      margin-top: 110px;
      align-items: center;
      justify-content: center;
      padding: 0 5vw;
      width: 100vw;
      gap: 5%;
    }
    .home-container article{
      width: clamp(300px, 50vw, 50vw);
    }
    .home-container article div{
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      align-items: flex-start;
    }
    .home-container iframe{
      width: clamp(300px, 30vw, 30vw);
      margin: 1rem 0;
      border-radius: 10px;
      border: 3px solid;
      height: clamp(500px, 30vh, 30vh);
    }
    .backdrop{
      position: fixed;
      top: -110vh;
      z-index: 100;
      padding: 10px;
      transition:.5s;
      left: 0vw;
      height: 100%;
      width: 100%;
      background: ${(props) => props.theme.Dark + 80};
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .backdrop.active{
      left:0;
      top:0;
    }
`