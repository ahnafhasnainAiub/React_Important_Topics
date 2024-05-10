import React, {useContext} from 'react';

import {logInContext} from '../App';

const Profile = () => {
  
    const {isLoggedIn, onLogin, onLogout} = useContext(logInContext);
    
    return (
    <div>
        <h2>User Profile</h2>
        {isLoggedIn ? (
            <div>
                <p>Welcome, Ahnaf</p>
                <button onClick={onLogout}>Logout</button>
            </div>
        ) : (
          <div>
            <p>Ahnaf Please login</p>
            <button onClick={onLogin}>LogIn</button>
          </div>
        )}
    </div>
  );
};

export default Profile;