
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/" className="icon-navbar" >
          <img className="icon-navbar" data-hover-text="IR A HOME" src="/logo.jpeg" alt="" />
        </Link>
        <Link to="/" className="marca">
            <h1 data-text="SRAGLIA">SRAGLIA</h1>
        </Link>
        <div className="navbar-links">
        <Link to="/tintos">Tintos</Link>
        <Link to="/blancos">Blancos</Link>
      </div>
        <CartWidget/>
    </nav>
  )
}

export default Navbar
