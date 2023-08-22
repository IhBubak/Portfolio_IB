import React from 'react'
import javac from "../assets/github.png"

const Projekte = () => {
  return (
    <div name='projekte' className='w-full h-screen bg-[#023430] text-yellow-50'>
      {/***/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-orange-300 '>Projekte</p>
              <p className='py-4'>Diese sind meine private Projekte</p>
          </div>

          <div className='w-full grid md:grid-cols-2 gap-4 text-center py-8'>
                <div className="shadow-lg shadow-[#e2b470] container group rounded-md flex justify-center items-center mx-auto"
                style={{backgroundImage: `url(${javac})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className="group-hover:bg-orange-300 group-hover:bg-opacity-70 transition duration-300 rounded-lg w-full">
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-yellow-50 tracking-wider">SocialMediaApp with MERN</span>
                            <div className="pt-8 text-center">
                                <a href="">
                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-orange-300 text-yellow-50 font-bold text-lg">
                                        GitHub Repo for Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                    <div className="shadow-lg shadow-[#e2b470] container group rounded-md flex justify-center items-center mx-auto"
                    style={{backgroundImage: `url(${javac})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="group-hover:bg-orange-300 group-hover:bg-opacity-70 transition duration-300 rounded-lg w-full">
                            <div className="opacity-0 group-hover:opacity-100 group-hover:w-full">
                                <span className="text-2xl font-bold text-yellow-50 tracking-wider">E-commerce with MERN</span>
                                <div className="pt-8 text-center">
                                    <a href="">
                                        <button className="text-center rounded-lg px-4 py-3 m-2 bg-orange-300 text-yellow-50 font-bold text-lg">
                                            GitHub Repo for Code
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
                
        </div>
            
    </div>
  )
}

export default Projekte