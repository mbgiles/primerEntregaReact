import { Carrito } from "./Carrito"


export const NavBar = () => {
  return (
    <header className="header">
      <h1>Quiero mi mate</h1>
        <nav className="nav"> 
            <ul className="nav-menu"> 
                <li><a className="nav-link" href="#">Inicio</a></li>
                <li><a className="nav-link" href="#">Mates</a></li>
                <li><a className="nav-link" href="#">Termos</a></li>
                <li><a className="nav-link" href="#">Kits</a></li>
            </ul>
        </nav>
        <Carrito />
    </header>
  )
}


