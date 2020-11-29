import './App.css';

import { db, auth } from './firebase.js';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import SignIn from './components/Authentication/SignIn';
import Landing from './components/Room/Landing';
import Room from './components/Room/Room';

let currentUser;

function App() {

  const [user] = useAuthState(auth);
  currentUser = user;

  return (
    <Router>
      <div className="App">
        {/* <Redirect
          to={{
            pathname: "/"
          }}
        /> */}
        <Switch>
          <Route exact path ="/">
            { user ? <Landing /> : <SignIn /> }
          </Route>
          <Route exact path="/rooms/:id" component={Room} />
        </Switch>
      </div>
    </Router>
  );
}

// function SecureRoute({ component: Component, ...rest }) {
//   auth.onAuthStateChanged(user=> {
//     return (
//       <Route
//         {...rest}
//         render={(props) =>
//           user ? (
//             <Component {...props} />
//           ) : (
//             <Redirect to={"/"} />
//           )
//         }
//       />
//     );
//   });
  
// }



export default App;
