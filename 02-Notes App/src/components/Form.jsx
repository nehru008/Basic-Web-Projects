import React, { useState } from 'react'

const Form = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    setTask([...task, { title, details }])

    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const copyTask = [...task]
    copyTask.splice(idx, 1)
    setTask(copyTask)
  }

  return (
    <>
      
      <div className="flex items-center justify-center flex-col py-2 px-4 bg-amber-200 h-120 w-120 gap-5 my-4 rounded-2xl shadow-md shadow-red-600 border-emerald-800 border-2">
        <h2 className="text-3xl font-medium text-white">
          Add Notes
        </h2>

        <form onSubmit={submitHandler} className="w-full flex flex-col gap-3">
          <input
            className="border-2 rounded-lg w-full py-2 px-4"
            type="text"
            placeholder="Enter Notes Heading"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="border-2 rounded-lg w-full py-2 px-4 h-40"
            placeholder="Enter notes here"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />

          <button
            type="submit"
            className="bg-black text-white rounded-2xl w-full py-2"
          >
            Add Note
          </button>
        </form>
      </div>

      
      <div className="flex flex-col bg-gray-700 min-w-120 w-1/2 px-10 my-4 rounded-lg border-2 shadow-md shadow-blue-700 overflow-auto">
        <h1 className="text-amber-100 font-bold text-4xl mb-3">
          Recent Notes
        </h1>

        <div className="flex flex-wrap gap-8">
          {task.map((elem, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-cover  justify-between h-52 w-40 rounded-xl p-4 bg-amber-200"
            >
              <div className='overflow-hidden'>
                <h3 className="font-bold">{elem.title}</h3>
                <p className="text-xs ">{elem.details}</p>
              </div>

              <button
                onClick={() => deleteNote(idx)}
                className="bg-red-500 text-white text-xs rounded py-1"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Form
