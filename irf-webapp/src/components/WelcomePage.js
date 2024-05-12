import React from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
    return (
        <div>
            <h1>Welcome to the application</h1>
            <Link to="/register">Navigate to the registration</Link>
            <Link to="/login">Navigate to the login</Link>
        </div>
    );
}

export default WelcomePage;
