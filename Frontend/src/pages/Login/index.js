import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

export default function Login({ onLogin }) {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      if (onLogin) {
        onLogin();
      }
      history.push('/');
    } else {
      setError('Invalid username or password');
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f2f5',
  };

  const loginContainerStyle = {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
  };

  const formGroupStyle = {
    marginBottom: '20px',
  };

  const inputGroupStyle = {
    marginBottom: '15px',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    fontSize: '16px',
  };

  const submitContainerStyle = {
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
    width: '100%',
  };

  const errorMessageStyle = {
    color: 'red',
    marginTop: '10px',
    textAlign: 'center',
  };

  const formTitleStyle = {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '24px',
    color: '#333',
  };

  return (
    <div style={containerStyle}>
      <div style={loginContainerStyle}>
        <h4 style={formTitleStyle}>Login</h4>
        <div style={formGroupStyle}>
          <div style={inputGroupStyle}>
            <label htmlFor='username'>Email</label>
            <input
              placeholder='example@example.com'
              type='text'
              id='username'
              name='username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={inputStyle}
            />
          </div>
          <div style={inputGroupStyle}>
            <label htmlFor='password'>Password</label>
            <input
              placeholder='Place your password here'
              type='password'
              id='password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={inputStyle}
            />
          </div>
          {error && <p style={errorMessageStyle}>{error}</p>}
          <div style={submitContainerStyle}>
            {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
<button onClick={handleLogin} style={buttonStyle}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
