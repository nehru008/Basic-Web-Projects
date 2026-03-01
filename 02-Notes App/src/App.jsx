import React from 'react'
import Form from './components/Form'
import Header from './components/Header'


const App = () => {
  return (
    <div className="flex flex-col ">
      <Header />

      <div className="flex flex-wrap  justify-center items-center mx-6 items-stretch gap-12">
        <Form />
        
      </div>
    </div>
  )
}

export default App
