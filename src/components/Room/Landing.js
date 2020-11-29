import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

import SignOut from '../Authentication/Signout'
import Room from './Room';

import { auth, db } from '../../firebase';


function Landing () {
    return (
        <>
            <SignOut />
            <br/>
            <Button variant="warning">Join a Room</Button> OR <Button variant="warning" onClick={createRoom}>Create a room</Button>
        </>
    )
}

function createRoom() {
    const user = auth.currentUser;
    db.collection("users").doc(user.uid).get()
    .then((userDoc) => {
        if(userDoc.data().roomID) {
            const roomPath = `/rooms/${userDoc.data().roomID}`;
            <Redirect to={roomPath} />
        } else {
            db.collection("rooms").add({
                owner: user.uid,
                active: false
            })
            .then(function(roomDoc) {
                console.log("Document written with ID: ", roomDoc.id);
                db.collection("users").doc(user.uid).set({
                    roomID: roomDoc.id
                }, { merge: true })
                .then(() => {
                    <Room />
                })
                .catch((err) => {
                    console.error(err);
                })
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
            
        }
    }).catch(userError => { 
        console.error(userError);
    });
}


export default Landing;