import React, { useState } from 'react'

const App = () => {
  const [words, setwords] = useState('')
  const [named, setnamed] = useState("What`s your Name?")
  return (
    <div className='flex justify-center items-center h-screen bg-green-50 '
       >
      <div className='flex flex-col items-center h-72 w-65 border-2 rounded-3xl py-2 bg-green-100'>
         <h1 className='text-4xl text-purple-800 edu-font mr-10'>Say</h1>
         <h1 className='text-4xl  text-purple-800 edu-font ml-10'>Hello</h1>
         <h3 className='text-md mb-2 mt-4 '>{named}</h3>
         <input type="text"  className='border-2 rounded-md my-4 px-1 py-1 text-xs bg-white '
         value={words}
         onChange={(e)=>{
          setwords(e.target.value)
         }} />
         <button className='bg-red-600 rounded-xl py-1 px-10 border-2 border-red-900 mt-4 cursor-pointer transition duration-150 
          active:scale-95 mb-2 text-white ' onClick={()=>{
            setnamed('hello, '+words+' 👋😊')
            setwords('')
          }} >Greet</button>
      </div>
    </div>
  )
}

export default App