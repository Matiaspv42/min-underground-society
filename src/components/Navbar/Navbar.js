import { NavLink, Outlet } from "react-router-dom"
import './navbar.css'
import Logo from '../Main.png'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
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
        
        <div class="navbar bg-white ">
        <div class="navbar-start">
        <div class="menu menu-horizontal p-0 hidden md:flex lg:flex">
                <NavLink to='/roadmap'
            style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
            >
            Vision
            </NavLink>
            {/* <NavLink to='/labs'
                style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
            >Labs</NavLink> */}
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center">
                  Labs

                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-3 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Thing #1
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >         
                          Thing #2
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Thing #3
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                        Thing #4
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                        Thing #5
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button className="inline-flex w-full justify-center">
                  Ecosystem

                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-3 mt-2 w-56 origin-top-left divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Thing #1
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >         
                          Thing #2
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Thing #3
                        </button>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                        Thing #4
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${
                            active ? 'bg-violet-500 text-white' : 'text-gray-900'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                        Thing #5
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <NavLink to='/nft'
                style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
            >NFT</NavLink>
            <NavLink to='/about'
                    style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
                >Team</NavLink>
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
                <NavLink to='/nft'
                  style={({ isActive }) => ({ color: isActive ? "#000" : "#939393" })}
                >NFT</NavLink>
            </div>
          </div>
        </div>

        <div class="navbar-center sm:flex md:flex lg:flex">
          <NavLink to='/'>
            <img src={Logo} alt="" className="Logo"/>
          </NavLink>
        </div>
        <div class="navbar-end ">
          <button class="navbarButton hidden md:flex lg:flex ">Whitepaper</button>
        </div>
      </div>
    )
}