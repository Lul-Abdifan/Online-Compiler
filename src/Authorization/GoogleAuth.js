import React, { useState} from 'react';
import { auth,googleProvider } from '../Config/auth'
import {signInWithPopup,signOut } from 'firebase/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';



export default function GoogleAuth() {
  const [forceUpdate, setForceUpdate] = useState(false);

  const signInWithGoogle = async ()=>{
    try{
      
      await signInWithPopup(auth,googleProvider)
      setForceUpdate((prev)=>!prev)
      console.log("You logged Out")

      console.log(auth.currentUser.email)
      console.log(auth.currentUser.photoURL)
      console.log(auth.currentUser.photoURL)

            console.log(auth.currentUser.photoURL)


    }
    catch(err){
      console.log(err);
    }

  }
  const LogOut = async ()=>{
    try{
      await signOut(auth)
      setForceUpdate((prev)=>!prev)

      console.log("You logged Out")
    }
    catch(err)
    {
      console.log(err)
    }

  }
  return (
    <div>

{
  auth.currentUser ? <div style ={{display: 'flex', alignItems:'center'}}> 
    <img alt="User Avatar"
            style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '25px' }} src ={auth.currentUser.photoURL}/> <a onClick={LogOut}><LogoutIcon/></a>
  </div> :
  <a onClick={signInWithGoogle}> <LoginIcon /></a> }



    </div>
  )
}
