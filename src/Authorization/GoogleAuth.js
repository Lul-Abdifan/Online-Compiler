import React, { useState } from 'react';
import { auth, googleProvider } from '../Config/auth';
import { signInWithPopup, signOut } from 'firebase/auth';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';

export default function GoogleAuth() {
  const [forceUpdate, setForceUpdate] = useState(false);

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      setForceUpdate((prev) => !prev);
    } catch (err) {
      console.error('Google Sign In Error:', err);
    }
  };

  const logOut = async () => {
    try {
      await signOut(auth);
      setForceUpdate((prev) => !prev);
      console.log('You logged out');
    } catch (err) {
      console.error('Logout Error:', err);
    }
  };

  return (
    <div>
      {auth.currentUser ? (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            alt="User Avatar"
            style={{
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              marginRight: '25px',
            }}
            src={auth.currentUser.photoURL}
          />
          <h6 style={{ marginRight: '10px' }}>Log Out</h6>
          <a onClick={logOut}>
            <LogoutIcon />
          </a>
        </div>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <h6 style={{ marginRight: '10px' }}>Sign In</h6>
          <a onClick={signInWithGoogle}>
            <LoginIcon />
          </a>
        </div>
      )}
    </div>
  );
}
