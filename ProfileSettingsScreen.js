import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { Context as UserContext } from './UserContext';

function ProfileSettingsScreen() {

    // Subscribe to the Provider
    const { state }  = useContext(UserContext);
    const { firstName, lastName, email} = state;

    if (!state.loginStatus) {
        return (
            <Redirect to='/login' />
        )
    }   
    else {
        return (
            <div className="container py-5" style={{"maxWidth": "600px"}}>
                <h1>Profile Settings</h1>
                
                <label>First Name</label>
                <input type="text" className="form-control" defaultValue={firstName}/>

                <label>Last Name</label>
                <input type="text" className="form-control" defaultValue={lastName}/>

                <label>Email</label>
                <input type="text" className="form-control" defaultValue={email}/>

                <button className="btn btn-primary my-3">Save Changes</button>

            </div>
        )
    }

}

export default ProfileSettingsScreen;