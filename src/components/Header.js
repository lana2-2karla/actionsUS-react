import React from 'react'
import { FaCoins } from 'react-icons/fa'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <FaCoins className='icon' />
        <h1> Fit <span className='purple'>Action</span></h1>
    </div>
  )
}

export default Header
