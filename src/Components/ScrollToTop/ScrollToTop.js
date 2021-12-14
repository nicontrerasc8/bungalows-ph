import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import useAppContext from "../../Context";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const {WhatsAppLink, setWhatsAppLink} = useAppContext()

  useEffect(() => {
    window.scrollTo(0, 0);
    if(pathname == "/green-ocean-coffee" || pathname == "/carrito") setWhatsAppLink("https://wa.me/51949161510")
    else setWhatsAppLink("https://wa.me/51949161510")
  }, [pathname]);

  return null;
}