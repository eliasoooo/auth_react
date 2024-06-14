import React, { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Implement registration logic here
      console.log('Registered:', { username, password });
    } else {
      console.error('Passwords do not match');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label  htmlFor="username">Username:</label>
        <input
          id='username' 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label  htmlFor="password">Password:</label>
        <input 
          id='password'
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label  htmlFor="confirm_password">Confirm:</label>
        <input 
          id='confirm_password'
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;
