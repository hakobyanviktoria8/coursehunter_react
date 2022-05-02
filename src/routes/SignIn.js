import React, { useState } from 'react'
import "./../styles/SignIn.scss"

function SignIn() {
    const [dataSignIn, setDataSignIn] = useState(null)
    const [dataSignUp, setDataSignUp] = useState(null)

    const handleChangeSignIn =(e) =>{
        const {name, value} = e.target
        setDataSignIn({
            ...dataSignIn,
            [name] : value,
        })
    }
    // Submit Sign In
    const handleSubmitSignIn=(e)=>{
        e.preventDefault();
        console.log(dataSignIn);
        
    }    
    
    // Submit Sign Up
    const handleSubmitSignUp=(e)=>{
        e.preventDefault();
        console.log(dataSignUp);
    }
    const handleChangeSignUp =(e) =>{
        const {name, value} = e.target
        setDataSignUp({
            ...dataSignUp,
            [name] : value,
        })
    }

  return (
    <div className='formsWrapper'>
        <div className='signin'>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmitSignIn}>
                <label>
                    Email:
                    <input onChange={handleChangeSignIn} type="email" name="email" autoComplete='off'/>
                </label>
                <label>
                    Password:
                    <input onChange={handleChangeSignIn} type="password" name="password" autoComplete='off'/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>

        <div className='signup'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmitSignUp}>
                <label>
                    Full name:
                    <input onChange={handleChangeSignUp} type="text" name="name" autoComplete='off'/>
                </label>
                <label>
                    Age:
                    <input onChange={handleChangeSignUp} type="date" name="age" autoComplete='off'/>
                </label>
                <label>
                    Email:
                    <input onChange={handleChangeSignUp} type="email" name="email" autoComplete='off'/>
                </label>
                <label>
                    Password:
                    <input onChange={handleChangeSignUp} type="password" name="password" autoComplete='off'/>
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    </div>
  )
}

export default SignIn