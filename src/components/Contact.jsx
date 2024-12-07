import React from 'react'

const Contact = () => {
  return (
    <div className='w-[100%] h-[100vh] bg-blue-200 text-white flex justify-center items-center'>
      
    <form className='drop-shadow-lg p-[5px] w-[70%] sm:w-[45%] rounded-md h-[auto] flex flex-col items-center justify-center bg-blue-400 text-base'>
    <h2 className='pb-[4px] border-b-2 border-b-blue-700 w-[100%] text-center font-bold text-lg mt-[15px] mb-[10px] uppercase'>Contact us</h2>
      <p className='w-[100%] text-left font-semibold mt-[5px] mb-[5px] ml-[8px]'>Name:</p>
      <input type='text' placeholder='Name' required className='w-[98%] rounded-md p-[6px] m-[5px]'></input>
      <p className='w-[100%] text-left font-semibold mt-[5px] mb-[5px] ml-[8px]'>Email:</p>
      <input type='email' placeholder='Email' required className='w-[98%] rounded-md p-[6px] m-[5px]'></input>
      <p className='w-[100%] text-left font-semibold mt-[5px] mb-[5px] ml-[8px]'>Message:</p>
      <textarea rows={5} placeholder='massege' required className='w-[98%] rounded-md p-[6px] m-[5px]'/>
      <button className='w-[96%] mt-[6px] rounded-md drop-shadow-lg border-2 border-blue-700 bg-blue-600 mb-[8px] p-[4px] hover:bg-green-600 hover:border-2 hover:border-green-500'>Send</button>
    </form>
  </div>
  )
}

export default Contact