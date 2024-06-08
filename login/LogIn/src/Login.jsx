import React, { useState } from 'react';
import './Login.css'; // Import CSS for styling
import img1 from "./assets/img1.png";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // For example, send login details to an API
    if (username === '' || password === '') {
        alert('Please enter both username and password');
        return;
      }
    
      // Mock login logic
      if (username === 'user' && password === 'password') {
        alert('Login successful');
        // Redirect to another page or update the state
      } else {
        alert('Invalid username or password');
      }
  };

  return (
    <div>
        <h1>Welcome back !</h1>
        <h2>Enter the Email And Password you used to register.</h2>
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username or Email:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <p>Forgot your password  ?</p>
        <button type="submit">Login</button>
        <p className='or'>or</p>
      </form>
      <img src={img1} className='img1' />
    </div>
    
    </div>
  );
};

export default Login;
