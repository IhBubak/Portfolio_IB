import React from 'react'
import html from "../assets/html.png"
import css from "../assets/css.png"
import js from "../assets/javascript.png"
import rc from "../assets/react.png"
import nd from "../assets/node.png"
import tw from "../assets/tailwind.png"
import mng from "../assets/mongo.png"
import gth from "../assets/github.png"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#023430] text-yellow-50'>
      {/***/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-orange-300 '>Fachliche Skills</p>
              <p className='py-4'>Dies sind die Technologien, die ich während des Studiums und meiner privaten Projekten gelernt habe.</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#e2b470] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto' src={html} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#e2b470] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto' src={css} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#e2b470] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto' src={js} alt="JS icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#e2b470] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto' src={rc} alt="RC icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#e2b470] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto' src={gth} alt="GTH icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#e2b470] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto' src={nd} alt="ND icon" />
                  <p className='my-4'>NODE.JS</p>
              </div>
              <div className='shadow-md shadow-[#e2b470] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto' src={mng} alt="MNG icon" />
                  <p className='my-4'>MONGODB</p>
              </div>
              <div className='shadow-md shadow-[#e2b470] hover:scale-110 duration-500 rounded-lg'>
                  <img className='w-20 mx-auto' src={tw} alt="TW icon" />
                  <p className='my-4'>TAILWIND</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Skills