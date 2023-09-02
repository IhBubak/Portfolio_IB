import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"
import {FaRegHand} from "react-icons/fa6"
import {Link} from 'react-scroll'

const Home = ({darkMode}) => {
  return (
    <div name="home" className={`w-full h-screen ${darkMode ? 'bg-[#121212]' : 'bg-gradient-to-r from-cyan-900 to-cyan-200'} ${darkMode ? 'text-[#19C37D]' : 'text-orange-300'}`}>
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <h1 className="text-4xl sm:text-7xl font-bold text-yellow-50">Iheb Boubakri</h1>
            <h2 className={`text-3xl sm:text-5xl font-bold ${darkMode ? 'text-[#19C37D]' : 'text-orange-300'}`}>Writschaftsinformatiker Student</h2>
            <p className='flex text-yellow-50 py-4 max-w-[800px] text-4xl font-bold'>Willkommen auf meiner Webseite...!<FaRegHand/><FaRegHand/><FaRegHand/></p>
            <div>
                <Link to="about" smooth={true} duration={500}>
                    <button className={`text-yellow-50 group border-2 px-6 py-3 my-2 flex items-center ${darkMode ? 'hover:bg-[#19C37D]' : 'hover:bg-orange-300'} ${darkMode ? 'hover:border-[#19C37D]' : 'hover:border-orange-300'} rounded-md`}>
                        Zum Profil
                        <span className="group-hover:rotate-90 duration-150">
                            <HiArrowNarrowRight className='ml-2'/>
                        </span>
                    </button>
                    
                </Link>
            </div>
        </div> 
    </div>
  )
}

export default Home