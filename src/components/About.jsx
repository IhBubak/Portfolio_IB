import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#023430] text-yellow-50">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 px-4">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-orange-300">
                        Über mich
                    </p>  
                </div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                <div className="sm:text-right text-4xl font-bold">
                    <p>Ich bin der Iheb. Willkommen auf meine Webseite.</p>
                </div>
                <div>
                    <p>Aktuell befinde ich mich auf der Suche nach einem Praktikum bzw.
                        einer werkstudentische Stelle, das/di mir die Chance bietet, meine
                        bisher erworbene Kenntnisse in meinem Studium weiter zu vertiefen
                        und auszubauen. 
                    </p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default About