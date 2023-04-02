import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError(true);
      return;
    }

    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
      setError(true);
      return;
    }

    if (password.length < 8) {
      setError(true);
      return;
    }

    localStorage.setItem('user', JSON.stringify({ email, password }));
    setEmail('');
    setPassword('');
    setError(false);
    history.push('/login');
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(false);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setError(false);
  };

  return (
    <div className="register">
      <h2>Register</h2>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        {error && <p className="error-para">Please enter a valid email and password (minimum 8 characters).</p>}
        <div className="email-div">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" value={email} onChange={handleEmailChange} />
        </div>
        <div className="password-div">
          <label htmlFor="password">Password: </label>
          <input type="password" id="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="submit" className="register-btn">
          Register
        </button>
      </form>
      <div>
        Already have an account? <Link to="/login"><button className="login-link">Login</button></Link>
      </div>
    </div>
  );
}

export default Register;
