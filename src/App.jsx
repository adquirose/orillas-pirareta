import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Proyecto from "./components/Proyecto"
import Masterplan from "./components/Masterplan"
import Galeria from "./components/Galeria"
import Ubicacion from "./components/Ubicacion"
import favicon from './assets/images/logo-azul.png'
import { Helmet } from "react-helmet"
import Caracteristicas from "./components/Caracteristicas"
import Plano from "./components/Plano"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import Musica from "./components/Musica"

function App() {
  return (
    <>
      <Helmet>
        <link rel="shortcut icon" href={favicon} type="image/x-icon"/>
        <title>Orillas de Pirareta</title>
      </Helmet>
      <Navigation/>
      <Header/>
      <Proyecto/>
      <Masterplan/>
      <Caracteristicas/>
      <Galeria/>
      <Ubicacion/>
      <Plano/>
      <Contacto/>
      <Footer/>
      <Musica/>
    </>
  )
}

export default App

