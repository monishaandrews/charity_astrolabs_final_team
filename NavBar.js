import React, { useState, useEffect, useContext } from 'react';
import { Context as UserContext } from './UserContext';
import { Link } from 'react-router-dom';


function NavBar(props) {


    const initialState = {
        '/': 'text-secondary',
        '/features': 'text-secondary',
        '/pricing': 'text-secondary',
        '/faqs': 'text-secondary',
        '/about': 'text-secondary',
        '/register': 'text-secondary'
    }

    let [ linkState, setLinkState ] = useState(initialState);
    let { state, setUserState } = useContext(UserContext);
    let { loginStatus } = state;

    useEffect(
        function() {
            setLinkState(
                {
                    ...initialState,
                    [props.path]: 'text-black'
                }
            )
        },
        [ props.path ]
    );

    function logout() {
        setUserState(
            {
                ...state,
                loginStatus: false
            }
        );
    };


    return (
        <React.Fragment>
        <header className="p-3 ">
            <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                <a href="/" className="mb-2 mb-lg-0" style={{"textDecoration":"none"}}>
                    <h1 style={{"fontSize":"50px"}}>DONATION</h1>
                </a>

                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className={`btn btn-warning nav-link mx-5 px-3 ${linkState['/']}`}>Home</Link></li>
                    
                </ul>


                <div className="text-end">
                    { loginStatus === true && <Link to="/profile-settings" className="btn btn-outline-light me-2">Profile Settings</Link>}
                    { loginStatus === false && <Link to="/login" className="btn btn-warning mx-3">Log in</Link>}
                    { loginStatus === false && <Link to="/register" className="btn btn-primary">Register</Link>}
                    { loginStatus === true && <button onClick={logout} className='btn btn-danger'>Log out</button> }
                </div>
            </div>
            </div>
        </header>

        </React.Fragment>
    )
};

export default NavBar;