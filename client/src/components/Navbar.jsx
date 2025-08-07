import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-white border-b border-gray-200 sticky top-0 z-50'>
      <div className='max-w-6xl mx-auto px-6 py-4 flex items-center justify-between'>
        <Link to='/' className='text-2xl font-light text-black tracking-wide hover:text-gray-700 transition-colors'>
          Todo
        </Link>
        <div className='flex gap-8 items-center'>
          <Link 
            to='/' 
            className='text-gray-700 hover:text-black font-light text-sm tracking-wide transition-colors'
          >
            Home
          </Link>
          <Link 
            to='/about' 
            className='text-gray-700 hover:text-black font-light text-sm tracking-wide transition-colors'
          >
            About
          </Link>
          <Link 
            to='/contact' 
            className='text-gray-700 hover:text-black font-light text-sm tracking-wide transition-colors'
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
