import React from 'react'
import { useState } from 'react'
import {FaBars, FaTimes, FaGithub, FaFacebook, FaWhatsapp, FaMoon} from 'react-icons/fa'
import Pexel from '../assets/IB Logo.png'
import {Link} from 'react-scroll'

function Navbar({darkMode, changeDarkMode}) {

  const[nav, setNav]= useState(false)
  const handleClick = ()=> setNav(!nav)

  return (
    <div className={`fixed w-full h-[80px] flex justify-between items-center px-4 ${darkMode ? 'bg-[#121212]' : 'bg-[#023430]'} ${darkMode ? 'text-[#19C37D]' : 'text-orange-300'}`}>
        <div>
        <img src={Pexel} alt="Pexel Image" style={{width: '70px', borderRadius: '50%'}}/>
        </div>
        <div>
            <ul className="hidden md:flex">
              <li>
                <button onClick={changeDarkMode} className="text-2xl">
                  <FaMoon className={`transition ${darkMode ? 'text-[#19C37D]' : 'text-orange-300'}`}/>
                </button>
              </li>
              <li>
              <Link to="home" smooth={true} duration={500} className={`border-b-2 ${darkMode ? 'border-[#19C37D]' : 'border-orange-300'}`}>
                Home
              </Link>
              </li>
              <li>
              <Link to="about" smooth={true} duration={500} className={`border-b-2 ${darkMode ? 'border-[#19C37D]' : 'border-orange-300'}`}>
                Über mich
              </Link>
              </li>
              <li>
              <Link to="skills" smooth={true} duration={500} className={`border-b-2 ${darkMode ? 'border-[#19C37D]' : 'border-orange-300'}`}>
                Skills
              </Link>
              </li>
              <li>
              <Link to="projekte" smooth={true} duration={500} className={`border-b-2 ${darkMode ? 'border-[#19C37D]' : 'border-orange-300'}`}>
                Projekte
              </Link>
              </li>
              <li>
              <Link to="kontakt" smooth={true} duration={500} className={`border-b-2 ${darkMode ? 'border-[#19C37D]' : 'border-orange-300'}`}>
                Kontakt
              </Link>
              </li>
            </ul>
        </div>
        {/**Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>
        {/**Mobile */}
        <div className={!nav? "hidden" : `absolute top-0 left-0 w-full h-screen ${darkMode ? 'bg-[#121212]' : 'bg-[#023430]'} flex flex-col justify-center items-center`}>
        <ul>
            <li className="py-6 text-4xl">
              <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                Über mich
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link onClick={handleClick} to="projekte" smooth={true} duration={500}>
                Projekte
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <Link onClick={handleClick} to="kontakt" smooth={true} duration={500}>
                Kontakt
              </Link>
            </li>
            <li className="py-6 text-4xl">
              <button onClick={changeDarkMode} className="text-2xl">
                <FaMoon className={`transition ${darkMode ? 'text-[#19C37D]' : 'text-orange-300'}`}/>
              </button>
            </li>
            </ul>
        </div>
        {/**icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center">
              <a className="flex justify-between items-center w-full text-yellow-50 ml-[-110px] hover:ml-[-10px] duration-300" href='/'>Facebook<FaFacebook size={30}/></a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center">
              <a className="flex justify-between items-center w-full text-yellow-50 ml-[-110px] hover:ml-[-10px] duration-300" href='/'>Github<FaGithub size={30}/></a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center">
              <a className="flex justify-between items-center w-full text-yellow-50 ml-[-110px] hover:ml-[-10px] duration-300" href='/'>Whatsapp<FaWhatsapp size={30}/></a>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar