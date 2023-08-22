import React from 'react'

const Kontakt = () => {
  return (
    <div name='kontakt' className='w-full h-screen bg-[#023430] text-yellow-50'>
      {/***/}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-orange-300 '>Kontakt</p>
              <p className='py-4'>Nachrichten werde ich in getForm.io erhalten</p>
          </div>
          <form method='POST' className='flex flex-col w-full'>
            <input className='bg-[#fffedd] p-2 rounded-md' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#fffedd] rounded-md' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#fffedd] p-2 rounded-md' name="message" rows="10" placeholder='Nachricht'></textarea>
            <button className="text-yellow-50 hover:bg-orange-300 border-2  border-yellow-50 hover:border-orange-300 px-4 py-2 my-8 mx-auto flex items-center rounded-md">Send</button>
          </form>
      </div>
    </div>
  )
}

export default Kontakt