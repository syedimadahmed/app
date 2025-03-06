import React from 'react'

const HowTo = () => {
  return (
    <div className='text-center py-16 px-2 bg-gray-400'>
        <h2 className='text-2xl text-black font-semibold mb-4'>How To</h2>
        <div className='flex flex-col md:flex-row max-w-[800px] mx-auto gap-2'>

        <div className='flex-1 bg-black py-16 text-white'>
            <h3 className='text-2xl'>Login</h3>
            <p>Create an account or Register for a new account</p>
        </div>
        <div className='flex-1 bg-black py-16 text-white'>
            <h3 className='text-2xl'>Submit</h3>
            <p>Enter and submit your academic accomadations.</p>
        </div>
        <div className='flex-1 bg-black py-16 text-white'>
            <h3 className='text-2xl'>Track</h3>
            <p>Track the status of your accomadations and view all.</p>
        </div>
        </div>
    </div>
  )
}

export default HowTo