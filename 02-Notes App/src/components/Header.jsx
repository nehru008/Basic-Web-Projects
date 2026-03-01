import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between  
    h-20 bg-amber-50 py-5  w-full border'>
        <div className='flex items-center '>
            <img className='h-16 '  src="https://9to5mac.com/wp-content/uploads/sites/6/2024/06/notes-app-icon.jpg?quality=82&strip=all&w=1600" alt="" />
            <h1 className='text-5xl font-medium text-red-700 '>Notes-World</h1>
        </div>

      <div className='flex items-center justify-end'>
            <img className='h-12 rounded-xl cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52p3qqthkkN2aAfhCzQKQyuYdYhAHbW3IxA&s" alt="" />
            <img className='h-13 rounded-full cursor-pointer border-solid border-2 shadow-xl mx-4' src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt="" />
            
      </div>
      
    </div>
  )
}

export default Header
