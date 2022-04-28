import React from 'react'
import { Link } from 'react-router-dom'
import Backet from './Backet'
import "./../styles/Headers.scss"

function Header() {
  return (
    <div className='header'>
        <div>
            <Link to="/">LOGO</Link>   
        </div>
        <div className='right'>
            <Link to="shop">SHOP</Link>   
            <Link to="signin">SIGN IN</Link>   
            <Link to="contact">CONTACT</Link>   
            <Backet />
        </div>
    </div>
  )
}

export default Header