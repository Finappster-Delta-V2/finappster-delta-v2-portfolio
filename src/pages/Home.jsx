import React from 'react'

function Home() {
  return (
    <div className="h-screen w-screen flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-40">
      <div className="text-black text-4xl md:text-8xl">
        Delta V2 <br /> 
        <p className= 'text-sm mt-6 ml-4'>2022-2023</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <img src="" alt="Image 1" className="w-20 md:w-32 h-20 md:h-32 object-cover rounded-full shadow-2xl" />
        <img src="" alt="Image 1" className="w-20 md:w-32 h-20 md:h-32 object-cover rounded-full shadow-2xl" />
        <img src="" alt="Image 1" className="w-20 md:w-32 h-20 md:h-32 object-cover rounded-full shadow-2xl" />
        <img src="" alt="Image 1" className="w-20 md:w-32 h-20 md:h-32 object-cover rounded-full shadow-2xl" />
      </div>
    </div>
  )
}

export default Home
