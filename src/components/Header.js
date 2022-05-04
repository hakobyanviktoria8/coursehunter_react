import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import Backet from './Backet'
import "./../styles/Headers.scss"
import {auth} from "./../firebase/firebase_config"
import {signOut, onAuthStateChanged } from 'firebase/auth'

function Header() {
  const [userObj, setUserObj] = useState(localStorage.getItem('user'))

  // signOut User________________________________
  const signOutUser= async() => {
   console.log("User sign out success")
   await signOut(auth)
   localStorage.removeItem('user');
   setUserObj(null)
 }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser)=>{
      setUserObj(currentUser)
    })
  }, []);
  
return (
    <div className='header'>
        <div>
            <Link to="/">LOGO</Link>   
        </div>
        <div className='right'>
            <Link to="shop">SHOP</Link>  
            {
              !userObj ?
              <Link to="signin">SIGN IN</Link>   
              :
              <button onClick={signOutUser}>Sign Out</button>
            } 
            <Link to="contact">CONTACT</Link>   
            <Backet />
        </div>
    </div>
  )
}

export default Header