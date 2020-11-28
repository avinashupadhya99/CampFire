import './App.css';

import firebase, { auth } from './firebase.js';
import 'firebase/firestore';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import SignIn from './components/Authentication/SignIn';
import Landing from './components/Room/Landing';

const firestore = firebase.firestore();

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? <Landing /> : <SignIn />}
    </div>
  );
}



export default App;
