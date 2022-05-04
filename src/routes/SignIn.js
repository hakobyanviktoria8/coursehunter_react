import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState, useEffect } from 'react'
import { auth, signInWithGoogle } from '../firebase/firebase_config'
import "./../styles/SignIn.scss"
import { useNavigate } from "react-router-dom";

function SignUpIn() {
    const [dataSignUp, setDataSignUp] = useState({})
    const [dataSignIn, setDataSignIn] = useState({})
    const [user, setUser] = useState({})
    const navigate = useNavigate();

    // Submit Sign Up registration________________
    // refresh and didn't lost register user

    // fixed multiple rendering
    useEffect(() => {
        return onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
    }, [])

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
            // console.log("data Sign Up ",dataSignUp);
            const user = await createUserWithEmailAndPassword(auth, dataSignUp.email, dataSignUp.password)
            // console.log("handleSubmitSignUp ",user)
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
            console.log("Sign In user data ",dataSignIn);   
            const user = await signInWithEmailAndPassword(auth, dataSignIn.email, dataSignIn.password)
            console.log("handleSubmitSignIn user ",user)
            localStorage.setItem("user", JSON.stringify(dataSignIn))
            // navigate("/")
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode) {
                alert(errorMessage);
            }
            console.log("Opps",errorMessage)
        }    
    }    
    
    // when sign in with google, user data keep localStorage, and get it here
    const userStr = localStorage.getItem('user');
    // Parse JSON string to object
    const userObj = JSON.parse(userStr);

  return (
    <>
        <div className='signOut'>
            {/* write welcome message and add SignOut button */}
            { user?.email && 
                <>
                    <div>
                        {userObj &&
                            <>
                                <h3>{userObj?.name}</h3>
                               {userObj?.photoURL && <img src= {userObj?.photoURL}/>}
                            </>
                        }
                    </div>
                    
                    <div>
                        <h3>Welcome {user?.email}</h3>
                    </div>
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
                        <input onChange={handleChangeSignUp} type="text" name="email" autoComplete='off'/>
                    </label>
                    <label>
                        Password:
                        <input onChange={handleChangeSignUp} type="password" name="password" autoComplete="new-password"/>
                    </label>
                    <input className="btn" type="submit" value="Submit" />
                </form>
            </div>

            {/* sign in form data */}
            <div className='signin'>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmitSignIn}>
                    <label>
                        Email:
                        <input onChange={handleChangeSignIn} type="text" name="email" autoComplete='off'/>
                    </label>
                    <label>
                        Password:
                        <input onChange={handleChangeSignIn} type="password" name="password" autoComplete='new-password'/>
                    </label>
                    <input className="btn" type="submit" value="Submit" disabled={user}/>
                </form>

                {/* sign In Google__________________________ */}
                <button onClick={signInWithGoogle} className="btn" disabled={user}>Sign in with Google</button>
            </div>
        </div>
    </>
  )
}

export default SignUpIn