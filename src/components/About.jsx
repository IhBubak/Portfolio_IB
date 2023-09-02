import React from 'react'
import profil from "../assets/Profil_ib.jpg"

const About = ({ darkMode }) => {
    return (
        <div name="about" className={`w-full h-screen bg-[#023430] text-yellow-50 ${darkMode ? 'bg-[#121212]' : 'bg-gradient-to-r from-cyan-900 to-cyan-200'} ${darkMode ? 'text-[#19C37D]' : 'text-orange-300'}`}>
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="flex flex-col justify-center items-center sm:items-end text-center sm:text-right font-bold">
                        <p className={` text-right mb-4 text-4xl font-bold inline border-b-4 ${darkMode ? 'border-[#19C37D]' : 'border-orange-300'}`}>
                            Über mich
                        </p>
                        <p>Ich bin der Iheb. Aktuell befinde ich mich auf der Suche nach einem Praktikum bzw.
                            einer werkstudentische Stelle, das/die mir die Chance bietet, meine
                            bisher erworbene Kenntnisse in meinem Studium weiter zu vertiefen
                            und auszubauen</p>
                    </div>
                    <div className="flex justify-center items-center max-sm:hidden">
                        <img src={profil} alt="profil_photo" className=' rounded-lg shadow-orange-300 hover:scale-110 duration-500' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About