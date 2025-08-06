import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
   
    <nav className='bg-blue-500 flex py-5 px-10 items-center justify-between'>
      <h2 className='text-2xl'>Todo</h2>
      <div className='flex gap-10 items-center text-lg underline'>
        <Link to='/'>Home</Link>
        <Link to='/about'>My Tasks</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/product'>Product</Link>
      </div>
    </nav>
  )
}

export default Navbar
