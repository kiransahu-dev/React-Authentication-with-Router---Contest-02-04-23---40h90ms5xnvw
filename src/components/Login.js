import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Login = () => {
        const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [isLogIn, setIsLogIn] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        // Check if input fields are filled
        if (!email || !password) {
            setError(true);
            return;
        }

        // Check if email and password match the one in local storage
        const storedEmail = localStorage.getItem('user');
        const storedPassword = localStorage.getItem('password');
        if (email !== storedEmail || password !== storedPassword) {
            setError(true);
            setEmail('');
            setPassword('');
            return;
        }

        // If email and password match, log in the user
        setIsLogIn(true);
        setError(false);
    };

    if (isLogIn) {
        return <Redirect to='/' />;
    }

    return (
        <div className='login'>
            <h2>Login</h2>
            {error && <p className='error-para'>Email or password is invalid</p>}
            <form onSubmit={handleLogin}>
                <div className='email-div'>
                    <label htmlFor='email'>Email: </label>
                    <input
                        type='email'
                        id='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='password-div'>
                    <label htmlFor='password'>Password: </label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type='submit' className='login-btn'>
                    Log In
                </button>
            </form>
            <div>
                Don't have an account?
                <Link to='/register'>
                    <button className='register-link'>Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Login;
