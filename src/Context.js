import React, { createContext, useContext,useState } from "react"

const AppContext = createContext()
const useAppContext = () => useContext(AppContext)

export const AppContextProvider = ({children}) => {
    const [Bungalow, setBungalow] = useState("Selecciona el bungalow")
    const [WhatsAppLink, setWhatsAppLink] = useState("https://wa.me/51949161510")
    
    return <AppContext.Provider value={{Bungalow, setBungalow, WhatsAppLink, setWhatsAppLink}}>
        {children}
    </AppContext.Provider>
}
export default useAppContext