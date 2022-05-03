import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase/firebase_auth_config'
import "./../styles/SignIn.scss"
import { useNavigate } from "react-router-dom";
import { async } from '@firebase/util';

function SignUpIn() {
    const [dataSignUp, setDataSignUp] = useState({email:"", password:""})
    const [dataSignIn, setDataSignIn] = useState({})
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    // Submit Sign Up registration________________
    // refresh and didn't lost register user
    onAuthStateChanged(auth, (currentUser)=>{
        setUser(currentUser)
    })
    // input fileds change
    const handleChangeSignUp = (e) => {
        const {name, value} = e.target
        setDataSignUp({
            ...dataSignUp,
            [name] : value,
        })
    }
    // send data fiebase
    const handleSubmitSignUp= async (e) => {
        try {
            e.preventDefault();
            console.log("data Sign Up ",dataSignUp);
            const user = await createUserWithEmailAndPassword(auth, dataSignUp.email, dataSignUp.password)
            console.log(user)
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log("Opps",errorMessage)
        }
    }

    // signOut User________________________________
    const signOutUser= async() => {
        console.log("User sign out success")
        await signOut(auth)
    }

    // Submit Sign In________________________________
    const handleChangeSignIn =(e) =>{
        const {name, value} = e.target
        setDataSignIn({
            ...dataSignIn,
            [name] : value,
        })
    }
    const handleSubmitSignIn = async (e) => {
        try {
            e.preventDefault();
            console.log("data Sign In ",dataSignIn);   
            const user = await signInWithEmailAndPassword(auth, dataSignIn.email, dataSignIn.password)
            console.log(user)
            navigate("/")
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode) {
                alert(errorMessage);
            }
            console.log("Opps",errorMessage)
        }    
    }    

  return (
    <>
        <div className='signOut'>
            {/* write welcome message and add SignOut button */}
            { user?.email && 
                <>
                    <h3>Welcome {user?.email}</h3>
                    <button onClick={signOutUser}>Sign Out</button>
                </>
            }
        </div>
       
        <div className='formsWrapper'>
            {/* sign up form data */}
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

            {/* sign in form data */}
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
        </div>
    </>
  )
}

export default SignUpIn