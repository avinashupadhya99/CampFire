import GoogleButton from 'react-google-button'

import './authentication.css';
import firebase, { auth } from '../../firebase.js';

function SignIn() {

    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <div className="sign-in-div">
        <GoogleButton className="sign-in" id="customBtn" onClick={signInWithGoogle} />
      </div>
    )
  
  }

export default SignIn;