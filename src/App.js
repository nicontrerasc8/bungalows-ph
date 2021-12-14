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
import { AppContextProvider } from './Context';
import StoreContainer from "./Containers/Store/StoreContainer"
import CartContainer from './Containers/CartContainer/CartContainer';

function App() {
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, [])
  
  return <AppContextProvider>
      <BrowserRouter>
      {isLoading && <Loading/>} 
      <NavBar/>
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
  </AppContextProvider> 
}
export default App;
