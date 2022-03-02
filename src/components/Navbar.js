import React from 'react'
import todos from "../images/to-do-list.png"
function Navbar() {
  const navLinksarray= [{label:"HOME",value:"/"}, {label:"ABOUT",value:"/about"}, {label:"SIGN IN",value:"/signin"}]
  return (
    <>
      <nav>
        <ul className="md:flex justify-between bg-slate-900 p-3">
          <li className="flex mb-1 md:mb-0 text-logo-color font-logo-font text-2xl font-bold tracking-wider">
          <img className="w-10 h-10" src={todos} alt='todoicon'/>
          <a className='pt-1 pl-2' href='/'>TODO APP</a>
          </li>
          <li>
            <ul className="flex space-x-3 text-white font-overpass pt-1">
              {navLinksarray.map((link, index)=>
              <li key={index} className="hover:bg-slate-50 hover:text-gray-800 px-2 border-dotted border-2 border-red-100 rounded-md pt-1"><a href={link.value}>{link.label}</a></li>
              )}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar