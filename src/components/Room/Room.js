import { Redirect } from "react-router-dom";
import { auth, db } from "../../firebase";

function Room({ match }) {
    const user = auth.currentUser;

    if(!user) {
        return <Redirect to={"/"} />
    }

    

    return(
        <div>
            <h2>Room #{match.params.id}</h2>
            ...
        </div>
    )
}

export default Room;