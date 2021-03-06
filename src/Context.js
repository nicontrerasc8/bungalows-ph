import React, { createContext, useContext,useState } from "react"

const AppContext = createContext()
const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({children}) => {
    const [Bungalow, setBungalow] = useState("Selecciona el bungalow")
    const [WhatsAppLink, setWhatsAppLink] = useState("https://wa.me/51998855069")
    const [Pedidos, setPedidos] = useState([])
    const [IsLightTheme, setIsLightTheme] = useState(true)

    const productsCount = () => {
        return Pedidos.reduce((acc, p) =>  (acc += p.quantity), 0)
      }

    const addProduct = (producto, quantity) => {
          setPedidos([...Pedidos, {producto, quantity}])
      }
    
    return <AppContext.Provider value={{addProduct, productsCount, Bungalow, setBungalow, WhatsAppLink, setWhatsAppLink, Pedidos, setPedidos, IsLightTheme, setIsLightTheme}}>
        {children}
    </AppContext.Provider>
}
export default useAppContext
