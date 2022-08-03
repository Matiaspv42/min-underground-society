import { NavLink, Outlet } from "react-router-dom"
import './navbar.css'
import Logo from './logo.png'
export default function Navbar (){
    return(
        // <header className="Navbar">
        //     <nav>
                // <NavLink to='/'
                //     style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
                // >Home</NavLink>

                // <NavLink to='/about'
                //     style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
                // >About</NavLink>
        //     </nav>
        //     <img src={Logo} alt="Logo Underground Society" />
        //     <button className="navbarButton">
        //         Connect Wallet
        //     </button>
        // </header>
        <div class="navbar bg-white">
        <div class="navbar-start">
        <div class="menu menu-horizontal p-0 hidden md:flex lg:flex">
             <NavLink to='/'
                    style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
                >Home</NavLink>
                <NavLink to='/roadmap'
            style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
            >
                Our Vision
            </NavLink>
            <NavLink to='/about'
                    style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
                >The Team</NavLink>
          </div>
          <div class="dropdown md:hidden lg:hidden">
            <label tabindex="0" class="btn btn-ghost ">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <div tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52">
              {/* <li> <NavLink to='/'
                    style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
                >Home</NavLink>
                </li>
              <li tabindex="0">
                <a class="justify-between">
                  Parent
                  <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z"/></svg>
                </a>
                <ul class="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li> */}
               <NavLink to='/'
                    style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
                >Home</NavLink>
                <NavLink to='/roadmap'
            style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
            >
                Our Vision
            </NavLink>
              <NavLink to='/about'
                    style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
                >About</NavLink>
            </div>
          </div>
        </div>

        <div class="navbar-center sm:flex md:flex lg:flex">
        <img src={Logo} alt="" />
        </div>
        <div class="navbar-end ">
          <button class="navbarButton hidden md:flex lg:flex ">Connect Wallet</button>
        </div>
      </div>
    )
}