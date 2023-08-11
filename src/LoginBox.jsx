import React, { useState } from 'react';
import './LoginBox.css';

const LoginBox = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const validateUsername = () => {
    const containsLetters = /[a-zA-Z]/.test(username);
    const containsNumbers = /[0-9]/.test(username);
    return containsLetters && containsNumbers;
  };

  const validatePassword = () => {
    const containsUppercase = /[A-Z]/.test(password);
    const containsSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password);
    const isValid = /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/.test(password);
    return isValid && containsUppercase && containsSpecialChar;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!validateUsername()) {
      alert("Username must contain numbers and letters only.");
      return;
    }

    if (!validatePassword()) {
      alert("Password must contain alphanumeric values only.");
      return;
    }

    alert("Form submitted successfully!");
  };

  return (
    <div className="login-box">
      <div className="logo">
        <img src="download1.png" alt="" />
      </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          <label>Username</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <label>Password</label>
        </div>
        <button type="submit">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginBox;
