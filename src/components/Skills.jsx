import React from 'react'
import java from "../assets/java2.png"
import js from "../assets/js.png"
import ts from "../assets/ts.png"
import rc from "../assets/react.png"
import ex from "../assets/expressjs.svg"
import sb from "../assets/springboot.png"
import mng from "../assets/mongo.png"
import pstg from "../assets/PostgreSQL_logo.png"

const Skills = ({darkMode}) => {
  return (
    <div name='skills' className={`w-full h-screen ${darkMode ? 'bg-[#121212]' : 'bg-gradient-to-r from-cyan-900 to-cyan-200'} ${darkMode ? 'text-[#19C37D]' : 'text-orange-300'}`}>
      {/***/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className={`text-4xl font-bold inline border-b-4 ${darkMode ? 'border-[#19C37D]' : 'border-orange-300'} `}>Fachliche Skills</p>
              <p className='py-4'>Dies sind die Technologien, die ich während des Studiums und meiner privaten Projekten gelernt habe.</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className={`shadow-md ${darkMode ? 'shadow-[#19C37D]' : 'shadow-orange-300'} hover:scale-110 duration-500 rounded-lg`}>
                  <img className='w-20 mx-auto' src={java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className={`shadow-md ${darkMode ? 'shadow-[#19C37D]' : 'shadow-orange-300'} hover:scale-110 duration-500 rounded-lg`}>
                  <img className='w-20 mx-auto' src={js} alt="CSS icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className={`shadow-md ${darkMode ? 'shadow-[#19C37D]' : 'shadow-orange-300'} hover:scale-110 duration-500 rounded-lg`}>
                  <img className='w-20 mx-auto' src={ts} alt="JS icon" />
                  <p className='my-4'>TYPESCRIPT</p>
              </div>
              <div className={`shadow-md ${darkMode ? 'shadow-[#19C37D]' : 'shadow-orange-300'} hover:scale-110 duration-500 rounded-lg`}>
                  <img className='w-20 mx-auto' src={mng} alt="RC icon" />
                  <p className='my-4'>MONGODB</p>
              </div>
              <div className={`shadow-md ${darkMode ? 'shadow-[#19C37D]' : 'shadow-orange-300'} hover:scale-110 duration-500 rounded-lg`}>
                  <img className='w-20 mx-auto' src={pstg} alt="GTH icon" />
                  <p className='my-4'>POSTGRES</p>
              </div>
              <div className={`shadow-md ${darkMode ? 'shadow-[#19C37D]' : 'shadow-orange-300'} hover:scale-110 duration-500 rounded-lg`}>
                  <img className='w-20 mx-auto' src={ex} alt="ND icon" />
                  <p className='my-4'>EXPRESS.JS</p>
              </div>
              <div className={`shadow-md ${darkMode ? 'shadow-[#19C37D]' : 'shadow-orange-300'} hover:scale-110 duration-500 rounded-lg`}>
                  <img className='w-20 mx-auto' src={sb} alt="MNG icon" />
                  <p className='my-4'>SpringBoot</p>
              </div>
              <div className={`shadow-md ${darkMode ? 'shadow-[#19C37D]' : 'shadow-orange-300'} hover:scale-110 duration-500 rounded-lg`}>
                  <img className='w-20 mx-auto' src={rc} alt="TW icon" />
                  <p className='my-4'>REACT</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Skills