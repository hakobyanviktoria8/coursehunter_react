import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState, useEffect } from 'react'
import { auth, signInWithGoogle } from '../firebase/firebase_config'
import "./../styles/SignIn.scss"
import { useNavigate } from "react-router-dom";
import SignUp from '../components/SignUp';

function SignUpIn() {
    const [dataSignIn, setDataSignIn] = useState({ email:"", password:""})
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
            const user1 = await signInWithEmailAndPassword(auth, dataSignIn.email, dataSignIn.password)
            console.log("handleSubmitSignIn user1 ",user1)
            localStorage.setItem("user", JSON.stringify(dataSignIn))
            setDataSignIn({email:"", password:""})
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
            <SignUp user={user}/>

            {/* sign in form data */}
            <div className='signin'>
                <h2>Sign In</h2>
                <form onSubmit={handleSubmitSignIn}>
                    <label>
                        Email:
                        <input onChange={handleChangeSignIn} value={dataSignIn.email} type="text" name="email" autoComplete='off'/>
                    </label>
                    <label>
                        Password:
                        <input onChange={handleChangeSignIn} value={dataSignIn.password} type="password" name="password" autoComplete='new-password'/>
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