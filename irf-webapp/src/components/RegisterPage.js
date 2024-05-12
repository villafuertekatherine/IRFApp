import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faUnlockAlt } from '@fortawesome/free-solid-svg-icons';
import './style.css'; // Ensure the path is correct

function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Used for redirecting to another route

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formData);
        // Implement the POST request to the backend
        try {
            const response = await fetch('/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Registration successful:', data);
                // Redirect user to the login page or home page after registration
                navigate('/login'); // Change this as needed
            } else {
                const data = await response.json();
                setError(data.message || 'Failed to register');
                console.error('Registration failed:', data);
            }
        } catch (error) {
            setError('Server error');
            console.error('Error:', error);
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <h2>Register</h2>
                {error && <p className="error">{error}</p>} {/* Display any error that occurs during registration */}
                <div className="input-box">
                    <FontAwesomeIcon icon={faUser} aria-hidden="true" />
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-box">
                    <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-box">
                    <FontAwesomeIcon icon={faUnlockAlt} aria-hidden="true" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="input-box">
                    <input type="submit" value="Register" />
                </div>
                <Link to="/">Navigate to main</Link>
            </form>
        </div>
    );
}

export default RegisterPage;
