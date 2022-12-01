import React from 'react'

const searchclr = ({ children }) => {
  return (
    <div className="bg-black flex items-center py-10">
      <div className='max-w-md mx-auto w-full'>
        <h1 className='text-white text-center text-2xl font-bold mb-5'>Images Search Engine</h1>
        {children}
      </div>
    </div>
  )
}

export default searchclr