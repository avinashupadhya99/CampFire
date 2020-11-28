import './App.css';

import firebase, { auth } from './firebase.js';
import 'firebase/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SignIn from './components/Authentication/SignIn';

const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      Camp Fire
      {user ? <LoggedIn /> : <SignIn />}
    </div>
  );
}

function LoggedIn() {
  return(
    <>
      Logged In
    </>
  )
}

export default App;
