import React, { useState } from "react";
import todos from "../images/to-do-list.png";
import { toast } from "react-toastify";

function showToast(){
  toast.info('Navbar is Useless...😅Added just for fun😁!', {
    position: "top-center",
    // autoClose: 5000,
    // hideProgressBar: false,
    // closeOnClick: true,
    // pauseOnHover: true,
    // draggable: true,
    // progress: undefined,
    });
}

function Navbar() {
  const navLinksarray = [
    { label: "HOME", value: "/" },
    { label: "ABOUT", value: "/about" },
    { label: "SIGN IN", value: "/signin" },
  ];
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <>
      <nav>
        <ul className="sm:flex justify-between bg-slate-900 p-3">
          <li className="flex mb-1 sm:mb-0 text-logo-color font-logo-font text-2xl font-bold tracking-wider">
            <img className="w-10 h-10" src={todos} alt="todoicon" />
            <span className="pt-1 pl-2">TODO APP</span>
          </li>
          <div
            onClick={() => setMenuToggle(!menuToggle)}
            className="sm:hidden absolute cursor-pointer right-4 top-5"
          >
            {menuToggle ? (
              <span className="text-white font-semibold pr-1 noselect">X</span>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="white"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            )}
          </div>
          <li className={menuToggle ? "navlist" : "navlist hidden"}>
            <ul className="flex items-center sm:flex-row flex-col space-x-3 text-white font-overpass pt-1">
              {navLinksarray.map((link, index) => (
                <li
                  onClick={showToast}
                  key={index}
                  className=" cursor-pointer hover:bg-slate-50 my-1 hover:text-gray-800 px-2 border-dotted border-2 border-red-100 rounded-md pt-1"
                >
                  {link.label}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
