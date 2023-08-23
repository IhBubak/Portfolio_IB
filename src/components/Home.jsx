import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi"
import {Link} from 'react-scroll'

const Home = ({darkMode}) => {
  return (
    <div name="home" className={`w-full h-screen ${darkMode ? 'bg-[#121212]' : 'bg-[#023430]'} ${darkMode ? 'text-[#19C37D]' : 'text-orange-300'}`}>
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className={`${darkMode ? 'text-[#19C37D]' : 'text-orange-300'}`}>Zuverlässig, engagiert und motiviert</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-yellow-50">Iheb Boubakri</h1>
            <h2 className={`text-3xl sm:text-5xl font-bold ${darkMode ? 'text-[#19C37D]' : 'text-orange-300'}`}>Writschaftsinformatiker Student</h2>
            <p className='text-yellow-50 py-4 max-w-[800px]'>Als begeisterter Student der Wirtschaftsnformatik bin ich äußerst motiviert,
            mein theoretisches Wissen in der Praxis anzuwenden. meine Leidenschaft für Software und Web Entwicklung, kombiniert mit meinem technischen Know-how
            und meinem Streben nach kreativen Lösungen,
            treibt mich dazu an, mich kontinuierlich in diesem dynamischen Feld zu engagieren.
            </p>
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