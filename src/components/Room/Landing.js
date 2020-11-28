import { Button } from 'react-bootstrap';

import SignOut from '../Authentication/Signout'

function Landing () {
    return (
        <>
            <SignOut />
            <br/>
            <button>Join a Room</button> OR <button>Create a room</button>
        </>
    )
}

export default Landing;