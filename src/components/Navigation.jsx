import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='h-[50px] items-center flex justify-between px-5 bg-gray-500 text-white'>
      <span className='font-bold'>Some store</span>
      <span>
        <Link to='/' className='mr-2'>Product</Link>
        <Link to='/about'>About</Link>
      </span>
    </nav>
  )
}

export default Navigation