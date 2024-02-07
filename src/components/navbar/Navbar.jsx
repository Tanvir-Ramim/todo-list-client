import { Link, NavLink } from "react-router-dom";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
const Navbar = () => {
    const [open, setOpen] = useState(false);
    const navItems = (
        <div className="lg:flex gap-6 font-semibold text-white">
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b-[3px] pb-1 border-[transparent] "
                : "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-red-500 duration-300"
            }
            to="/"
          >
            <li>HOME</li>
          </NavLink>
          
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-500 border-b-[3px] pb-1 border-[transparent] "
                : "text-white border-b-[3px] pb-1 border-[transparent] hover:border-b-[3px] hover:border-red-500 duration-300"
            }
            to="/dashboard/CreateNewTask"
          >
            <li>DASHBOARD</li>
          </NavLink>
        </div>
      );
    return (
        <div className="navbar bg-black fixed z-20 bg-opacity-40 drop-shadow-lg px-2 md:px-8 lg:px-12 flex justify-between py-2 md:py-4">
        <div className="">
             
              <div className="title flex flex-col">
                <p className="text-md md:text-3xl text-red-500 font-bold">TaskManage</p>
              </div>
           
          </div>
    
          <div className="flex gap-8 items-center ">
            <ul className="hidden lg:block menu menu-horizontal px-1">
              {navItems}
            </ul>
    
           
            
            
            <div className="dropdown dropdown-end">
              <label className="swap swap-rotate lg:hidden">
                <input type="checkbox" />
                <GiHamburgerMenu
                  onClick={() => setOpen(!open)}
                  className="swap-off  text-3xl md:text-4xl text-red-500 bg-[transparent] "
                />
                <RxCross2
                  onClick={() => setOpen(!open)}
                  className="swap-on text-3xl md:text-4xl text-red-500 bg-[transparent] "
                />
              </label>
             
              <ul
                className={`${
                  open ? "block" : "hidden"
                } menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-gray-200 border-2 border-gray-200 bg-opacity-70 drop-shadow-xl bg-black `}
              >
                {navItems}
              </ul>
            </div>
            
          </div>
          <div>Asi ra</div>
        </div>
      );
    };
    

export default Navbar;