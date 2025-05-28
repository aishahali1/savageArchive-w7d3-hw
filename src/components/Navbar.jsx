import React from 'react'
import { Link } from 'react-router'

function Navbar() {
  return (
    <>
    <nav className='bg-white text-black uppercase h-25 flex flex-row items-center gravitas-one-regular'>
        <img src='/logo2.png' className='w-50'></img>
        <ul className='flex flex-row items-center gap-3 p-4 text-xl font-extrabold'>
        <Link to="/"><li>home</li></Link>
        <Link to="/characterlist"><li>archive</li></Link>
        </ul>
    </nav>
    </>
  )
}

export default Navbar