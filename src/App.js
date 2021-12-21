import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { useEffect, useState } from 'react';
import Loading from './Components/Loading/Loading';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeContainer from './Containers/HomeContainer';
import Footer from './Components/Footer/Footer';
import BungContainer from './Containers/BungContainer/BungContainer';
import Reservas from './Containers/Reservas/Reservas';
import WhatsAppButton from './Components/WhatsAppButton/WhatsAppButton';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import useAppContext, { AppContextProvider } from './Context';
import StoreContainer from "./Containers/Store/StoreContainer"
import CartContainer from './Containers/CartContainer/CartContainer';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, LightTheme, DarkTheme } from './Components/Theme/Theme';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const {IsLightTheme, setIsLightTheme} = useAppContext()
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])
  
  return <ThemeProvider theme={IsLightTheme ? LightTheme : DarkTheme}>
      <BrowserRouter>
      <GlobalStyles/>
        {isLoading && <Loading/>} 
        <NavBar theme={IsLightTheme ? LightTheme : DarkTheme} IsLight={IsLightTheme}/>
        <ScrollToTop/>
        <WhatsAppButton/>
        <Switch>
          <Route exact path="/">
            <HomeContainer/>
          </Route>
          <Route exact path="/bungalows">
            <BungContainer/>
          </Route>
          <Route exact path="/reservas">
            <Reservas/>
          </Route>
          <Route exact path="/tienda">
            <StoreContainer/>
          </Route>
          <Route exact path="/carrito">
            <CartContainer/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
     </ThemeProvider>
}
export default App;
