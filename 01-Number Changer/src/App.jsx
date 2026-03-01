import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  const change = (e)=>{
    if(e=="+"){
        setNum(prev => prev+1)
    }
    else if(e=="-"){
      setNum(prev => prev-1)
    }
    else {
      setNum(0)
    }
    
  }

 return (
  <div className="flex justify-center items-center h-screen 
  bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300">

    <div className="flex flex-col items-center gap-6 
    backdrop-blur-lg bg-white/30 shadow-2xl 
    border border-white/40 rounded-3xl
    h-[360px] w-[260px] p-5 transition-all duration-300">

      <h2 className="text-3xl font-bold text-purple-900 tracking-wide">
        Counter
      </h2>

      <div className="flex justify-center items-center 
      w-full h-32 rounded-2xl 
      bg-white shadow-inner text-6xl font-bold 
      text-gray-700 transition-all duration-300">

        {num}
      </div>

      <div className="flex gap-10">

        <button
          onClick={() => change("+")}
          className="bg-green-400 w-12 h-12 rounded-xl text-2xl 
          shadow-md hover:bg-green-500 
          hover:scale-110 active:scale-90 
          transition-all duration-200"
        >
          +
        </button>

        <button
          onClick={() => change("-")}
          className="bg-red-400 w-12 h-12 rounded-xl text-2xl 
          shadow-md hover:bg-red-500 
          hover:scale-110 active:scale-90 
          transition-all duration-200"
        >
          −
        </button>

      </div>

      <button
        onClick={() => change("0")}
        className="bg-blue-400 w-32 h-11 rounded-xl text-lg 
        shadow-md hover:bg-blue-500 
        hover:scale-105 active:scale-95
        transition-all duration-200"
      >
        Reset ↻
      </button>

    </div>
  </div>
)}
export default App


