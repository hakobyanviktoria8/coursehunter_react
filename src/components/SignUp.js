import { addDoc, collection, getDocs } from 'firebase/firestore'
import React, { useState, useEffect } from 'react'
import { db } from '../firebase/firebase_config'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase_config'

function SignUp({user}) {
  const [userData, setUserData] = useState({
      name:"",
      age:"",
      email:"",
      password:""
  })

  const [users,setUsers] = useState([])
  const dbColectionRef= collection(db, "users")

  // input fileds change
  const handleChangeSignUp = (e) => {
    const {name, value} = e.target
    setUserData({
        ...userData,
        [name] : value,
    })
}

// send data fiebase
const handleSubmitSignUp= async (e) => {
    try {
        e.preventDefault();
        console.log("Sign Up user data ",userData);
        const user = await createUserWithEmailAndPassword(auth, userData.email, userData.password)
        await addDoc(dbColectionRef, userData)
        // console.log("handleSubmitSignUp user ",user)
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

  useEffect(()=>{
      const getUsersData = async() => {
          const data = await getDocs(dbColectionRef)
          setUsers(data.docs.map(doc=>({...doc.data(), id: doc.id})))
      }
      getUsersData()
  },[])

//   {console.log("signup all users",users)}

  return (
    <div className='signup'>
        {/* sign up form data */}
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
            <input className="btn" type="submit" value="Submit" disabled={user}/>
        </form>
    </div>
  )
}

export default SignUp