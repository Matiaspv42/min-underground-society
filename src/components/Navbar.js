import { NavLink } from "react-router-dom"
import './navbar.css'
import Logo from './logo.png'
export default function Navbar (){
    return(
        <header className="Navbar">
            <nav>
                <NavLink to='/'
                    style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
                >Home</NavLink>

                <NavLink to='/about'
                    style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
                >About</NavLink>
            </nav>
            <img src={Logo} alt="Logo Underground Society" />
            <button className="navbarButton">
                Connect Wallet
            </button>
        </header>
    )
}