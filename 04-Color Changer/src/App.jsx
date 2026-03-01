import React, { useState } from 'react'

const App = () => {
  
  const [color, Setcolor] = useState("#000000")

  const colors = [ 
    "#EF4444",
    "#F97316",
    "#FACC15",
    "#22C55E",
    "#14B8A6",
    "#3B82F6",
    "#6366F1",
    "#8B5CF6",
    "#EC4899",
    "#0F172A"
  ]

  return (
    <div className='flex items-center flex-col min-h-screen py-4 px-8'
    style={{backgroundColor:color}}>
        
      <h1 className='mx-8 text-7xl font-bold font-[Brusher] text-purple-800 mb-2'>
        Color <span className="font-anton text-6xl">Changer</span>
      </h1>

      <h3 className='text-white font-[poppins] text-lg mb-24'>
        choose the color to change background
      </h3>

      <div className='flex flex-wrap justify-center rounded-3xl bg-white max-w-[500px] py-4 px-2'>
        {colors.map((elem, idx) => (
          <div key={idx} className='gap-4 border-none py-2 px-2'>
            <div
              className='rounded-2xl h-20 w-20 cursor-pointer  transition-transform duration-150 active:scale-95'
              style={{ backgroundColor: elem } }
              onClick={()=>{Setcolor(elem)
                className="scale-95"
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
