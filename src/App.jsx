import Navbar from './components/Navbar'
import Home from './components/Home'
import Main from './components/Main'
import Trayectoria from './components/Trayectoria'
import Social from './components/Social'
import Contact from './components/Contacto'
import Publicaciones from './components/Publicaciones'
import Footer from './components/Footer'
import Galeria from './components/Galeria'
import Personal from './components/Personal'
import Direccion from './components/Direccion'
import SendMessage from './components/SendMessage'
import Comisiones from './components/Comisiones'

function App() {

  return (
    <>
      <Navbar />
      <SendMessage />
      <Home />
      <Main />
      <Comisiones />
      <Trayectoria />
      <Publicaciones />
      <Personal />
      <Direccion />
      <Contact />
      <Footer />
    </>
  )
}

export default App