import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-[auto] w-[100%] p-[12px] text-white font-bold flex justify-around bg-blue-500 text-[90%]'>
        
    <Link  to="/" className='hover:text-red-600'>Home</Link>
    <Link to="/about" className='hover:text-red-600'>About</Link>
    <Link to="/contact" className='hover:text-red-600'>Contact</Link>
    <Link to="/manu" className='hover:text-red-600'>Manu</Link>


    </div>
  )
}

export default Header