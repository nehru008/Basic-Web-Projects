import React from 'react'
import Descri from '../compo/Descri'
import Gender from '../compo/Gender'
import Header from '../compo/Header'
import Age from '../compo/Age'
const First = () => {
  return (
    <div className='w-full flex flex-col justify-center 
    max-w-xs border-black border-2 rounded-lg p-2'>

        <div className='w-full border-2 border-black rounded-lg
         bg-sky-100 '>

            <Header/>


            <div className=''>
                <div>Age</div>
                <Age/>

            </div>
            
             <div className='flex '>
                <div>Gender</div>
                <Gender/>
                <Gender/>
             </div>

             <div>
                <div>Gender</div>
                 <Descri/>
                 <Descri/>
             </div>

             <div>
                <button>Calculate</button>
             </div>
           

            

        </div>
    </div>
  )
}

export default First