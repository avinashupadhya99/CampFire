import { Redirect, withRouter } from "react-router-dom";
import { auth, db } from "../../firebase";
import { useState, useEffect } from "react";

import { Error } from "../Common/Error";

function Room({ match }) {
    const [validity, setValidity] = useState({notLoaded:true});
    const [user={notLoaded:true}, setUser] = useState(null);

    useEffect(() => {
        auth.onAuthStateChanged(user=> {
            setUser(user);
            if(user) {
                db.collection("users").doc(user.uid).get()
                .then(userDoc => {
                    setValidity(userDoc.data().roomID === match.params.id);

                }).catch(error => {
                    console.error(error);
                })
            } else {
                setValidity(false);
            }
        })
    });

    while(validity.notLoaded) {
        return <div />
    }    

    if(!validity) {
        return <Redirect to={"/"} />
    }

    

    return(
        <div>
            <h2>Room #{match.params.id}</h2>
            <h3>User {user.uid}</h3>
        </div>
    )
    

    
}

export default withRouter(Room);