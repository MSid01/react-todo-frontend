import React from 'react'

function Navbar() {
  const navLinksarray= [{label:"HOME",value:"/"}, {label:"ABOUT",value:"/about"}, {label:"SIGN IN",value:"/signin"}]
  return (
    <>
      <nav>
        <ul className="flex justify-between bg-slate-900 p-3">
          <li className="text-logo-color font-logo-font text-2xl font-bold tracking-wider"><a href='/'>TODO APP</a></li>
          <li>
            <ul className="flex space-x-3 text-white font-overpass pt-1">
              {navLinksarray.map((link, index)=>
              <li key={index} className="hover:bg-slate-50 hover:text-gray-800 px-2 rounded-md pt-1"><a href={link.value}>{link.label}</a></li>
              )}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar