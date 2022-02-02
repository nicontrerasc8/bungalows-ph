import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAppContext from "../../Context";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const {WhatsAppLink, setWhatsAppLink} = useAppContext()

  useEffect(() => {
    window.scrollTo(0, 0);
    if(pathname == "/green-ocean-coffee" || pathname == "/carrito") setWhatsAppLink("https://wa.me/51998855069")
    else setWhatsAppLink("https://wa.me/51998855069")
  }, [pathname]);

  return null;
}
