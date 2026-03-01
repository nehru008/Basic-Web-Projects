import React, { useState } from 'react'
import { List, ListChecks, Check, Delete, Copy } from 'lucide-react'


const App = () => {
  const [task, settask] = useState('')
  const [num, setnum] = useState(1)
  const [Arr, setArr] = useState([])


  const deleteNote = (idx)=>{
    const copyArr = [...Arr]
    copyArr.splice(idx,1)
    setArr(copyArr)

  }

  return (
    <div className="scale-150 min-h-screen pl-16  flex items-start justify-center pt-24 bg-[#1F2430] ">
      <div className="flex flex-col items-center w-72 rounded-3xl py-4 bg-blue-600 mt-24 border-2">

        {/* Header */}
        <div className="flex items-center gap-2">
          <img
            src="clock2.jpg"
            alt="clk"
            className="h-8 w-8 rounded-full"
          />
          <h2 className="text-2xl font-semibold text-white">
            My To-do List
          </h2>
        </div>

        <h3 className="text-[12px] text-gray-300 mt-1">
          Plan your day Efficiently
        </h3>

        {/* Input */}
        <div className="flex items-center gap-2 my-4">
          <input
            type="text"
            placeholder="Enter your new task..."
            className="rounded-xl py-3 px-4  bg-gray-300 text-xs font-semibold shadow-[0_0_15px_rgba(77,163,255,0.4)]"
            value={task}
            onChange={(e) => settask(e.target.value)}
          />
          <button className="bg-blue-200 rounded-lg px-3 py-2 text-sm  border-0.5 cursor-pointer active:scale-95"
          onClick={()=>{
            setArr([...Arr,task])

            settask('')
          }}>
            + Add
          </button>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-4 text-sm mb-3">

          <div
            onClick={() => setnum(1)}
            className={`flex items-center gap-1 cursor-pointer ${
              num === 1 ? 'border-b-2 border-black' : ''
            }`}
          >
            <ListChecks size={14} />
            <span>All</span>
          </div>

          <div
            onClick={() => setnum(2)}
            className={`flex items-center gap-1 cursor-pointer ${
              num === 2 ? 'border-b-2 border-black' : ''
            }`}
          >
            <List size={14} />
            <span>Active</span>
          </div>

          <div
            onClick={() => setnum(3)}
            className={`flex items-center gap-0.5 cursor-pointer ${
              num === 3 ? 'border-b-2 border-black' : ''
            }`}
          >
            <Check size={14} />
            <span>Completed</span>
          </div>

        </div>

   <div className=' pr-1.5 max-h-48 overflow-y-auto'> 
      {Arr.map((elem,idx)=>{
      
     return   <div className="flex justify-between items-center w-56 px-2 py-2 my-2 rounded-xl bg-[#033231] border">

          <div className="h-2 w-2 bg-amber-100 rounded-xs cursor-pointer
          " onClick={className='bg-green-500'}
          ></div>

          <div className="flex items-center justify-between w-40">
            <h2 className="text-xs font-semibold text-purple-300 truncate">
              {elem}
            </h2>
            <button className="h-5 w-5 rounded-full bg-white border border-red-700 flex 
            cursor-pointer items-center justify-center"
            onClick={()=>{
                deleteNote(idx);


            }}
            >
              <img
                src="delete.png"
                alt="X"
                className="h-3 w-3"
              />
            </button>
          </div>

        </div>

    
        })}
        </div>


      </div>
    </div>
  )
}

export default App
